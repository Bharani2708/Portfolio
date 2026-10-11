import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 100, // 15 minutes
  max: 5, // Limit each IP to 5 contact submissions per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many transmission attempts from this IP. Please wait 15 minutes before re-dispatching.',
  },
});
