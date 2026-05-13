export const resume2Data = {
  personalInfo: {
    name: "KARAN",
    age: 24,
    title: "Full Stack Developer",
    email: "xxxxx@gmail.com",
    phone: "+91 xxxxxxxxxx",
    address: {
      country: "India",
      city: "Delhi",
      region: "Delhi NCR",
    },
    contact: {
      email: "xxxxx@karan.email",
      phone: "N/A",
      linkedin: "linkedin.com/in/knkrn5",
      github: "github.com/knkrn5",
      website: "ka-ran.me",
    },
  },
  summary:
    "Recent BCA graduate with hands-on experience building full-stack web applications using MERN stack, and modern DevOps practices. Strong focus on AI integration, containerization, and performant backend systems through multiple end-to-end projects.",
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Improved application performance by 40% through optimization",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications",
      school: "Galgotias University",
      location: "Greater Noida, India",
      duration: "2021 – 2025",
      cgpa: "7.75/10",
    },
  ],
  technicalSkills: {
    "Programming Languages": ["JavaScript", "TypeScript"],
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React"],
    Backend: ["Node.js(Express)", "REST APIs"],
    Database: ["MongoDB", "PostgreSQL", "Redis"],
    "Cloud & DevOps": ["SSH", "Docker", "Git", "CI/CD (GitHub Actions)"],
    Tools: ["VS Code", "Postman", "Redux", "Zustand", "Nodemailer"],
  },
  projects: [
    {
      name: "AI Debate & Brainstorming Platform",
      liveLink: "https://karan.email/",
      githubLink: "https://github.com/knkrn5/aigalaxy",
      duration: "July 2025",
      technologies: ["React/ts", "Tailwind CSS", "Node.js", "MongoDB"],
      description: [
        "Built an AI-based debate platform where two AI agents discuss user-defined topics in real time.",
        "Implemented streaming AI responses using Server-Sent Events (SSE) with Markdown rendering support.",
        "Designed MongoDB schemas and Redis-based session management for scalable conversation handling.",
        "Integrated Google OpenID authentication with JWT and Bcrypt-based security.",
        "Containerized the application with Docker and automated deployments via GitHub Actions CI/CD pipeline.",
      ],
    },
    {
      name: "TCP LAN Chat CLI",
      npmLink: "https://github.com/knkrn5/kn-lan-chat",
      githubLink: "https://www.npmjs.com/package/kn-lan-chat",
      duration: "Jan 2026",
      technologies: ["TypeScript", "Node.js(TCP/net)"],
      description: [
        "Developed a TCP-based multi-client LAN chat application with private messaging, broadcast messaging, and IP-based banning.",
        "Built interactive server/client CLIs supporting persistent recipient mode and real-time client management.",
        "Implemented socket-based communication, connection lifecycle handling, and ban persistence using file storage.",
        "Published the package to npm with separate server and client executables.",
      ],
    },
    {
      name: "HTTP LAN File Share",
      npmLink: "https://www.npmjs.com/package/kn-lan-share",
      githubLink: "https://github.com/knkrn5/kn-lan-share/",
      duration: "March 2026",
      technologies: ["HTML", "CSS", "JavaScript", "Nodejs(http)"],
      description: [
        "Built a command-line HTTP file-sharing server for transferring files across local networks.",
        "Implemented password-protected access, file uploads, QR-code-based sharing, and configurable network binding.",
        "Optimized large-file transfers using stream high-water-mark tuning and Node.js stream handling.",
        "Published the tool as an npm package with global CLI support.",
      ],
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Proficient",
    },
    {
      name: "Hindi",
      proficiency: "Native",
    },
  ],
  interests: [
    "Reading",
    "Traveling",
    "Gaming",
    "Learning",
    "Open Source Contribution",
  ],
  availability: "Open to remote opportunities and relocation.",
};
