export interface ProjectItem {
  id: string
  title: string
  category: string
  organization?: string
  description: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  isProfessional?: boolean
  diagramType?: 'vobiz' | 'slack' | null
  problem?: string
  solution?: string
  myContribution?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ExperienceRole {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  isInternship?: boolean
}

export interface TimelineItem {
  date: string
  title: string
  subtitle?: string
  description: string
  type: 'education' | 'work' | 'milestone'
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  details?: string
}

export const PERSONAL_INFO = {
  name: "Ayush Raj",
  title: "Full Stack Developer",
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 91358 31645",
  email: "rajayush226@gmail.com",
  linkedin: "https://linkedin.com/in/ayush-raj-8348a9260",
  linkedinDisplay: "linkedin.com/in/ayush-raj-8348a9260",
  github: "https://github.com/ThakurAyushRaj",
  githubDisplay: "github.com/ThakurAyushRaj",
  heroSummary: "Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter.",
  heroSecondary: "Specializing in production CRM and EMR systems, REST APIs, real-time workflows, voice integrations, and modern web & mobile applications.",
  aboutStory: [
    "Ayush Raj is a Full Stack Developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter.",
    "He is currently working at aNquest Media, developing CRM and EMR products that power lead and patient workflows for real estate and healthcare clients.",
    "His technical foundation includes REST API development, relational and NoSQL databases, and modern frontend/mobile development.",
    "He is currently expanding his knowledge in AWS and system design."
  ]
}

export const SKILLS_DATA: Record<string, string[]> = {
  "Languages": ["JavaScript", "TypeScript", "Dart", "C/C++", "Python", "HTML5", "CSS3", "SQL"],
  "Frontend & Mobile": ["React.js", "React Native", "Flutter", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "REST APIs"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  "Cloud & Tools": ["AWS", "Git", "GitHub"]
}

export const EXPERIENCE_DATA: ExperienceRole[] = [
  {
    title: "Software Development Engineer",
    company: "aNquest Media",
    location: "Greater Noida, India",
    period: "May 2026 – Present",
    responsibilities: [
      "Develop full-stack features for aNquest Media's CRM and EMR products.",
      "Build interfaces using React.js.",
      "Develop backend services using Node.js and Express.js.",
      "Work on production business workflows.",
      "Collaborate within an agile team.",
      "Participate in code reviews.",
      "Participate in sprint planning.",
      "Participate in daily stand-ups."
    ]
  },
  {
    title: "Software Development Engineer Intern",
    company: "aNquest Media",
    location: "Greater Noida, India",
    period: "Feb 2026 – Apr 2026",
    isInternship: true,
    responsibilities: [
      "Contributed to frontend and backend development on the CRM/EMR platform.",
      "Worked across the MERN stack.",
      "Built reusable UI components.",
      "Supported feature development.",
      "Converted to a full-time Software Development Engineer role after the internship."
    ]
  }
]

export const PROFESSIONAL_WORK: ProjectItem[] = [
  {
    id: "prof-crm",
    title: "CRM — Professional / Real Estate",
    category: "Real Estate Lead Management",
    organization: "aNquest Media",
    isProfessional: true,
    description: "Built interfaces and backend RESTful APIs powering lead-management workflows, with MongoDB/MySQL schema design.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    highlights: [
      "Lead management",
      "REST APIs",
      "Full-stack development",
      "Database design",
      "Production application development"
    ],
    problem: "Real estate client teams required reliable lead allocation, status tracking, and high-performance querying over large datasets.",
    solution: "Designed dual-database schemas combining MongoDB for rapid document writes with MySQL for structured relational records, paired with responsive React interfaces.",
    myContribution: "Engineered core lead-management API endpoints, optimized database schema indices, and constructed reactive dashboard components."
  },
  {
    id: "prof-emr",
    title: "EMR — Professional / Healthcare",
    category: "Healthcare Patient Workflows",
    organization: "aNquest Media",
    isProfessional: true,
    description: "Built interfaces and backend RESTful APIs powering patient-record workflows for healthcare clients, with MongoDB/MySQL schema design.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    highlights: [
      "Patient-record workflows",
      "REST APIs",
      "Full-stack development",
      "Database design",
      "Production healthcare software"
    ],
    problem: "Healthcare providers needed seamless patient record retrieval, visit history updates, and audit-ready data persistence.",
    solution: "Implemented modular RESTful backend services with strict validation schemas and intuitive patient management interfaces.",
    myContribution: "Built backend services in Node.js/Express, developed reusable patient-record React components, and handled complex DB queries."
  },
  {
    id: "prof-vobiz",
    title: "In-App Calling & Bridge Calling",
    category: "Voice & Telephony Integration",
    organization: "aNquest Media",
    isProfessional: true,
    diagramType: "vobiz",
    description: "Built in-app direct calling connecting agents to leads via Vobiz Voice API, plus number-masked bridge calling for privacy.",
    technologies: ["Vobiz Voice API", "Node.js", "Express.js", "REST APIs"],
    highlights: [
      "In-app direct calling",
      "Number-masked bridge calling",
      "Telephony API integration",
      "Privacy-preserving agent-lead call bridge"
    ],
    problem: "Agents needed to call leads directly from within the CRM while strictly hiding personal contact numbers of both agent and lead.",
    solution: "Integrated Vobiz Voice API to enable single-click direct calling as well as two-way bridge calls where Vobiz calls the agent back and connects to the lead anonymously.",
    myContribution: "Engineered webhooks and call-bridge routing logic in Node.js, managing call state transitions and API callbacks."
  },
  {
    id: "prof-whatsapp",
    title: "WhatsApp Automation",
    category: "Automated Communication",
    organization: "aNquest Media",
    isProfessional: true,
    description: "Automated lead follow-ups and notifications on WhatsApp using Meta's WhatsApp Business API through a Facebook Developer App.",
    technologies: ["Meta WhatsApp Business API", "Facebook Developer App", "Node.js", "Express.js"],
    highlights: [
      "WhatsApp automation",
      "Lead follow-ups",
      "Automated notifications",
      "Meta Business API integration"
    ],
    problem: "Manual lead follow-up caused response delays and dropped conversions across sales funnels.",
    solution: "Connected Meta WhatsApp Business API webhook triggers to automatically dispatch structured templates and follow-up alerts upon new lead activity.",
    myContribution: "Built webhook event receivers, template message dispatchers, and automated schedule triggers."
  }
]

