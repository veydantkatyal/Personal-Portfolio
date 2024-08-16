const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Veydant Katyal | Portfolio",
  description:
    "Driven by a passion for Data Science, Machine learning, Deep learning and Generative AI, I am dedicated to leveraging these technologies to devise innovative solutions for real-world challenges",
  og: {
    title: "Veydant Portfolio",
    type: "website",
    url: "", // Leave this blank or use a placeholder
  },
};

//Home Page
const greeting = {
  title: "Hola👋",
  sub: "Veydant Katyal",
  logo_name: "Veydant Katyal",
  resumeLink:
    "https://drive.google.com/file/d/1RcbTNSvDKhK8O0CPKs_Uuc60mEDyNo86/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/veydantkatyal",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/veydantkatyal",
    },
    {
      siteName: "kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/veydantkatyal",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/Veydant_1811/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/veydant-katyal/",
    },
    {
      siteName: "Medium",
      iconifyClassname: "fa-brands:medium",
      style: {
        color: "#00ab6c",
      },
      profileLink: "https://medium.com/@veydantkatyal",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in developing and optimizing algorithms, including decision trees, SVMs, and ensemble methods, for predictive modeling and classification tasks",
        "⚡ Skilled in performing data analysis, statistical modeling, and creating insightful visualizations using tools like Python, Tableau, and Power BI.",
        "⚡ Experienced in building and training neural networks, particularly CNNs, for tasks such as image and speech recognition.",
        "⚡ Expertise in designing and implementing GANs and other generative models for synthetic data creation and creative AI applications.",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
            color: "#E25A1C",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#FFCA28",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos-jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#F37626",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: {
            backgroundColor: "transparent",
            color: "#11557c",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:seaborn",
          style: {
            backgroundColor: "transparent",
            color: "#4C9C86",
          },
        },
        {
          skillName: "GANs",
          fontAwesomeClassname: "simple-icons:gan",
          style: {
            backgroundColor: "transparent",
            color: "#FF4500",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites for DS models using HTML5, CSS3, ReactJS & NodeJS",
        "⚡ Creating application backend in Django, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        // Web Development Frameworks
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#092E20",
          },
        },

        // Frontend Technologies
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            backgroundColor: "transparent",
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            backgroundColor: "transparent",
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            backgroundColor: "transparent",
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "transparent",
            color: "#F7E01D",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            backgroundColor: "transparent",
            color: "#61DAFB",
          },
        },

        // Data Visualization Libraries
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "transparent",
            color: "#3F4C6B",
          },
        },

        // Deployment and Hosting
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            backgroundColor: "transparent",
            color: "#430098",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            backgroundColor: "transparent",
            color: "#00C7B7",
          },
        },
        // Additional Tools
        {
          skillName: "npm",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            backgroundColor: "transparent",
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "IndexVision",
      img_path: "project-01.png",
      description:
        "A WebApp which is a LSTM-based model for predicting index funds using twelvedata API and deployed on Streamlit Cloud",

      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Jupyter Notebook",
          color: "#820032",
        },
        {
          lang: "API",
          color: "#00a100",
        },
        {
          lang: "LSTM",
          color: "#ff4b4b",
        },
        {
          lang: "Streamlit",
          color: "#3c0095",
        },
      ],
      link:
        "https://predicting-index-fund-price-trend-wadpapppphjypw2nnluguaxv.streamlit.app/ ",
      code:
        "https://github.com/veydantkatyal/Predicting-Index-Fund-Price-Trend",
      linkcolor: "white",
    },
    {
      title: "Curvetopia",
      img_path: "project-02.png",
      description:
        "A streamlit webapp which is used to identify, regularize, and beautify curves in 2D Euclidean space by parsing SVG files through Google Drive",
      tags: [
        {
          lang: "python",
          color: "red",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "openCV",
          color: "#3c0095",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "https://curvetopia.onrender.com/",
      code: "https://github.com/veydantkatyal/Curvetopia",
      linkcolor: "white",
    },
    {
      title: "Fraud Snap",
      img_path: "project-03.png",
      description:
        "A React Web App for detecting image forgery detection in health insurance bills using OpenCV & NLTK.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "Tensorflow",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "React",
          color: "#3c0095",
        },
        {
          lang: "Scikit-learn",
          color: "#ff4b4b",
        },
        {
          lang: "NLTK",
          color: "#4257f5",
        },
        {
          lang: "vercel",
          color: "#3c0095",
        },
      ],
      link: "https://github.com/veydantkatyal/fraud-snap",
      code: " ",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Undergraduate Researcher",
        subtitle: "Vellore Institute of Technology, Vellore",
        date: "August 2024-Present",
        content: [
          "Working under the guidance of Prof. Ilanthenral Kandasamy.",
          "Analyzing government data from the USA and India to evaluate the impact of sustainable agricultural practices on water quality and biodiversity using forecasting and machine learning techniques",
          "Creating an interactive chatbot that provides policy recommendations based on machine learning insights, enhancing user engagement with sustainability practices.",
          "Designing and implementing visually compelling dashboards in Tableau/PowerBI to effectively communicate research findings and trends to stakeholders.",
          "Developing a React website that integrates all research components, including data visualizations, the policy chatbot, and forecasting results, providing a unified platform for showcasing and interacting with the research outcomes.",
          "Authorong a comprehensive research paper detailing the methodology, analysis, and findings, and prepare it for publication to contribute to the academic discourse on sustainable agricultural practices and their impacts.",
        ],
      },
      {
        title: "Data Science Team Lead",
        subtitle: "VIT Mathematics Association",
        date: "March 2024 - Present",
        content: [
          "Leading a team of 5 people in developing Data Science and Machine Learning projects to tackle real-life problems.",
          "Organized 3+ events & workshops to educate juniors on trending frameworks and technologies in this domain.",
        ],
      },
      {
        title: "Under Secretary General",
        subtitle: "VIT Model United Nations",
        date: "Dec 2023 - Apr 2024",
        content: [
          "Directed the Conference Services Department for handling the biggest conference in South India-VITMUN’24.",
          "Conducted 5+ events & workshops to improve incoming juniors’ MUN skills in the Rights Domain.",
          "Actively participated in multiple MUN conferences, securing several awards and cash prizes for outstanding performance.",
        ],
      },
      {
        title: "Operations Department Manager",
        subtitle: "IEEE Conference",
        date: "February 2024",
        content: [
          "Spearheaded the Operations Department for the International Conference ic-ETITE’24 at VIT, Vellore.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelors in Computer Science and Engineering",
          subtitle: "Vellore Institute of Technology, Vellore",
          date: "2022 - 2026",
          content: ["CGPA: 8.97/10"],
        },
        {
          title: "CBSE XII",
          subtitle: "Delhi Public School Gurgaon, Vasant Kunj",
          date: "2020 - 2022",
          content: ["Precentage: 90.2%"],
        },
        {
          title: "CBSE X",
          subtitle: "Delhi Public School, Gurgaon",
          date: "2018 - 2020",
          content: ["Precentage: 96.2%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "Received School Topper with Zonal Excellence(under 25) and cash prize for IMO'2021.",
            "Received Certificate of Merit for perfect score in Standard Mathematics class X(top 0.1%).",
            "Received Director's Gold Medal for Academic Excellence for scoring above 85% for eight consecutive years(V-XII)",
            "Placed 3rd/70th in a MUN conference held at BITS Hyderabad and received a big cash prize.",
          ],
        },
        {
          title: "Achievements",
          content: [
            "AWS Cloud Practitioner Certified",
            "Selected in Round-2 of Adobe Gensolve Hacakthon amongst 1000+ teams.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "AWS",
      logo_path: "aws-01.png",
      certificate_link: " ",
      alt_name: "AWS Cloud Practitioner",
      color_code: "#000000",
    },
    {
      title: "AWS AI Practitioner",
      subtitle: "AWS",
      logo_path: "aws-03.png",
      certificate_link: " ",
      alt_name: "AWS AI Practitioner",
      color_code: "#000000",
    },
    {
      title: "AWS Solution Architect Associate",
      subtitle: "AWS",
      logo_path: "aws-02.png",
      certificate_link: " ",
      alt_name: "AWS Solution Architect Associate",
      color_code: "#000000",
    },
    {
      title: "AWS Machine Learning Associate",
      subtitle: "AWS",
      logo_path: "aws-04.png",
      certificate_link: " ",
      alt_name: "AWS Machine Learning Associate",
      color_code: "#000000",
    },
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link: " ",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Math for Machine Learning & Data Science",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Data Science",
      subtitle: "IBM",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Machine Learning in Production",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Natural Language Processing",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
    {
      title: "Generative Adversarial Networks",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera-01.png",
      certificate_link: " ",
      alt_name: "DeepLearning.AI",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI and Cloud Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Central Park Resorts, Gurgaon-122018",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9205865350",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/veydantkatyal",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/veydantkatyal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:veydantkatyal@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/veydant_katyal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
