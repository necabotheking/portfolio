/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import LoadingAnimation from "./assets/lottie/LoadingAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: LoadingAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aicha",
  title: "Hello, I'm Aïcha",
  subTitle: emoji(
    "Computational Analysis and Public Policy Graduate Student interested in the intersection of social justice and tech"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/necabotheking/",
  gmail: "aichacamara@uchicago.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle: "Data Science, Machine Learning, Visualization, and AI",
  skills: [
    emoji(
      "⚡ Develop informative data visualizations for effective communication of insights"
    ),
    emoji("⚡ Implement machine learning algorithms for predictive analytics"),
    emoji(
      "⚡ Utilize statistical techniques to analyze and interpret complex datasets"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },    
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Chicago",
      logo: require("./assets/images/UChicagologo.png"),
      subHeader: "Master of Science in Computational Analysis and Public Policy",
      duration: "September 2022 - June 2024",
      desc: "Just Tech, Government Accountability, and AI Focus",
      descBullets: [
        "Took courses on Software Engineering, Web Security, Data Science, and Data Visualization.",
        "Served as the Director of Data Visualization for Black Policy Review.",
        "Volunteered with the UChicago TechTeam Volunteer on projects with Reproductive Transparency Now and Hope Chicago."
      ]
    },
    {
      schoolName: "University of Central Florida",
      logo: require("./assets/images/UCFlogo.png"),
      subHeader: "Bachelor of Arts in International and Global Studies",
      duration: "January 2018 - May 2022",
      desc: "Security and East Asian Studies Focus",
      descBullets: [
              "Participated in research centering underrepresented minority groups in Japan and published an Honors Thesis.",
              "Presented Honors Research at 2 conference and won 3 awards.",
              "Served as the Australia and Asia Pacific Intern in UCF Global Perspectives Office and published 5 briefs.",
              ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Invisible Institute",
      companylogo: require("./assets/images/InvisibleInstituteLogo.png"),
      date: " July 2023 – Present",
      descBullets: [
        "Leverage Python, Jupyter, and Git to streamline the Citizens Police Data Project data cleaning pipeline",
        "Craft engaging visualizations utilizing Tableau for an investigation into missing black women in Chicago",
        "Develop the foundation for data driven investigation into the victimization of sex workers"
      ]
    },
    {
      role: "Research Assistant",
      company: "UChicago Justice Project",
      companylogo: require("./assets/images/JusticeProject.png"),
      date: "May 2023 – January 2024",
      descBullets: 
      [
        "Supported the Lead Data Scientist on investigation into connections between police nonprofit boards",
        "Collaborated with RA team on analyzing Chicago death records to record homicides",
        "Learned geospatial tools in Python to create Chicago homicide map from 1940s to 1950s"
        ]
    },
    {
      role: "Harris Jumpstart Program Teaching Assistant",
      company: "University of Chicago",
      companylogo: require("./assets/images/Harris.png"),
      date: "August 2023",
      descBullets: 
      [
        "Collaborated with the teaching assistant team to ensure the seamless delivery of the Jumpstart program",
        "Facilitated daily Teaching Assistant sessions aimed at reinforcing key concepts and students' questions",
        "Provided crucial additional support to students, aiding in the development of robust foundations in math and enhancing their readiness for the upcoming academic year"
        ]
    },
    {
      role: "Japanese Indigenous Research Intern",
      company: "Indian Health Service",
      companylogo: require("./assets/images/ihs.jpeg"),
      date: "August 2019 – May 2021",
      descBullets: 
      [
        "Assisted the project leader in selecting and interviewing 2020-2021 VSFS intern team",
        "Conducted in-depth ENG/JPN research on indigenous populations in Japan, contributing to a nuanced understanding of cultural dynamics",
        "Compiled comprehensive findings and expertly assembled research reports for the project website, enhancing accessibility and impact"
        ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Large Projects",
  subtitle: "Selected Data Science projects ",
  projects: [
    {
      image: require("./assets/images/InvisibleInstituteLogo.png"),
      projectName: "Civic Police Data Project Pipeline",
      projectDesc: "Streamlining the Citizens Police Data Project data processing pipeline to increase officer misconduct report name matching efficiency",
      toolsDesc: "Python",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://invisible.institute/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/RTN.png"),
      projectName: "Reproductive Transparency Now",
      projectDesc: "Created an automated text processing pipeline a team of UChicago TechTeam volunteers.",
      toolsDesc: "Python, Google Drive API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.reprotransparency.org/"
        }
      ]
    },
    {
      image: require("./assets/images/climatecabinet.jpeg"),
      projectName: "Climate Cabinet",
      projectDesc: "Developed a Searchable Database of Arizona, Michigan, Minnesota, and Pennsylvania's campaign finance data",
      toolsDesc: "Python, Jupyter, Docker",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.climatecabinetaction.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Publications "),
  subtitle: "Selected Achievements and Awards",
  achievementsCards: [
    {
      title: "Harris Ambassador",
      subtitle:
        "2024-2024 Harris Ambassador for the MSCAPP program. Participated on current student and alumni panels on experiences in the program. Met one on one with students to discuss Harris life and pressing questions",
      image: require("./assets/images/Harris.png"),
      imageAlt: "UChicago Logo",
      footerLink: [
        {
          name: "View Harris Ambassador Profile",
          url: "https://harris.uchicago.edu/admissions/meet-with-harris/connect-with-our-students"
        }
      ]
    },

    {
      title: "Honors Thesis",
      subtitle: "Shift or Stagnation: Analyzing Changing Japanese Attitudes Towards Various Minorities. Worked in the UCF Research and Mentoring Program with Thesis Chair Dr. Myunghee Kim to investigate the changes in views toward the Ainu, Women, LGBTQ and Biracial Japanese populations",
      image: require("./assets/images/UCFlogo.png"),
      imageAlt: "UCF Logo",
      footerLink: [
  
        {
          name: "Honors Thesis",
          url: "https://stars.library.ucf.edu/honorstheses/1121/"
        }
      ]
    },
    {
      title: "Founder’s Day Outstanding Thesis Award in Social Sciences, Business, and Education",
      subtitle:
        "Nominated by Honors Thesis Chair and chosen by the College of Sciences Dean as one of four awardees for the College of Sciences",
      image: require("./assets/images/UCFlogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "UCF News",
          url: "hhttps://www.ucf.edu/news/ucf-student-honors-celebration-spotlights-top-achievers/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
// change to publications section
const blogSection = {
  title: "Publications and Data Visualizations",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
// to edit into data visualization and reporting section later

const talkSection = {
  title: "Data Visualization and Reporting",
  talks: [
    {
      title: "Missing in Chicago",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "For resume or CV, contact me",
 email_address: "aichacamara@uchicago.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
