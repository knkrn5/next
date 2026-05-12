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
      website: "karan.email",
    },
  },
  summary:
    "Full-stack web developer specializing in the MERN stack with experience delivering scalable, containerized, and cloud-deployed applications. Skilled in integrating AI-powered features, optimizing backend performance, and implementing microservices architecture. Committed to building accessible, user-friendly solutions.",
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
    Database: ["SQLite", "PostgreSQL", "MongoDB", "Redis"],
    "Cloud & DevOps": [
      "AWS",
      "Azure",
      "SSH",
      "Docker",
      "Git",
      "CI/CD (GitHub Actions)",
    ],
    Tools: ["VS Code", "Postman", "Auth0", "Zustand", "Nodemailer"],
  },
  projects: [
    {
      name: "Finance Educational Web App",
      liveLink: "https://wealthpsychology.karan.email/index.html",
      githubLink: "https://github.com/knkrn5/WealthPsychology-app",
      duration: "May 2024",
      technologies: ["HTML5", "CSS", "JavaScript", "Node.js", "SQLite"],
      description: [
        "Built a full-stack financial education platform with calculators, quizzes, and blogs using Contentful CMS.",
        "Designed SQLite database for efficient content storage and integrated Auth0 for secure user authentication.",
        "Implemented CI/CD pipeline with GitHub Actions and Configured Docker containerization.",
        "Impact: Deployed on Render using Docker, reducing deployment time by 30%.",
      ],
    },
    {
      name: "AI-Powered Chatbots",
      liveLink: "https://explanatorai.site/",
      githubLink: "https://github.com/knkrn5/explanator-ai",
      duration: "Nov 2024",
      technologies: ["HTML5", "CSS", "JavaScript", "Python"],
      description: [
        "Developed an AI chatbot web app using Gemini and NVIDIA NIM APIs, supporting PDF, CSV, JSON, and TXT analysis.",
        "Enabled real-time chat with SSE-based streaming and integrated CodeMirror/Marked.js for code and Markdown rendering.",
        "Leveraged Hugging Face datasets for task-specific chatbots.",
        "Impact: Achieved 95% correctness in chatbot-generated responses during document-based Q&A testing.",
      ],
    },
    {
      name: "Personal Website",
      liveLink: "https://karan.email/",
      githubLink: "https://github.com/knkrn5/karan",
      duration: "Feb 2025",
      technologies: [
        "React/ts",
        "Tailwind CSS",
        "Node.js",
        "Python",
        "Java",
        "MongoDB",
        "PostgreSQL",
      ],
      description: [
        "Architected a microservices-based portfolio with Node.js (contact/chatbot), Python (e-commerce), and Java (authentication).",
        "Designed MongoDB/PostgreSQL schemas for data storage and Redis for OTP verification, ensuring scalability.",
        "Integrated Zustand, Nodemailer, and JWT/Bcrypt for state management, email notifications, and security.",
        "Impact: Reduced authentication latency and User Data retrieval time by 25% using Redis caching.",
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
