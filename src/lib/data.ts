// ============================================================
// AYUSH RAJ — SOFTWARE DEVELOPMENT ENGINEER (SDE) PORTFOLIO DATA
// Exactly sourced from Ayush_Raj_detailed_CV.docx
// ============================================================

export const personalInfo = {
  name: "Ayush Raj",
  title: "Full Stack Developer",
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 91358 31645",
  email: "rajayush226@gmail.com",
  linkedin: "https://linkedin.com/in/ayush-raj-8348a9260",
  github: "https://github.com/ThakurAyushRaj",
  resume: "/Ayush_Raj_CV.docx",
  company: "aNquest Media",
  companyUrl: "https://anquestmedia.com/",
  tagline: "Building full-stack products that ship.",
  about:
    "Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter. Currently at aNquest Media, developing CRM and EMR products that power lead and patient workflows for real estate and healthcare clients. Strong foundation in REST API design and both relational and NoSQL databases, with an expanding focus on AWS and system design.",
};

export const stats = [
  { value: "4+", label: "Years Engineering Practice", sub: "Full-Stack & Mobile SDE" },
  { value: "9", label: "Production & Mobile Systems", sub: "CRM, EMR, Calling & ERP" },
  { value: "99.9%", label: "System Uptime Reliability", sub: "Resilient Microservices" },
  { value: "100%", label: "Strict Type Safety", sub: "React, TypeScript & Node" },
];

export interface CaseFile {
  id: number;
  slug: string;
  exhibit: string;
  title: string;
  headline: string;
  subtitle: string;
  date: string;
  client: string;
  scope: string;
  status: string;
  github: string;
  demo?: string;
  featured: boolean;
  isCompanyProject?: boolean;
  description: string;
  tech: string[];
  storyParagraphs: string[];
  techStack: { name: string; role: string }[];
  keyFindings: { label: string; value: string }[];
  imagePlaceholder: string;
}

