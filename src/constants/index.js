import {
  javascript,
  reactjs,
  dart,
  flutter,
  html,
  css,
  tailwind,
  nodejs,
  git,
  postgresql,
  firebase,
  threejs,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Dart", icon: dart },
  { title: "Flutter", icon: flutter },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Flutter", icon: flutter },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Firebase", icon: firebase },
];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Ehizua Hub | TechSchool",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of frontend development, building responsive projects using modern web technologies.",
      "Mentored students at the hub on HTML, CSS, and JavaScript fundamentals, significantly improving their foundational skills.",
      "Developed and deployed multiple responsive web applications, enhancing my communication skills and technical confidence.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Digital Solutions Inc",
    icon: mathwork,
    iconBg: "#161329",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Built and optimized responsive user interfaces using React.js and Tailwind CSS for various client projects.",
      "Collaborated with UI/UX designers to implement pixel-perfect designs and improve overall user experience.",
      "Debugged and resolved frontend issues, reducing page load time by 40% through code optimization and performance tuning.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TechVision Labs",
    icon: edunet,
    iconBg: "#161329",
    date: "Apr 2024 - dec 2024",
    points: [
      "Developing full-stack web applications using React.js for frontend and Node.js for backend services.",
      "Designed and implemented RESTful APIs and integrated Firebase for real-time database functionality.",
      "Implemented PostgreSQL databases and managed data migrations, ensuring data integrity and security across applications.",
    ],
  },
];

export const projects = [
  {
    name: "Typefaster",
    description:
      "Web-based game platform that allows users to practice and improve their typing speed through engaging typing tests game words fall down and you type them before the reach the bottom levels increases, speed increases and words become longer as you go higher. Currently being worked on to add more features and improve user experience and only compatible for laptop for now.",
    tags: [
      { name: "REACT", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "firebase", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/Dicksonobodo/typefaster",
    live_link: "https://dicksonobodo.github.io/typefaster/",
  },
  {
    name: "annonymous-messager",
    description:
      "A web-based anonymous messaging platform that allows users to send and receive messages without revealing their identity, only the admin can see all messages from the admin dashboard built it for a group just for fun and bants the project.added firebase for the backend and authentication including email and password, google authentication.",
    tags: [
      { name: "REACT", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/Dicksonobodo/anonymous-message",
    live_link: "https://dicksonobodo.github.io/anonymous-message/",

  },
  {
    name: "opaycloneproject",
    description:
      "An opayclone project built with flutter just the design not fully completed yet.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "dart", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },],
    image: mhft,
    source_code_link:
      "https://github.com/Dicksonobodo/opaycloneproject",
    live_link: "https://dicksonobodo.github.io/opaycloneproject/",

  },
  {
    name: "Shopping Cart",
    description:
      "A simple shopping cart application with authentication screen built with JavaScript, HTML, CSS and node.js, postegres for backend and database that allows users to add, remove, and view items in their cart with a clean and user-friendly interface.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/Dicksonobodo/product-list-with-cart-main-main",
    live_link: "https://dixoncart.vercel.app/",
  },
];
