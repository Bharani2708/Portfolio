import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { ContactMessage } from '../models/ContactMessage.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Strict Server-Side Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Identity name parameter is required.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'A valid email transmission address is required.' });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Subject parameter is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Message payload must contain at least 10 characters.' });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

    // 2. Persist to MongoDB if connected
    const isDbConnected = mongoose.connection.readyState === 1;
    let savedRecord = null;

    if (isDbConnected) {
      savedRecord = await ContactMessage.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        ipAddress: clientIp,
      });
      console.log(`📥 Contact submission saved to MongoDB ID: ${savedRecord._id}`);
    } else {
      console.log(`📥 In-memory contact submission from: ${name.trim()} <${email.trim()}>`);
    }

    // 3. Dispatch Email via Nodemailer if credentials are set
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

    if (EMAIL_USER && EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: EMAIL_HOST || 'smtp.gmail.com',
          port: Number(EMAIL_PORT) || 587,
          secure: Number(EMAIL_PORT) === 465,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Portfolio Contact System" <${EMAIL_USER}>`,
          to: EMAIL_TO || EMAIL_USER,
          replyTo: email.trim(),
          subject: `[Portfolio Inquiry] ${subject.trim()}`,
          text: `New Transmission Received:\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\nIP: ${clientIp}\n\nPayload:\n${message.trim()}`,
          html: `
            <div style="font-family: sans-serif; background-color: #0B0F19; color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid rgba(0,240,255,0.3);">
              <h2 style="color: #00F0FF; margin-top: 0;">New Portfolio Telemetry Message</h2>
              <p><strong>Sender:</strong> ${name.trim()} &lt;${email.trim()}&gt;</p>
              <p><strong>Subject:</strong> ${subject.trim()}</p>
              <p><strong>Source IP:</strong> ${clientIp}</p>
              <hr style="border-color: rgba(255,255,255,0.1); margin: 20px 0;" />
              <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px;">
                <p style="white-space: pre-wrap; margin: 0;">${message.trim()}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`✉️ Nodemailer successfully dispatched email to ${EMAIL_TO || EMAIL_USER}`);
      } catch (mailErr) {
        console.warn(`⚠️ Nodemailer delivery notice: ${mailErr.message}`);
      }
    } else {
      console.log('ℹ️ Nodemailer credentials not configured in .env. Message recorded locally.');
    }

    // 4. Return success response
    return res.status(201).json({
      success: true,
      message: 'Transmission successfully processed and logged.',
      transmissionId: savedRecord ? savedRecord._id : `LOCAL-${Date.now()}`,
    });
  } catch (error) {
    next(error);
  }
};

