import lyca from "../assets/lyca.png";
import airtel from "../assets/airtel.png";
import mcc from "../assets/mcc.png";

export const skills: any = [
  {
    skill: "HTML5",
    color: "#DD4B25",
  },
  {
    skill: "CSS3",
    color: "#214ED4",
  },
  {
    skill: "JavaScript",
    color: "#EBDA1C",
  },
  {
    skill: "TypeScript",
    color: "#2F74C0",
  },
  {
    skill: "Sass",
    color: "#CE679A",
  },
  {
    skill: "Material UI",
    color: "#007CF7",
  },
  {
    skill: "ReactJS",
    color: "#00D1F7",
  },
  {
    skill: "Redux",
    color: "#764ABC",
  },
  {
    skill: "NextJS",
    color: "#000000",
  },
  {
    skill: "Node.js",
    color: "#417E38",
  },
  {
    skill: "MongoDB",
    color: "#419432",
  },
  {
    skill: "MySQL",
    color: "#045C88",
  },
  {
    skill: "AWS",
    color: "#E49200",
  },
  {
    skill: "Firebase",
    color: "#D62B00",
  },
  {
    skill: "Strapi",
    color: "#9079FF",
  },
];

export const experience: string[] = [
  "Side International",
  "Reach Mobile",
  "QuikieApps",
  "Zeroes & Ones",
];

export const jobTitle: any = {
  "Side International": {
    title: "Senior Software Engineer",
    duration: "August 2025 - Present",
  },
  "Reach Mobile": {
    title: "ReactJS Developer",
    duration: "September 2022 - July 2025",
  },
  QuikieApps: {
    title: "Software Development Engineer",
    duration: "June 2021 - August 2022",
  },
  "Zeroes & Ones": {
    title: "Frontend Developer",
    duration: "February 2021 - June 2021",
  },
};

export const experienceInDetails: any = {
  "Side International": [
    "Developed Import and Export functionality via Excel to enable bulk creation and updates of Contacts, Accounts, and Opportunities, improving data management efficiency and user productivity.",
    "Developed a “What’s New” feature enabling admins to publish version-based product updates via a rich text editor and notify users through a top-nav icon, enhancing feature visibility and user adoption.",
    "Resolved critical bugs and UI inconsistencies across CRM modules, improving application stability, performance, and overall user experience.",
  ],
  "Reach Mobile": [
    "Developed and launched a user-friendly web application with an optimized check-out page that boosted user clicks and drove a 20% rise in customer purchases.",
    "Implemented Single Sign-On (SSO) login feature to elevate customer experience and enhance security, resulting in significant savings by reducing password reset costs by $70 per incident.",
    "Significantly enhanced web traffic by 125% through strategic improvements in navigation, integration of social media plugins, and implementation of advanced SEO techniques.",
    "Led a team of 3+ junior developers, providing mentorship to enhance their proficiency in setting and achieving goals, priorities, and deliverables aligned with product milestones.",
    "Conducted 250+ code reviews over the past year and left 100+ comments to help ensure that the code meets quality standards and find bugs.",
    "Enhanced user experience by implementing responsive design principles; increased mobile traffic by 40% and reduced bounce rates by 25% within three months.",
  ],
  QuikieApps: [
    "Engineered a cutting-edge hybrid application enabling seamless streaming of video content across 10,000+ internet-connected devices; optimized video delivery, reducing buffering time by 40% and enhancing user experience.",
    "Integrated caching strategies using workbox that increases application performance by 30% and improves reliability by providing offline access to the content.",
    "Implemented internationalization (i18n) that support application in multiple languages, time zones and regional preferences for the worldwide customers.",
    "Improved cross-browser compatibility, ensuring seamless performance across all major browsers; decreased customer complaints by 50% and increased session duration by 20%.",
    "Ensured the technical feasibility and optimum function of design feature that accelerated load time by 13% and improved site stickiness by 19%.",
  ],
  "Zeroes & Ones": [
    "Collaborated with 5 developers to create a responsive eLearning project focused on delivering engaging content and achieving learner objectives.",
    "Performed rigorous testing to identify and fix over 30 bugs within the front-end application.",
    "Routinely utilized Git for version control and collaborated through GitHub, enhancing team productivity and code quality.",
    "Attended daily standups meetings to discuss project roadblocks, status updates, and solutions and consistently achieved the project milestones.",
  ],
};

