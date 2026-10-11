export const portfolioData = {
  personal: {
    name: "Alex Vance",
    role: "Full Stack Engineer & Creative Developer",
    tagline: "Architecting High-Throughput MERN Systems & Cinematic 3D Interfaces",
    bio: "Specializing in the intersection of scalable distributed web architectures and cutting-edge interactive graphics. Experienced in engineering robust RESTful backends, reactive component trees, and WebGL-accelerated digital experiences.",
    location: "San Francisco, CA / Remote",
    availability: "Available for high-impact roles & creative engineering projects",
    status: "Active / Available",
    stats: [
      { label: "Production Deployments", value: "24+" },
      { label: "Years Engineering", value: "3+" },
      { label: "Core Technologies", value: "16+" },
      { label: "System Uptime Mentality", value: "99.9%" },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "contact.alexvance.dev@gmail.com",
    },
    resumeUrl: "#resume",
  },

  about: {
    headline: "Engineering Scalable Backends with Front-Facing Visual Artistry",
    paragraphs: [
      "I am a software engineer driven by a passion for dual extremes: the deep rigor of resilient, low-latency server-side architecture and the fluid dynamism of GPU-accelerated interactive web interfaces.",
      "My foundational stack is MERN (MongoDB, Express, React, Node.js), augmented with Three.js, React Three Fiber, Tailwind CSS, and cloud deployment pipelines. I build products where performance, security, and elegance are non-negotiable.",
      "Whether optimizing high-concurrency database queries or crafting smooth 60 FPS shaders, my focus is always on engineering digital products that leave a lasting mark.",
    ],
    pillars: [
      {
        icon: "Cpu",
        title: "System Architecture",
        desc: "Designing resilient REST APIs, schema validation, rate-limiting, and microservices built for horizontal scale.",
      },
      {
        icon: "Box",
        title: "3D & Creative Computing",
        desc: "Crafting procedural Three.js canvases, responsive shaders, and GPU-driven physics that breathe life into modern web products.",
      },
      {
        icon: "Zap",
        title: "Performance & DX",
        desc: "Strict Core Web Vitals optimization, bundle tree-shaking, automated testing, and seamless continuous delivery.",
      },
    ],
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Ecosystem",
        items: [
          { name: "React 19 / Vite", level: "Core", tag: "Library & Bundler" },
          { name: "Three.js & R3F", level: "Advanced", tag: "3D WebGL" },
          { name: "Tailwind CSS", level: "Expert", tag: "Styling" },
          { name: "JavaScript (ESNext)", level: "Expert", tag: "Language" },
          { name: "Framer Motion", level: "Advanced", tag: "Interactions" },
          { name: "React Router DOM", level: "Advanced", tag: "Routing" },
        ],
      },
      {
        id: "backend",
        name: "Backend & Systems",
        items: [
          { name: "Node.js", level: "Advanced", tag: "Runtime" },
          { name: "Express.js", level: "Advanced", tag: "Web Framework" },
          { name: "RESTful API Design", level: "Advanced", tag: "Architecture" },
          { name: "Nodemailer", level: "Proficient", tag: "Email Delivery" },
          { name: "JWT & Security", level: "Proficient", tag: "Auth & CORS" },
        ],
      },
      {
        id: "database",
        name: "Databases & Storage",
        items: [
          { name: "MongoDB Atlas", level: "Advanced", tag: "NoSQL DB" },
          { name: "Mongoose ODM", level: "Advanced", tag: "Data Modeling" },
          { name: "Aggregation Pipelines", level: "Proficient", tag: "Analytics" },
          { name: "Redis Caching", level: "Familiar", tag: "In-Memory Store" },
        ],
      },
      {
        id: "tools",
        name: "DevOps & Tooling",
        items: [
          { name: "Git & GitHub", level: "Expert", tag: "Version Control" },
          { name: "Postman", level: "Advanced", tag: "API Testing" },
          { name: "Docker", level: "Proficient", tag: "Containers" },
          { name: "Vercel & Render", level: "Advanced", tag: "Cloud Deploy" },
          { name: "Linux / Bash", level: "Proficient", tag: "CLI / Systems" },
        ],
      },
    ],
  },

  projects: [
    {
      id: "nexus-cloud",
      slug: "nexus-cloud",
      title: "NexusCloud Distributed Telemetry",
      tagline: "Real-time AI Infrastructure & Cluster Monitoring Suite",
      description: "An enterprise-grade monitoring dashboard built to inspect distributed node clusters in real-time. Features WebSocket telemetry streaming, automated node failover alerts, and an interactive 3D spatial topology graph powered by React Three Fiber.",
      featured: true,
      category: "Full Stack & 3D",
      tech: ["React 19", "Three.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
      metrics: ["Sub-50ms Telemetry Latency", "10k Simulated Nodes", "Zero Layout Shift"],
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Architected an interactive 3D network topology visualization with React Three Fiber and custom instanced meshes.",
        "Built resilient REST endpoints and MongoDB schema indexing supporting high-frequency time-series logging.",
        "Implemented reactive dashboard widgets using Framer Motion with automatic layout transitions.",
      ],
    },
    {
      id: "aetheria-engine",
      slug: "aetheria-engine",
      title: "Aetheria Procedural Terrain Studio",
      tagline: "WebGL Shader Simulation & Dynamic Mesh Generator",
      description: "An in-browser procedural world builder allowing game designers to generate biome heightmaps, apply GLSL displacement shaders, and export optimized GLTF geometries in real time.",
      featured: true,
      category: "3D Graphics & Creative Dev",
      tech: ["Three.js", "React", "GLSL Shaders", "Vite", "Web Workers"],
      metrics: ["60 FPS Rendering", "Procedural Simplex Noise", "GLTF Asset Exporter"],
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Offloaded CPU-intensive Perlin/Simplex heightmap computation to concurrent Web Workers.",
        "Crafted custom atmospheric scattering and water reflection shaders using Three.js shader materials.",
        "Engineered smooth camera orbiting controls with keyboard shortcuts and inertia dampening.",
      ],
    },
    {
      id: "synapse-pay",
      slug: "synapse-pay",
      title: "SynapsePay Fintech API Gateway",
      tagline: "Secure Transaction Orchestration & Webhook Dispatcher",
      description: "A financial technology middle-tier orchestrating asynchronous payment events, cryptographic signature verification, and automated idempotent retry queues.",
      featured: false,
      category: "Backend Architecture",
      tech: ["Node.js", "Express.js", "MongoDB Atlas", "JWT", "Redis"],
      metrics: ["Idempotent Requests", "AES-256 Payload Encryption", "Audit Trail Logging"],
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Implemented strict rate-limiting, CORS whitelisting, and Joi payload validation middleware.",
        "Designed Mongoose models with TTL indexes for transient verification tokens and tamper-evident audit logs.",
        "Authored complete OpenAPI/Swagger documentation with automated integration test suites.",
      ],
    },
    {
      id: "zenith-ui",
      slug: "zenith-ui",
      title: "Zenith Cyberpunk Component System",
      tagline: "High-Performance Accessible Design Tokens for Modern React",
      description: "A dark-mode-first component system engineered for developer dashboards, featuring glassmorphism surfaces, keyboard accessible modals, and micro-interactions.",
      featured: false,
      category: "Frontend & UI/UX",
      tech: ["React 19", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      metrics: ["100% WAI-ARIA Compliant", "Zero Dependency Bloat", "Sub-15kb Gzipped"],
      github: "https://github.com",
      live: "https://example.com",
      highlights: [
        "Crafted 30+ accessible components adhering strictly to WAI-ARIA specifications.",
        "Integrated fluid spring-physics animations with reduced-motion media query compliance.",
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Full Stack Engineer Intern",
      company: "HyperScale Cloud Systems",
      location: "San Francisco, CA (Remote)",
      period: "2024 — Present",
      type: "Internship",
      highlights: [
        "Engineered high-throughput REST APIs using Express.js and MongoDB Atlas, decreasing p95 endpoint response time by 28%.",
        "Collaborated with the design team to rebuild the customer portal using React and Tailwind CSS, improving mobile conversion by 34%.",
        "Integrated rate limiting and input sanitation middleware to harden client endpoints against brute-force attacks.",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Git"],
    },
    {
      id: "exp-2",
      role: "Frontend & Creative Developer Intern",
      company: "Quantum Interactive Studios",
      location: "San Jose, CA",
      period: "2023 — 2024",
      type: "Internship",
      highlights: [
        "Developed interactive 3D product previews using Three.js and React Three Fiber, boosting user engagement time by 45%.",
        "Refactored state management to utilize modern React hooks, eliminating redundant renders across heavy dashboard views.",
        "Implemented cross-browser WebGL feature detection and graceful CSS fallback animations for unsupported mobile clients.",
      ],
      tech: ["Three.js", "React Three Fiber", "JavaScript", "HTML5 Canvas", "Framer Motion"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "State University of Technology",
      period: "2021 — 2025",
      grade: "CGPA: 3.85 / 4.0 (Dean's Honor Roll)",
      coursework: [
        "Advanced Data Structures & Algorithms",
        "Database Management Systems (RDBMS & NoSQL)",
        "Distributed Computing & Cloud Architecture",
        "Computer Graphics & Interactive Systems",
        "Software Engineering & Agile Methodologies",
      ],
    },
  ],

  certifications: [
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "2024",
      credentialId: "MDB-90428-DEV",
      link: "https://learn.mongodb.com",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CLF-003891",
      link: "https://aws.amazon.com/certification",
    },
    {
      title: "Meta Front-End Developer Professional",
      issuer: "Meta / Coursera",
      date: "2023",
      credentialId: "META-FED-8842",
      link: "https://coursera.org",
    },
  ],
};
