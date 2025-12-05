import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import NumpyLogo from './assets/tech_logo/numpy.png';
import pandasLogo from './assets/tech_logo/panda.png';
import msexcelLogo from './assets/tech_logo/msexcel.png';
import PowerBiLogo from './assets/tech_logo/power bi.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import MAITLogo from './assets/education_logo/mait_logo.png';
import NGPLogo from './assets/education_logo/ngp_logo.png';
import BSEBLogo from './assets/education_logo/bseb_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import aquapulseLogo from './assets/work_logo/aquapulse.png';
import carppLogo from './assets/work_logo/carpp.png';
import netflixLogo from './assets/work_logo/netflix.png';
import litSurveyLogo from './assets/work_logo/LitSurvey.png';
import securecommLogo from './assets/work_logo/SecureComm.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Numpy', logo: NumpyLogo},
      { name: 'MatPlotLib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'MS Excel', logo: msexcelLogo },
      { name: 'Power BI', logo: PowerBiLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: MAITLogo,
      school: "Maharaja Agrasen Insitute of Technology, New Delhi",
      date: "Aug 2023 - July 2027",
      grade: "9.04 CGPA",
      desc: "I am currently pursuing my Bachelor’s degree in Computer Science and Technology (B.Tech in CST) from Maharaja Agrasen Institute of Technology, New Delhi (affiliated with GGSIPU). Through my ongoing coursework at MAIT, I am building a strong foundation in core computer science concepts, programming, and modern technologies. I am studying key subjects such as Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, Theory of Computation, Compiler Design, Artificial Intelligence, and Web Technologies.",
      degree: "B.Tech - Computer Science & Technology",
    },
    {
      id: 1,
      img: NGPLogo,
      school: "New Government Polytechnic, Patna-13",
      date: "Nov 2020 - Sept 2023",
      grade: "8.88 CGPA",
      desc: "I have completed my Diploma in Computer Science and Engineering from New Government Polytechnic, Patna-13 (NGP-13), under the State Board of Technical Education, Bihar. During my diploma program, I gained a strong foundational knowledge in computer science and information technology through comprehensive coursework in subjects such as Programming in C, Data Structures, Database Management Systems, Computer Organization and Architecture, Operating Systems, Computer Networks, Web Development, and Object-Oriented Programming using Java.",
      degree: "Diploma - Computer Science Engineering",
    },
    {
      id: 3,
      img: BSEBLogo,
      school: "Magadh Central S S School, Nawada",
      date: "Apr 2019 - March 2020",
      grade: "73.4%",
      desc: "I completed my Class 10 education from Magadh Central S S School, Nawada, under the Bihar School Examination Board (BSEB). I studied core subjects including Science, Mathematics, Social Science, English, and Hindi.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AquaPulse",
      description:
        "AquaPulse – Smart water loss monitoring platform that detects leaks, non-revenue water and anomalies in real-time using IoT sensors, AI analytics and automated alerts. Helps utilities and cities reduce water loss by up to 40%, save costs and conserve resources with actionable insights and seamless integration.",
      image: aquapulseLogo,
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "API"],
      github: "https://github.com/shayan-ing/aqua-pulse",
      webapp: "https://aqua-pulse-eta.vercel.app/",
    },
    {
      id: 1,
      title: "Kavach-SecureComm",
      description:
        "Kavach – A highly secure communication platform built on military-grade RSA encryption. Ensures end-to-end confidentiality, integrity, and authenticity for messages, files, and voice calls. Designed for organizations and individuals who need unbreakable privacy and protection against interception or tampering. Simple, fast, and RSA-enabled by default.",
      image: securecommLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/shayan-ing/Kavach-Communication-Project",
      webapp: "https://kavach-secure-communication-system.vercel.app/",
    },
    {
      id: 2,
      title: "Car Price Predictor",
      description:
        "CarPrice Predictor – An intelligent machine learning-powered platform that accurately estimates used car prices in seconds. Trained on vast real-world data, it analyzes make, model, year, mileage, condition, features, location, and market trends to deliver reliable, data-driven valuations. Perfect for buyers, sellers, dealers, and insurers.",
      image: carppLogo,
      tags: ["Machine Learning", "Database", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/shayan-ing/Car-Price-Predictor",
      webapp: "https://car-price-predictor-sandy.vercel.app/",
    },
    {
      id: 3,
      title: "Netflix Clone",
      description:
        "NetflixClone UI – A pixel-perfect, responsive Netflix-inspired user interface design. Features dark-mode elegance, smooth carousels, hover animations, category browsing, movie/series cards, search bar, and profile selection – all crafted with modern frontend (React/Tailwind). Stunning visual clone ready for integration or portfolio showcase.",
      image: netflixLogo,
      tags: ["UI/UX Design", "Figma"],
      github: "https://github.com/shayan-ing/Netflix-Clone",
      webapp: "https://github.com/shayan-ing/Netflix-Clone/blob/894bac87982e560a7889fe22ffc88dd456f1ad74/Netflix%20Clone.pdf",
    },
    {
      id: 4,
      title: "Use of LLMs in War-Game Scenario Generation",
      description:
        "Conducted a focused literature survey (2020–2025) on how Large Language Models (LLMs) are used to generate, expand, and adapt military wargame scenarios.",
      image: litSurveyLogo,
      tags: ["Literature Survey", "MS Word", "Latex", "LLMs", "Natural Language Processing", "Machine Learning"],
      github: "https://github.com/shayan-ing/Literature-Survey",
      webapp: "https://drive.google.com/file/d/1n3Xtmpatf--PKBLthe8o5_w4Xvm8ORpi/view?usp=drive_link",
    },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  