export const projectDesc: any = [
  {
    name: "Lyca Mobile",
    desc: "As a Frontend Developer for Lycamobile, I developed a responsive website interface for their U.S. mobile service, focusing on prepaid plans with unlimited talk, text, and data options. My work ensured a seamless platform for customers to access services and international calling features.",
    skills: ["React", "Redux", "TypeScript", "Axios", "Material UI"],
    gitLink: "",
    webLink: "https://www.lycamobile.us/en/",
    img: lyca,
  },
  {
    name: "Mediacom Mobile",
    desc: "As a Frontend Developer for Mediacom Mobile’s 2024 launch, I designed and implemented a responsive user interface for their mobile service website. My work optimized the customer experience for the Unlimited and By the Gig Plans, complementing Mediacom's Xtream Internet service.",
    skills: ["React", "Redux", "TypeScript", "Axios", "Material UI"],
    gitLink: "",
    webLink: "https://mediacommobile.com/",
    img: mcc,
  },
  {
    name: "OTT Hybrid Application",
    desc: "Developed a robust OTT hybrid application designed to deliver streaming media content across multiple platforms, including iOS, Android, and web. The application provides users with a seamless viewing experience, offering features such as live TV, on-demand content, and personalized recommendations.",
    skills: ["React", "Redux", "Video.js", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "",
    img: airtel,
  },
];

export const archiveProjectDetails: any = [
  {
    year: 2025,
    project: "Side CRM",
    madeAt: "Side International",
    builtWith: ["React", "Tailwind CSS", "Tanstack Query", "TypeScript"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2025,
    project: "Lyca Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "https://www.lycamobile.us/en/",
  },
  {
    year: 2024,
    project: "Cube Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "https://cubemobile.us/en",
  },
  {
    year: 2024,
    project: "Mediacom Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "https://mediacommobile.com/",
  },
  {
    year: 2024,
    project: "TDS Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "https://mobile.tdstelecom.com/",
  },
  {
    year: 2024,
    project: "Breezeline Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "https://www.breezeline.com/",
  },
  {
    year: 2023,
    project: "Sparklight: Internet Service Provider, TV & Phone",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios", "Firebase"],
    gitLink: "",
    webLink: "https://flexconnectinternet.com/",
  },
  {
    year: 2023,
    project: "Astound Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios", "Firebase"],
    gitLink: "",
    webLink: "https://www.astound.com/mobile/",
  },
  {
    year: 2023,
    project: "Tulip Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios", "Firebase"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2022,
    project: "Ghost Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios", "Firebase"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2022,
    project: "Reach Mobile",
    madeAt: "Reach",
    builtWith: ["React", "Redux", "TypeScript", "Axios", "Firebase"],
    gitLink: "",
    webLink: "https://www.reachmobile.com/",
  },
  {
    year: 2021,
    project: "Airtel Africa - OTT",
    madeAt: "QuikieApps",
    builtWith: ["React", "Redux", "Video.js", "TypeScript", "Axios"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2021,
    project: "Gallery - A vault web app",
    madeAt: "-",
    builtWith: ["React", "Express", "Node.js", "MySql"],
    gitLink: "https://github.com/mohamedaasif/gal-e-re",
    webLink: "",
  },
  {
    year: 2021,
    project: "Art Marketplace",
    madeAt: "QuikieApps",
    builtWith: ["Next.js", "JavaScript"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2021,
    project: "Finance Web App",
    madeAt: "Zeroes & Ones",
    builtWith: ["React", "JavaScript"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2021,
    project: "Banner Advertising Platform",
    madeAt: "Zeroes & Ones",
    builtWith: ["HTML", "CSS", "JavaScript"],
    gitLink: "",
    webLink: "",
  },
  {
    year: 2021,
    project: "Ecopack: Paper baking molds for industries and distributors",
    madeAt: "Zeroes & Ones",
    builtWith: ["Angular", "JavaScript"],
    gitLink: "",
    webLink: "",
  },
];