export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-erp",
    title: "ERP Website",
    category: "Enterprise System",
    description: "Unified ERP platform integrating Finance, HR, Inventory, and Sales to replace manual, spreadsheet-based workflows.",
    technologies: ["React", "TypeScript"],
    highlights: [
      "Finance module",
      "HR management",
      "Inventory tracking",
      "Sales workflow automation"
    ],
    githubUrl: "https://github.com/ThakurAyushRaj/ERP-Website",
    problem: "Small and medium businesses rely on scattered manual spreadsheets for critical finance, HR, and sales operations.",
    solution: "Designed a centralized web dashboard unifying core enterprise functions into a single reactive TypeScript application.",
    myContribution: "Architected modular UI state management, built responsive dashboard widgets, and implemented form validations."
  },
  {
    id: "proj-slack-bot",
    title: "Slack Attendance Bot",
    category: "Automation & Workflows",
    diagramType: "slack",
    description: "Slack bot automating entry/exit tracking, working-hours calculation, break management, daily summaries, and Google Sheets synchronization.",
    technologies: ["Node.js", "Express", "Google Sheets API", "Slack API"],
    highlights: [
      "Entry/exit tracking",
      "Working-hours calculation",
      "Break management",
      "Daily summaries",
      "Google Sheets synchronization"
    ],
    githubUrl: "https://github.com/ThakurAyushRaj/SLACK-ATTENDANCE",
    problem: "Team attendance tracking on Slack was informal and required manual spreadsheet compilation at the end of each day.",
    solution: "Developed a Node.js webhook bot that parses slash commands, tracks break intervals, calculates net work hours, and appends logs to Google Sheets in real-time.",
    myContribution: "Built the Express listener service, time delta math algorithms, and automated Google Sheets API sync."
  },
  {
    id: "proj-attendance-app",
    title: "Attendance Tracker App",
    category: "Mobile Application",
    description: "Cross-platform attendance application featuring Google Sign-in, FCM push notifications, Admin dashboard, and attendance reporting.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    highlights: [
      "Google Sign-in auth",
      "FCM push notifications",
      "Admin dashboard",
      "Attendance reporting"
    ],
    githubUrl: "https://github.com/ThakurAyushRaj/Google-Auth_FCM-Notification_Admin-Pannel_Attendence-Tracker_App-React-Native-",
    problem: "Organizations need a mobile-first solution for employees to verify attendance and for admins to review periodic reports.",
    solution: "Created a React Native app powered by Firebase Auth, Cloud Firestore, and FCM push notifications with an administrative review screen.",
    myContribution: "Developed the cross-platform mobile views, Firebase authentication integration, and push notification triggers."
  },
  {
    id: "proj-gcal-todo",
    title: "Google Calendar To-Do App",
    category: "Mobile Productivity",
    description: "Task manager featuring Google Calendar synchronization, reminders, real-time updates, and productivity tracking.",
    technologies: ["React Native", "TypeScript"],
    highlights: [
      "Google Calendar sync",
      "Smart reminders",
      "Real-time task updates",
      "Productivity analytics"
    ],
    problem: "Standard to-do apps lack seamless bidirectional sync with calendar schedules.",
    solution: "Built a mobile task management tool that links daily tasks directly with Google Calendar events.",
    myContribution: "Implemented OAuth authentication flows, task sync state machine, and clean React Native UI."
  },
  {
    id: "proj-blog",
    title: "Blog Website",
    category: "Frontend Web Application",
    description: "Animated blog website with Framer Motion transitions designed for a smooth and immersive reading experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Smooth Framer Motion page transitions",
      "Clean dark aesthetic",
      "Responsive typography",
      "Dynamic article layouts"
    ],
    githubUrl: "https://github.com/ThakurAyushRaj/Blog-Website",
    problem: "Traditional blogs often suffer from jarring page reloads and static layout feel.",
    solution: "Crafted a fluid single-page blog interface leveraging Framer Motion layout animations and Tailwind typography.",
    myContribution: "Created animation variants, article layout templates, and responsive design systems."
  }
]

