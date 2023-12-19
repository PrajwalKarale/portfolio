import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  neosoft,
  meta,
  starbucks,
  tesla,
  mumbai,
  mumbai1,
  zs,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  syracuse,
  ich,
  merchstore,
  digit
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graduate Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Neosoft Technologies",
    icon: neosoft,
    iconBg: "#FFFFFF",
    date: "June 2021 - June 2022",
    points: [
      "Experienced in crafting a comprehensive boilerplate for NestJS and NodeJS frameworks with a team of 3 members incorporating diverse modules to enhance application functionality and security.",
      "Responsible for developing and maintaining all server-side network components, ensuring optimal performance of the central database and seamless responsiveness to front-end requests and improving the response time to 10ms by integrating caching using Redis.",
      "Implemented RESTFUL APIs adhering to the MVC architecture pattern for seamless module integration within the boilerplate, ensuring a clear separation of concerns.",
      "Architected and executed a Microservices Architecture using the Nest JS Framework, emphasizing scalability and flexibility. Conducted thorough Unit and Integration Testing using Jest, elevating code coverage from 50% to 95%.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "University Of Mumbai",
    icon: mumbai1,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - March 2021",
    points: [
      "Evaluated various Convolutional Neural Network architectures combined with Recurrent Neural Networks architectures and developed a new CNN-RNN architecture to identify, detect, and classify Acute Intracranial Brain Hemorrhage having a loss of 0.0659 and increased per-class classification accuracy.",
      "Integrated the developed CNN-RNN architecture with the backend of the web application using Django Framework in Python",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "ZS MicroTech Ltd",
    icon: zs,
    iconBg: "#383E56",
    date: "June 2019 - July 2019",
    points: [
      "Conducted Exploratory Data Analysis (EDA) on Google Play Store Dataset (9660 applications) using diverse data modeling techniques to summarize the dataset.",
      "Utilized Support Vector Regression and other advanced Machine Learning Algorithms to predict the success rate of a Mobile Application intended for Google Play Store launch, achieving an RMSE value of 0.772.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intracranial Hemorrhage Detector",
    description:
      "Crafted an innovative CNN-RNN architecture to precisely identify and classify Acute ICH, achieving a loss of 0.0659. Successfully integrated and deployed this model within a Django Framework-based web application.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: ich,
    source_code_link: "https://github.com/PrajwalKarale/Intracranial-Hemorrhage-Detector",
  },
  {
    name: "The Merch Store",
    description:
      "Revolutionizing online shopping with a sleek, user-friendly e-commerce platform dedicated to stylish and comfortable merchandise T-shirts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: merchstore,
    source_code_link: "https://github.com/PrajwalKarale/E-commerce",
  },
  {
    name: "Real-Time Digit Recognizer",
    description:
      "Web application that helps in real-time Digit recognition and also tells which number is present by forming a contour around it given in real-time or in form of image.",
    tags: [
      {
        name: "BootStrap",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: digit,
    source_code_link: "https://github.com/PrajwalKarale/Digit-Recognizer-Flask",
  },
];

const education = [
  {
    title: "Syracuse University",
    company_name: "Graduate Student",
    icon: syracuse,
    iconBg: "#FFFFFF",
    date: "August 2022 - May 2024",
    points: [
      "Analysis Of Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Introduction to Data Science",
    ],
  },
  {
    title: "University Of Mumbai",
    company_name: "Undergraduate Student",
    icon: mumbai1,
    iconBg: "#FFFFFF",
    date: "August 2017 - May 2021",
    points: [
      "Analysis Of Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Object Oriented Programming",
      "Big Data Analytics",
      "Natural Language Processing"
    ],
  },
];
export { services, technologies, experiences, testimonials, projects, education };
