export const portfolioData = {
  personal: {
    name: "Bharani Dharan",
    role: "Full Stack Developer & MERN Engineer",
    tagline: "Building High-Impact Web Applications & Scalable Full-Stack Systems",
    bio: "Passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js), TypeScript, and modern responsive web interfaces. Experienced in engineering component-driven frontend architectures and connecting robust RESTful APIs.",
    location: "Tamil Nadu, India / Remote",
    availability: "Available for Full-time Roles & High-Impact Engineering Projects",
    status: "Active // Ready for Opportunities",
    stats: [
      { label: "Production Deployments", value: "10+" },
      { label: "Core Technologies", value: "13+" },
      { label: "CGPA (Engineering)", value: "7.6" },
      { label: "System Uptime Mentality", value: "99.9%" },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "contact.bharanidharan@gmail.com",
    },
    resumeUrl: "#resume",
  },

  about: {
    headline: "Engineering Scalable Web Solutions with Responsive User-Centric Design",
    paragraphs: [
      "I am a Computer Science & Engineering undergraduate at Karpagam Academy of Higher Education with hands-on industry experience building scalable web applications.",
      "My core expertise revolves around React.js, Redux, Node.js, Express, MongoDB, TypeScript, and REST APIs. I focus on writing modular, clean code, managing component state efficiently, and integrating resilient backend architectures.",
      "With practical internship experience at GCL International and MAANTT Global Services, I thrive in collaborative agile workflows, delivering production-ready modules on time.",
    ],
    pillars: [
      {
        icon: "Cpu",
        title: "Full-Stack Development",
        desc: "Designing and integrating end-to-end web applications with React.js, Node.js, Express, and MongoDB.",
      },
      {
        icon: "Box",
        title: "API Architecture & Databases",
        desc: "Connecting secure RESTful endpoints, data validation, and database operations across MongoDB and MySQL.",
      },
      {
        icon: "Zap",
        title: "Performance & UI/UX",
        desc: "Crafting pixel-perfect, responsive interfaces using Tailwind CSS, Bootstrap, and component-based design systems.",
      },
    ],
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        items: [
          { name: "React.js", level: "Core", tag: "Component Architecture" },
          { name: "Redux", level: "Advanced", tag: "State Management" },
          { name: "JavaScript (ES6+)", level: "Expert", tag: "Language" },
          { name: "TypeScript", level: "Proficient", tag: "Typed JavaScript" },
          { name: "HTML5", level: "Expert", tag: "Semantic Markup" },
          { name: "CSS3", level: "Expert", tag: "Styling & Flexbox/Grid" },
          { name: "Bootstrap", level: "Advanced", tag: "Responsive Framework" },
        ],
      },
      {
        id: "backend",
        name: "Backend Development",
        items: [
          { name: "Node.js", level: "Advanced", tag: "Runtime Environment" },
          { name: "Express.js", level: "Advanced", tag: "Web Framework" },
          { name: "REST API", level: "Expert", tag: "API Design & Integration" },
        ],
      },
      {
        id: "database",
        name: "Databases & Storage",
        items: [
          { name: "MongoDB", level: "Advanced", tag: "NoSQL Database" },
          { name: "MySQL", level: "Proficient", tag: "Relational Database" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Deployment",
        items: [
          { name: "Git", level: "Expert", tag: "Version Control" },
          { name: "Deployment", level: "Proficient", tag: "Render / Vercel Cloud" },
        ],
      },
    ],
    softSkills: [
      "Communication",
      "Creativity",
      "Leadership",
      "Problem Solving",
    ],
  },

  projects: [
    {
      id: "job-connect",
      slug: "job-connect",
      title: "Job Connect — Career & Recruitment Portal",
      tagline: "Dual-Sided Job Discovery & Real-Time Application Tracking Ecosystem",
      description: "A comprehensive recruitment platform connecting job seekers with hiring companies. Features responsive job search with filters, multi-role access control for seekers and recruiters, and an end-to-end recruitment pipeline where recruiters manage postings, review candidate submissions, and update application lifecycle statuses in real time.",
      featured: true,
      category: "Full Stack & MERN",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      metrics: ["Dual-Role RBAC (Recruiter & Seeker)", "Real-Time Application Status Pipeline", "Live on Render Cloud"],
      github: "https://github.com",
      live: "https://job-portal-sw24.onrender.com",
      highlights: [
        "Engineered dual-sided role-based architecture serving both job seekers and corporate recruiters.",
        "Implemented advanced job search with multi-parameter filtering by domain, role, location, and keywords.",
        "Built recruiter management suite allowing recruiters to track incoming applications, review candidate profiles, and update application stages.",
        "Designed real-time application tracker giving job candidates instant visibility into their submission progress.",
      ],
    },
    {
      id: "project-two-upcoming",
      slug: "project-two-upcoming",
      title: "Full Stack Innovation Platform",
      tagline: "Production Web Application Architecture (Details Updating Soon)",
      description: "Second production web application currently being finalized with full-stack capabilities, modern component architecture, and cloud deployment.",
      featured: true,
      category: "Full Stack & MERN",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      metrics: ["Coming Soon", "Responsive Design", "MERN Stack"],
      github: "https://github.com",
      live: "#",
      highlights: [
        "Developed full-stack architecture with modular components.",
        "Connected backend endpoints with MongoDB persistence.",
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Trainee",
      company: "GCL International",
      location: "Coimbatore, Tamil Nadu (Remote)",
      period: "June 2025 — December 2025",
      type: "Internship",
      highlights: [
        "Built responsive, interactive frontend interfaces using React.js and JavaScript, applying component-based architecture and modern UI practices.",
        "Worked with REST APIs to connect frontend components to backend services, with initial exposure to FastAPI for small backend tasks.",
        "Assisted in integrating a MySQL database with the application through backend APIs, supporting reliable data handling across the stack.",
        "Collaborated remotely with the development team, owning assigned modules and following structured, agile-style workflows.",
      ],
      tech: ["React.js", "JavaScript", "REST APIs", "FastAPI", "MySQL", "Git"],
    },
    {
      id: "exp-2",
      role: "Full Stack Development Intern",
      company: "MAANTT Global Services Pvt. Ltd",
      location: "Chennai, Tamil Nadu",
      period: "December 2023",
      type: "Internship",
      highlights: [
        "Built responsive interfaces using HTML, CSS, and JavaScript, applying modular styling and component patterns.",
        "Built and tested backend API functionality and ensured seamless client-server integration.",
        "Used Git and GitHub in an agile development workflow for collaborative version control and feature delivery.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "REST APIs", "Git"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Karpagam Academy of Higher Education",
      period: "2022 — 2026",
      grade: "CGPA: 7.6 / 10.0",
      status: "Pursuing",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (MongoDB & SQL)",
        "Web Technologies & Component Architecture",
        "Object-Oriented Programming (OOP)",
        "Software Engineering",
      ],
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Saradha Vidhyalaya Matric Higher Secondary School",
      period: "Completed",
      grade: "Percentage: 89%",
      percentage: 89,
      status: "Completed",
      coursework: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
    },
    {
      degree: "SSLC (10th)",
      institution: "Saradha Vidhyalaya Matric Higher Secondary School",
      period: "Completed",
      grade: "Percentage: 72%",
      percentage: 72,
      status: "Completed",
      coursework: ["General Curriculum", "Science & Mathematics"],
    },
  ],

  certifications: [
    {
      title: "MERN Stack Web Development",
      issuer: "Full Stack Development Specialization",
      date: "2024",
      credentialId: "MERN-VERIFIED",
      link: "https://github.com",
    },
    {
      title: "React.js & Frontend Engineering",
      issuer: "Frontend Development Certification",
      date: "2023",
      credentialId: "REACT-DEV-CERT",
      link: "https://github.com",
    },
  ],
};