export const TIMELINE_DATA: TimelineItem[] = [
  {
    date: "2021",
    title: "B.Tech Computer Science Begins",
    subtitle: "IIMT College of Engineering, Greater Noida",
    description: "Started Bachelor of Technology program, building core fundamentals in data structures, algorithms, and web technologies.",
    type: "education"
  },
  {
    date: "2025",
    title: "Bachelor of Technology Completed",
    subtitle: "Computer Science & Engineering",
    description: "Graduated with B.Tech degree, mastering full-stack web and mobile development technologies.",
    type: "education"
  },
  {
    date: "Feb 2026",
    title: "Software Development Engineer Intern",
    subtitle: "aNquest Media • Greater Noida, India",
    description: "Started internship building CRM/EMR features across the MERN stack and reusable UI component libraries.",
    type: "work"
  },
  {
    date: "Apr 2026",
    title: "Internship Completed",
    subtitle: "aNquest Media",
    description: "Successfully completed SDE internship with strong contributions to production business workflows.",
    type: "milestone"
  },
  {
    date: "May 2026",
    title: "Joined as Software Development Engineer",
    subtitle: "aNquest Media • Full-time",
    description: "Converted to full-time SDE role, leading end-to-end full-stack feature delivery on production CRM and EMR products.",
    type: "work"
  },
  {
    date: "Present",
    title: "SDE at aNquest Media",
    subtitle: "Production CRM & EMR Engineering",
    description: "Actively building production business workflows, REST APIs, voice integrations, and expanding expertise in AWS and system design.",
    type: "work"
  }
]

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "IIMT College of Engineering, Greater Noida",
    period: "2021 – 2025",
    details: "Specialized in Computer Science & Engineering with focus on full-stack software development and database systems."
  },
  {
    degree: "Class XII",
    institution: "Bihar School Examination Board, Patna",
    period: "2021",
    details: "Higher Secondary Education with focus on Physics, Chemistry, and Mathematics."
  },
  {
    degree: "Class X",
    institution: "CBSE, New Delhi",
    period: "2019",
    details: "Secondary School Examination under Central Board of Secondary Education."
  }
]

export const WHAT_I_BUILD_ITEMS = [
  { title: "Full Stack Web Applications", desc: "End-to-end web apps with reactive frontends and robust Node.js/Express backends." },
  { title: "CRM Systems", desc: "Production lead management platforms powering real estate business operations." },
  { title: "EMR / Healthcare Applications", desc: "Production patient record systems powering clinical and healthcare workflows." },
  { title: "REST APIs", desc: "Scalable, secure RESTful backend services with MongoDB, MySQL, and PostgreSQL." },
  { title: "Mobile Applications", desc: "Cross-platform mobile apps for iOS and Android built with React Native and Flutter." },
  { title: "Voice Calling Integrations", desc: "In-app direct calling and privacy-preserving bridge calling using Vobiz Voice API." },
  { title: "WhatsApp Automation", desc: "Automated follow-ups and notifications using Meta WhatsApp Business API." },
  { title: "Business Automation", desc: "Slack bots, Google Sheets API sync, and workflow automation tools." },
  { title: "Real-time Applications", desc: "Event-driven architectures, FCM push notifications, and live status feeds." }
]

export const ENGINEERING_FOCUS_ITEMS = [
  "Full-stack development (MERN & MEAN)",
  "AWS Cloud Services & Deployment",
  "System Design & Scalable Architectures",
  "Scalable Backend Architecture",
  "API Development & Microservices",
  "Real-time Systems & Event Webhooks",
  "Cross-Platform Mobile Engineering",
  "Third-Party API Integrations (Voice & WhatsApp)"
]