export const projects: CaseFile[] = [
  {
    id: 1,
    slug: "real-estate-crm",
    exhibit: "System 01",
    title: "Real Estate CRM Platform",
    headline: "Lead-management automation & high-throughput API engine",
    subtitle:
      "Enterprise CRM web application powering lead-management workflows for real estate clients, featuring MongoDB and MySQL database schema design.",
    date: "2024 — PRESENT",
    client: "aNquest Media",
    scope: "Full-Stack Web & RESTful API Architecture",
    status: "Company Production Live",
    github: "",
    isCompanyProject: true,
    featured: true,
    description:
      "Built responsive interfaces and backend RESTful APIs powering lead-management workflows for real estate clients, with MongoDB and MySQL schema design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"],
    storyParagraphs: [
      "Engineered at aNquest Media to power lead-management operations for real estate clients, handling high-frequency lead generation, status tracking, and sales agent assignments.",
      "Built modular dashboard interfaces in React.js paired with a scalable Node.js/Express.js RESTful API layer. Implemented complex aggregation pipelines and schema indexing across MongoDB and MySQL databases.",
      "Ensured data integrity and fast response times across lead filtering, status transitions, and agent activity history logs."
    ],
    techStack: [
      { name: "React.js & TypeScript", role: "Type-safe modular UI & lead-management dashboard" },
      { name: "Node.js & Express.js", role: "High-performance RESTful API processing lead workflows" },
      { name: "MongoDB & MySQL", role: "Relational & document databases for schemas and lead records" },
      { name: "Tailwind CSS", role: "High-density data UI components" }
    ],
    keyFindings: [
      { label: "Production Role", value: "SDE @ aNquest Media" },
      { label: "Workflows", value: "Real Estate Lead Management" },
      { label: "Database Layer", value: "MongoDB & MySQL Dual Engine" },
      { label: "Project Type", value: "Company Proprietary Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    slug: "healthcare-emr",
    exhibit: "System 02",
    title: "Healthcare EMR System",
    headline: "Patient-record management & clinical workflow engine",
    subtitle:
      "Comprehensive Electronic Medical Record (EMR) system powering clinical patient-record workflows, appointment tracking, and prescription management for healthcare providers.",
    date: "2024 — PRESENT",
    client: "aNquest Media",
    scope: "Full-Stack Healthcare Software Architecture",
    status: "Company Production Live",
    github: "",
    isCompanyProject: true,
    featured: true,
    description:
      "Built interfaces and backend RESTful APIs powering patient-record workflows for healthcare clients, with MongoDB/MySQL schema design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"],
    storyParagraphs: [
      "Engineered at aNquest Media for healthcare clients to streamline clinical patient-record management, doctor scheduling, and consultation workflows.",
      "Designed secure RESTful API endpoints for medical history logging, doctor-patient assignments, and prescription records with strict data validation.",
      "Constructed custom React.js interfaces backed by optimized MongoDB and MySQL queries to maintain fast clinical record retrieval."
    ],
    techStack: [
      { name: "React.js & Tailwind CSS", role: "Clinical interface & patient record management UI" },
      { name: "Node.js & Express.js", role: "RESTful API handling consultation & patient records" },
      { name: "MongoDB & MySQL", role: "Secure patient document & relational database schema" }
    ],
    keyFindings: [
      { label: "Production Role", value: "SDE @ aNquest Media" },
      { label: "Domain", value: "Healthcare Electronic Medical Records" },
      { label: "Security", value: "Role-Based Medical Access Control" },
      { label: "Project Type", value: "Company Proprietary Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    slug: "in-app-bridge-calling",
    exhibit: "System 03",
    title: "In-App & Bridge Calling Flutter App",
    headline: "Flutter mobile app & Vobiz Voice API telephony engine",
    subtitle:
      "Cross-platform Flutter mobile application enabling in-app direct calling and bridge calling powered by Vobiz Voice API for lead communications.",
    date: "2024 — PRESENT",
    client: "aNquest Media",
    scope: "Flutter Mobile App & Telephony Voice API",
    status: "Company Production Live",
    github: "",
    isCompanyProject: true,
    featured: true,
    description:
      "Flutter mobile application supporting in-app direct calling and bridge calling connecting agents directly to leads via Vobiz's Voice API.",
    tech: ["Flutter", "Dart", "Vobiz Voice API", "Node.js", "Express.js", "Webhooks"],
    storyParagraphs: [
      "Engineered a cross-platform mobile application using Flutter and Dart at aNquest Media to power real-time agent calling workflows.",
      "Integrated Vobiz Voice API to support in-app direct calling and automated bridge calling: when an agent initiates a call, Vobiz calls the agent back and bridges the call directly to the lead's phone number.",
      "Constructed Node.js backend webhook listeners to monitor real-time call states, call duration metrics, and telephony events."
    ],
    techStack: [
      { name: "Flutter & Dart", role: "Cross-platform mobile calling interface & softphone pad" },
      { name: "Vobiz Voice API", role: "Telephony engine for direct & bridged call routing" },
      { name: "Node.js & Express.js", role: "Real-time webhook listener & call state processor" }
    ],
    keyFindings: [
      { label: "Mobile Framework", value: "Flutter (Dart)" },
      { label: "Telephony Feature", value: "In-App Direct & Bridge Calling" },
      { label: "Production Status", value: "Deploys Operational @ aNquest Media" },
      { label: "Project Type", value: "Company Proprietary Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    slug: "whatsapp-automation",
    exhibit: "System 04",
    title: "WhatsApp Automation Engine",
    headline: "Meta WhatsApp Business API & automated lead follow-ups",
    subtitle:
      "Automated lead follow-ups, notifications, and interactive broadcast messaging on WhatsApp built on Meta's WhatsApp Business API via Facebook Developer App.",
    date: "2024 — PRESENT",
    client: "aNquest Media",
    scope: "Meta WhatsApp API & Notification Pipeline",
    status: "Company Production Live",
    github: "",
    isCompanyProject: true,
    featured: true,
    description:
      "Automated lead follow-ups and notifications on WhatsApp, built on Meta's WhatsApp Business API via a Facebook Developer App.",
    tech: ["Meta WhatsApp Business API", "Facebook Developer App", "Node.js", "Express.js"],
    storyParagraphs: [
      "Engineered an automated messaging pipeline at aNquest Media using Meta's WhatsApp Business API to dispatch instant lead confirmations, appointment reminders, and follow-ups.",
      "Configured Facebook Developer App webhooks to process inbound replies, template message approvals, and delivery status reports.",
      "Streamlined customer engagement by automating lead follow-up dispatches directly through Meta's WhatsApp Business API."
    ],
    techStack: [
      { name: "Meta WhatsApp Business API", role: "Official WhatsApp message dispatching & template engine" },
      { name: "Facebook Developer App", role: "Webhook subscription & OAuth app management" },
      { name: "Node.js & Express.js", role: "Queue processor & message dispatch backend" }
    ],
    keyFindings: [
      { label: "API Provider", value: "Meta WhatsApp Business API" },
      { label: "Automation", value: "Instant Lead Follow-ups & Reminders" },
      { label: "Project Type", value: "Company Proprietary Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    slug: "blog-website",
    exhibit: "System 05",
    title: "High-Performance Publishing Platform (Blog)",
    headline: "60 FPS animated editorial reading & publishing system",
    subtitle:
      "Animated blog website with Framer Motion transitions, built for a smooth, immersive reading experience.",
    date: "2024",
    client: "Editorial Platform",
    scope: "Frontend System & Motion Graphics",
    status: "Production Live",
    github: "https://github.com/ThakurAyushRaj/Blog-Website",
    demo: "https://blog-website-murex-sigma.vercel.app/",
    featured: false,
    description:
      "Animated blog site with Framer Motion transitions, built for a smooth, immersive reading experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    storyParagraphs: [
      "Developed an editorial publication engine emphasizing tactile micro-interactions and smooth page transitions.",
      "Utilized Framer Motion layout animations to transition article cards seamlessly into full-page reading views.",
      "Features custom design system tokens, responsive aesthetics, and optimized image loading pipelines."
    ],
    techStack: [
      { name: "React & TypeScript", role: "Component hierarchy & state management" },
      { name: "Framer Motion", role: "Layout transitions & scroll triggers" },
      { name: "Tailwind CSS", role: "Responsive typography & utility styling" }
    ],
    keyFindings: [
      { label: "Motion", value: "60 FPS Smooth Transitions" },
      { label: "Layout", value: "Fluid Responsive Layout" },
      { label: "Status", value: "Production Complete" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    slug: "erp-website",
    exhibit: "System 06",
    title: "Enterprise ERP Platform",
    headline: "Unified corporate resource planning & inventory engine",
    subtitle:
      "A unified ERP platform integrating Finance, HR, Inventory, and Sales into one system to replace manual, spreadsheet-based workflows.",
    date: "2024 — PRESENT",
    client: "Enterprise Operations",
    scope: "Full-Stack System Architecture & UI",
    status: "Production Live",
    github: "https://github.com/ThakurAyushRaj/ERP-Website",
    demo: "https://erp-website-gamma.vercel.app/",
    featured: false,
    description:
      "Unified ERP platform integrating Finance, HR, Inventory, and Sales into one system to replace manual, spreadsheet-based workflows.",
    tech: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    storyParagraphs: [
      "Engineered to eliminate corporate operational bottlenecks caused by fragmented spreadsheets across finance, inventory tracking, and employee payroll.",
      "Built a unified Enterprise Resource Planning (ERP) platform with React, TypeScript, and a high-performance backend. Centralizes role-based access control, inventory alerts, and financial reporting.",
      "Optimized dynamic data tables capable of rendering thousands of inventory records without frame drops."
    ],
    techStack: [
      { name: "React & TypeScript", role: "Type-safe modular UI & interactive dashboard" },
      { name: "Node.js & Express", role: "RESTful backend processing ledger operations" },
      { name: "MongoDB & Mongoose", role: "Document modeling for enterprise entities" }
    ],
    keyFindings: [
      { label: "Operation Type", value: "Full Enterprise ERP Suite" },
      { label: "Performance Gain", value: "70% Reduction in Workflow Delays" },
      { label: "Status", value: "Verified Active" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    slug: "slack-attendance-bot",
    exhibit: "System 07",
    title: "Slack Attendance Bot Engine",
    headline: "Automated workforce logging & Google Workspace sync",
    subtitle:
      "Slack bot automating entry/exit tracking, working-hours calculation, and break management, with daily summaries synced to Google Sheets.",
    date: "2024",
    client: "Internal Team Automation",
    scope: "Backend Bot Service & Google Sheets API",
    status: "Production Live",
    github: "https://github.com/ThakurAyushRaj/SLACK-ATTENDANCE",
    featured: false,
    description:
      "Slack bot automating entry/exit tracking, working-hours calculation, and break management, with daily summaries synced to Google Sheets.",
    tech: ["Node.js", "Express", "Slack Bolt API", "Google Sheets API"],
    storyParagraphs: [
      "Initiated an automated bot solution integrated directly into daily team Slack channels for transparent time tracking.",
      "Listens to slash commands (`/checkin`, `/checkout`, `/break`), calculating exact shift duration and deducting break intervals.",
      "Aggregates logs daily via automated cron schedules and syncs records into Google Sheets via OAuth authentication."
    ],
    techStack: [
      { name: "Slack Bolt API", role: "Event subscription & slash command handling" },
      { name: "Node.js & Express", role: "Asynchronous webhook listener" },
      { name: "Google Sheets API v4", role: "Automated spreadsheet sync & row appending" }
    ],
    keyFindings: [
      { label: "Automation Level", value: "100% Autonomous Execution" },
      { label: "Integrations", value: "Slack + Google Workspace" },
      { label: "Status", value: "Deploys Operational" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    slug: "attendance-tracker-app",
    exhibit: "System 08",
    title: "Attendance Tracker Mobile App",
    headline: "Cross-platform mobile verification, Google Auth & FCM Push",
    subtitle:
      "Cross-platform attendance app built with React Native and Firebase, featuring Google sign-in, FCM push notifications, and admin dashboard.",
    date: "2024",
    client: "Mobile Workforce",
    scope: "React Native & Firebase Services",
    status: "Production Live",
    github:
      "https://github.com/ThakurAyushRaj/Google-Auth_FCM-Notification_Admin-Pannel_Attendence-Tracker_App-React-Native-",
    featured: false,
    description:
      "Cross-platform attendance app with Google sign-in, FCM push notifications, an admin dashboard, and attendance reporting.",
    tech: ["React Native", "TypeScript", "Firebase Auth", "FCM Push", "Firestore"],
    storyParagraphs: [
      "Engineered a cross-platform mobile application supporting iOS and Android devices for field attendance verification.",
      "Incorporated Google OAuth 2.0 authentication for employee login, paired with Firebase Cloud Messaging (FCM) for shift reminders.",
      "Built a mobile admin dashboard equipped with exportable attendance reports and leave approval toggles."
    ],
    techStack: [
      { name: "React Native & Expo", role: "Cross-platform mobile render engine" },
      { name: "Firebase Authentication", role: "Google Sign-In OAuth management" },
      { name: "Firebase Cloud Messaging", role: "Background push notification system" }
    ],
    keyFindings: [
      { label: "Platforms", value: "iOS & Android (Unified Codebase)" },
      { label: "Auth Provider", value: "Google Auth SSO" },
      { label: "Status", value: "Solo Build Verified" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    slug: "google-calendar-todo",
    exhibit: "System 09",
    title: "Google Calendar To-Do App",
    headline: "Mobile task scheduling & Google Calendar API sync",
    subtitle:
      "Task manager for mobile devices with Google Calendar sync, reminders, and real-time updates for productivity tracking.",
    date: "2024",
    client: "Productivity Engine",
    scope: "React Native & Calendar API",
    status: "Production Live",
    github:
      "https://github.com/ThakurAyushRaj/Google-Calender-Intregeted-To-Do-App-React-Native-",
    featured: false,
    description:
      "Task manager with Google Calendar sync, reminders, and real-time updates for productivity tracking.",
    tech: ["React Native", "TypeScript", "Google Calendar API", "AsyncStorage"],
    storyParagraphs: [
      "Authored a mobile utility that bidirectionalizes task items with Google Calendar schedules.",
      "Communicates directly with the Google Calendar API to reserve time blocks and schedule local device alarms.",
      "Features offline persistence using local AsyncStorage, gracefully syncing changes once network connectivity is restored."
    ],
    techStack: [
      { name: "React Native", role: "Mobile UI & gestures" },
      { name: "Google Calendar API", role: "Event creation & time blocking" },
      { name: "AsyncStorage", role: "Offline task queue & persistence" }
    ],
    keyFindings: [
      { label: "Sync Engine", value: "Two-Way Google Calendar Sync" },
      { label: "Offline Mode", value: "Local Storage Queue" },
      { label: "Status", value: "Filed as Solo Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
  }
];

export const forensicsTable = [
  {
    substance: "React.js / TypeScript",
    code: "FRONTEND",
    detected: "Daily Practice",
    finding: "Core UI Engine",
    isPrimary: true
  },
  {
    substance: "Node.js / Express.js",
    code: "BACKEND",
    detected: "Daily Practice",
    finding: "REST API Core",
    isPrimary: true
  },
  {
    substance: "MongoDB / MySQL",
    code: "DATABASE",
    detected: "Production Builds",
    finding: "Data Persistence",
    isPrimary: true
  },
  {
    substance: "React Native / Flutter",
    code: "MOBILE",
    detected: "Mobile Apps",
    finding: "Cross-Platform",
    isPrimary: true
  },
  {
    substance: "Telephony & WhatsApp API",
    code: "VOICE/MSG",
    detected: "Vobiz & Meta API",
    finding: "Calling & Messaging",
    isPrimary: true
  },
  {
    substance: "AWS Cloud & Tools",
    code: "DEVOPS",
    detected: "AWS, Git, GitHub",
    finding: "Cloud & Versioning",
    isPrimary: false
  }
];

export const experiences = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "aNquest Media",
    companyUrl: "https://anquestmedia.com/",
    location: "Greater Noida, India",
    period: "May 2026 – Present",
    type: "Full-time",
    bullets: [
      "Develop full-stack features for aNquest Media's CRM and EMR products, building interfaces in React.js and backend services with Node.js and Express.js.",
      "Design and integrate RESTful APIs that power lead-management workflows for real estate clients and patient-record workflows for healthcare clients.",
      "Model and query data in MongoDB and MySQL, contributing to schema design and performance-conscious queries for core CRM/EMR modules.",
      "Collaborate within an agile team through code reviews, sprint planning, and daily stand-ups."
    ],
  },
  {
    id: 2,
    role: "Software Development Engineer Intern",
    company: "aNquest Media",
    companyUrl: "https://anquestmedia.com/",
    location: "Greater Noida, India",
    period: "Feb 2026 – Apr 2026",
    type: "Internship",
    bullets: [
      "Contributed to front-end and back-end development on the CRM/EMR platform during a 3-month internship, working across the MERN stack.",
      "Built reusable UI components and supported feature development; converted to a full-time Software Development Engineer role at the end of the internship."
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology, Computer Science",
    institution: "IIMT College of Engineering",
    location: "Greater Noida",
    period: "2021 – 2025",
  },
  {
    id: 2,
    degree: "Class XII",
    institution: "Bihar School Examination Board",
    location: "Patna",
    period: "2021",
  },
  {
    id: 3,
    degree: "Class X",
    institution: "CBSE",
    location: "New Delhi",
    period: "2019",
  },
];
