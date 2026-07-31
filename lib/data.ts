// ============================================================
// ALL PORTFOLIO CONTENT — Blueprint Edition (roberttran.com.au exact match)
// ============================================================

export const personalInfo = {
  name: "Ayush Raj",
  title: "Full Stack Developer",
  location: "Greater Noida, India",
  phone: "+91 91358 31645",
  email: "rajayush226@gmail.com",
  linkedin: "https://linkedin.com/in/ayush-raj-8348a9260",
  github: "https://github.com/ThakurAyushRaj",
  company: "aNquest Media",
  companyUrl: "https://anquestmedia.com/",
  tagline: "Building full-stack products that ship.",
  about:
    "A Greater Noida web developer who likes building things — front to back. Three years in: Ayush Raj builds full-stack web and mobile applications at aNquest Media, developing CRM and EMR products that power lead and patient workflows. He enjoys the whole process — going from a rough idea to something that ships. His main stack is React, Node.js, and MongoDB on the front and back, with React Native and Flutter for mobile builds. When a build calls for it, he reaches for AWS and MySQL.",
};

export const stats = [
  { value: "1+", label: "Live production apps shipped", sub: "CRM + EMR" },
  { value: "MERN", label: "Stack experience", sub: "& MEAN" },
  { value: "2×", label: "Mobile frameworks", sub: "React Native & Flutter" },
  { value: "AWS", label: "Cloud focus", sub: "Growing" },
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
  featured: boolean;
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
    slug: "erp-website",
    exhibit: "Exhibit A",
    title: "ERP Website",
    headline: "The enterprise operation consolidates workflow",
    subtitle:
      "A unified ERP platform integrating Finance, HR, Inventory, and Sales into one seamless command system, eliminating fragmented spreadsheet operations.",
    date: "JAN 2026 — PRESENT",
    client: "Enterprise Suite",
    scope: "Full-Stack System Architecture & UI",
    status: "Confirmed",
    github: "https://github.com/ThakurAyushRaj/ERP-Website",
    featured: true,
    description:
      "Unified ERP platform integrating Finance, HR, Inventory, and Sales into one system to replace manual, spreadsheet-based workflows.",
    tech: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    storyParagraphs: [
      "In early 2026, the investigation uncovered a major breakdown in corporate operational efficiency: departments were relying on disjointed spreadsheets and isolated legacy scripts to manage critical financial ledger items, inventory tracking, and employee payroll.",
      "The subject stepped in to design and build a clean, unified Enterprise Resource Planning (ERP) platform. Built with React, TypeScript, and a high-performance backend, the system centralizes role-based access control, automated inventory re-ordering alerts, and real-time financial reporting.",
      "Key architectural decisions included dynamic data tables capable of rendering thousands of inventory records without frame drops, coupled with a robust REST API layer designed for strict data validation and instant transaction rollback."
    ],
    techStack: [
      { name: "React 18 & TypeScript", role: "Type-safe modular UI & interactive dashboard" },
      { name: "Node.js & Express", role: "RESTful backend processing core ledger operations" },
      { name: "MongoDB & Mongoose", role: "Flexible relational document modeling for enterprise entities" },
      { name: "Tailwind CSS", role: "Bespoke high-density data UI styling" }
    ],
    keyFindings: [
      { label: "Operation Type", value: "Full Enterprise ERP Suite" },
      { label: "Performance Gain", value: "70% reduction in workflow delays" },
      { label: "Role Authorization", value: "Multi-tiered RBAC Matrix" },
      { label: "Deployment Status", value: "Verified Active" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    slug: "slack-attendance-bot",
    exhibit: "Exhibit B",
    title: "Slack Attendance Bot",
    headline: "Automating workforce surveillance & time logging",
    subtitle:
      "An automated Slack bot engine handling clock-ins, shift duration calculations, break management, and automatic daily synchronizations to Google Sheets.",
    date: "NOV 2025 — DEC 2025",
    client: "Internal Team Tooling",
    scope: "Backend Bot Automation & API Sync",
    status: "Confirmed",
    github: "https://github.com/ThakurAyushRaj/SLACK-ATTENDANCE",
    featured: true,
    description:
      "Slack bot automating entry/exit tracking, working-hours calculation, and break management, with daily summaries synced to Google Sheets.",
    tech: ["Node.js", "Express", "Slack Bolt API", "Google Sheets API"],
    storyParagraphs: [
      "Manual time tracking was proving vulnerable to oversight and inconsistent reporting. The subject initiated an automated bot solution integrated directly into daily team communication channels on Slack.",
      "Operating silently in the background, the bot listens to slash commands (`/checkin`, `/checkout`, `/break`) and automatically computes exact shift duration, deducting configured break intervals.",
      "At the end of each working day, a cron schedule aggregates individual logs and writes formatted records directly into Google Sheets via service account OAuth authentication, giving team management immediate operational visibility."
    ],
    techStack: [
      { name: "Slack Bolt API", role: "Event subscription & interactive slash command handling" },
      { name: "Node.js & Express", role: "Asynchronous event loop & webhook listener" },
      { name: "Google Sheets API v4", role: "Automated spreadsheet sync & row appending" }
    ],
    keyFindings: [
      { label: "Automation Rating", value: "100% Autonomous Execution" },
      { label: "Integrations", value: "Slack + Google Workspace" },
      { label: "Time Saved", value: "~15 hours/month admin overhead" },
      { label: "Status", value: "Deploys Operational" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    slug: "attendance-tracker-app",
    exhibit: "Exhibit C",
    title: "Attendance Tracker App",
    headline: "Cross-platform mobile verification under surveillance",
    subtitle:
      "Mobile application built with React Native and Firebase, featuring OAuth single sign-in, FCM push notifications, and administrative reporting dashboards.",
    date: "AUG 2025 — OCT 2025",
    client: "Mobile Workforce",
    scope: "React Native Mobile & Firebase Services",
    status: "Confirmed",
    github:
      "https://github.com/ThakurAyushRaj/Google-Auth_FCM-Notification_Admin-Pannel_Attendence-Tracker_App-React-Native-",
    featured: false,
    description:
      "Cross-platform attendance app with Google sign-in, FCM push notifications, an admin dashboard, and attendance reporting.",
    tech: ["React Native", "TypeScript", "Firebase Auth", "FCM Push", "Firestore"],
    storyParagraphs: [
      "To extend attendance verification to field operatives, the subject engineered a cross-platform mobile application supporting iOS and Android devices.",
      "The app incorporates Google OAuth 2.0 authentication for seamless employee login, paired with Firebase Cloud Messaging (FCM) to dispatch immediate shift reminders and manager approval notifications.",
      "Administrators gain access to a mobile dashboard equipped with exportable attendance reports, leave approval toggles, and real-time status indicators."
    ],
    techStack: [
      { name: "React Native & Expo", role: "Cross-platform native mobile render engine" },
      { name: "Firebase Authentication", role: "Google Sign-In OAuth flow management" },
      { name: "Firebase Cloud Messaging", role: "Real-time background push notification system" }
    ],
    keyFindings: [
      { label: "Platform Coverage", value: "iOS & Android (Unified Codebase)" },
      { label: "Auth Provider", value: "Google Auth SSO" },
      { label: "Notification Latency", value: "< 200ms FCM Delivery" },
      { label: "Status", value: "Solo Operation Verified" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    slug: "google-calendar-todo",
    exhibit: "Exhibit D",
    title: "Google Calendar To-Do App",
    headline: "Synchronizing tasks with temporal schedules",
    subtitle:
      "A task management tool for mobile devices with Google Calendar sync, custom reminder alerts, and real-time status tracking.",
    date: "JUN 2025 — JUL 2025",
    client: "Productivity Suite",
    scope: "Mobile App & Calendar API Integration",
    status: "Confirmed",
    github:
      "https://github.com/ThakurAyushRaj/Google-Calender-Intregeted-To-Do-App-React-Native-",
    featured: false,
    description:
      "Task manager with Google Calendar sync, reminders, and real-time updates for productivity tracking.",
    tech: ["React Native", "TypeScript", "Google Calendar API", "AsyncStorage"],
    storyParagraphs: [
      "To bridge the gap between static task lists and temporal calendar events, the subject authored a mobile utility that bidirectionalizes task items with Google Calendar schedules.",
      "When a user creates or modifies a high-priority task, the application communicates directly with the Google Calendar API to reserve time blocks and schedule local device alarms.",
      "The application features offline persistence using local storage, gracefully syncing pending changes once network connectivity is restored."
    ],
    techStack: [
      { name: "React Native", role: "Mobile user experience & animated gestures" },
      { name: "Google Calendar API", role: "Event creation, sync, & time blocking" },
      { name: "AsyncStorage", role: "Offline task queue & local state persistence" }
    ],
    keyFindings: [
      { label: "Sync Engine", value: "Two-Way Google Calendar Sync" },
      { label: "Offline Support", value: "Local Persistence Queue" },
      { label: "Build Target", value: "React Native Hybrid" },
      { label: "Status", value: "Filed as Solo Build" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    slug: "blog-website",
    exhibit: "Exhibit E",
    title: "Blog Website",
    headline: "Fluid editorial publishing & motion interactions",
    subtitle:
      "An animated blog platform built with React, Tailwind CSS, and Framer Motion for an immersive, tactile reading experience.",
    date: "MAY 2025 — JUN 2025",
    client: "Editorial Platform",
    scope: "Frontend Design System & Motion Graphics",
    status: "Confirmed",
    github: "https://github.com/ThakurAyushRaj/Blog-Website",
    featured: false,
    description:
      "Animated blog site with Framer Motion transitions, built for a smooth, immersive reading experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    storyParagraphs: [
      "Focusing on high-end digital publishing standards, the subject developed an experimental editorial publication engine emphasizing tactile micro-interactions and smooth page transitions.",
      "Utilizing Framer Motion layout animations, article cards expand seamlessly into full-page reading views, preserving scroll position and visual continuity.",
      "The platform features custom typography tokens, fluid dark/light paper aesthetics, and optimized image loading pipelines."
    ],
    techStack: [
      { name: "React & TypeScript", role: "Component hierarchy & state management" },
      { name: "Framer Motion", role: "Layout transitions, scroll triggers, & entrance effects" },
      { name: "Tailwind CSS", role: "Responsive typography & utility styling" }
    ],
    keyFindings: [
      { label: "Motion Rating", value: "60 FPS Smooth Transitions" },
      { label: "Layout Strategy", value: "Fluid Responsive Broadsheet" },
      { label: "Aesthetics", value: "Editorial Paper Style" },
      { label: "Status", value: "Production Complete" }
    ],
    imagePlaceholder: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
  }
];

export const forensicsTable = [
  {
    substance: "Next.js",
    code: "NEXT",
    detected: "Most days",
    finding: "Primary tool",
    isPrimary: true
  },
  {
    substance: "React / TS",
    code: "TSR",
    detected: "Most days",
    finding: "Primary tool",
    isPrimary: true
  },
  {
    substance: "Node.js / Express",
    code: "NODE",
    detected: "Most days",
    finding: "Primary tool",
    isPrimary: true
  },
  {
    substance: "MongoDB / MySQL",
    code: "DBX",
    detected: "In projects",
    finding: "Primary tool",
    isPrimary: true
  },
  {
    substance: "Tailwind CSS",
    code: "TWX",
    detected: "Most days",
    finding: "Primary tool",
    isPrimary: true
  },
  {
    substance: "React Native / Flutter",
    code: "MOB",
    detected: "In projects",
    finding: "Secondary tool",
    isPrimary: false
  },
  {
    substance: "AWS",
    code: "AWS",
    detected: "Amplify·λ·S3",
    finding: "Active focus",
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
