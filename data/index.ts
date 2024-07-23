import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Adding to my Skillset",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "FigFinancial",
    des: "Need to track your expenses and calculate your loan? This app is for you! Built with C# ASP.Net Core",
    img: "/fig-financial.png",
    iconLists: [],
    href: "https://fig-finance.up.railway.app/",
  },
  {
    id: 2,
    title: "FigueroaCrafts",
    des: "Figueroa Crafts is a sample application that was created to help how the fundamental concepts behind creating a application with ASP.NET and deploying it to Azure App Services.",
    img: "/figcraft.png",
    iconLists: [],
    href: "https://figueroacrafts.azurewebsites.net/",
  },
  {
    id: 3,
    title: "Code Bootcamp Portfolio",
    des: "A portfolio website for a coding bootcamp, built with SCSS, Bootstrap5 and Vanilla JS.",
    img: "/portfolio.png",
    iconLists: [],
    href: "https://fig369.github.io/",
  },
];

export const testimonials = [
  {
    quote:
      "I had the privilege of working closely with Jay during my time at Ocozzio, and I can wholeheartedly recommend him as an exceptional colleague. We shared the same responsibilities as Frontend Developers, and our ability to effectively communicate and adopt each other's feedback significantly enhanced our productivity and quality of work. I especially appreciate Jay's unwavering support when I proposed and implemented improvements to our build systems and workflows. His contributions and insights were invaluable to both my growth and the success of our projects. Jay is a talented and forward-thinking web developer who excels in teamwork and mentoring, making significant contributions to both my growth and the success of our projects. His ability to effectively communicate, adopt feedback, and support improvements to our workflows has been instrumental in our shared achievements. Jay is an invaluable asset to any team fortunate enough to have him.",
    name: "Orion Palmer",
    title: "Software Developer & A.I. Whisperer",
    image: "/orion.jpg",
  }
  // {
  //   quote:
  //     "I had the privilege of working closely with Jay during my time at Ocozzio, and I can wholeheartedly recommend him as an exceptional colleague. We shared the same responsibilities as Frontend Developers, and our ability to effectively communicate and adopt each other's feedback significantly enhanced our productivity and quality of work. I especially appreciate Jay's unwavering support when I proposed and implemented improvements to our build systems and workflows. His contributions and insights were invaluable to both my growth and the success of our projects. Jay is a talented and forward-thinking web developer who excels in teamwork and mentoring, making significant contributions to both my growth and the success of our projects. His ability to effectively communicate, adopt feedback, and support improvements to our workflows has been instrumental in our shared achievements. Jay is an invaluable asset to any team fortunate enough to have him.",
  //   name: "Orion Palmer",
  //   title: "Software Developer & A.I. Whisperer",
  // },
  // {
  //   quote:
  //     "I had the privilege of working closely with Jay during my time at Ocozzio, and I can wholeheartedly recommend him as an exceptional colleague. We shared the same responsibilities as Frontend Developers, and our ability to effectively communicate and adopt each other's feedback significantly enhanced our productivity and quality of work. I especially appreciate Jay's unwavering support when I proposed and implemented improvements to our build systems and workflows. His contributions and insights were invaluable to both my growth and the success of our projects. Jay is a talented and forward-thinking web developer who excels in teamwork and mentoring, making significant contributions to both my growth and the success of our projects. His ability to effectively communicate, adopt feedback, and support improvements to our workflows has been instrumental in our shared achievements. Jay is an invaluable asset to any team fortunate enough to have him.",
  //   name: "Orion Palmer",
  //   title: "Software Developer & A.I. Whisperer",
  // },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "In my role, I specialize in developing custom WordPress websites using both template building plugins and custom code, including PHP, SASS, HTML, jQuery, and JavaScript. I handle the maintenance and development of legacy PHP websites, ensuring they remain functional and up-to-date. Additionally, I create custom responsive emails using MJML, and I have experience working with other CMS platforms like WiX, HubSpot, and Salesforce. This variety of skills allows me to build and maintain versatile, high-quality web solutions tailored to meet diverse client needs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "12 week intensive full stack course",
    desc: "This program was a great foundation, equipping me with the essential skills needed to start my journey in web development. I learned the core fundamentals, focusing on HTML/CSS, JavaScript, and SQL. The course emphasized understanding web development as a discipline rather than just chasing the latest trends. While it takes years of practice and ongoing learning to become an expert, this course has given me the tools and knowledge to begin contributing effectively in today’s web-first environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Side Projects and Freelance Work",
    desc: "I have worked on a variety of side projects and freelance work, including building a custom WordPress theme for a client, creating a personal portfolio website, and developing a web application for a local business. These projects have allowed me to apply my skills in a real-world setting, working directly with clients to understand their needs and deliver high-quality solutions. I have experience working with a range of technologies and I am always looking to expand my knowledge and learn new tools to improve my work",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "FrontEnd Developer Internship",
    desc: "JPEG DAO, wix website, and other projects. I was responsible for developing and maintaining the projects website, ensuring it was up-to-date and functional. I worked closely with the design team to implement new features and improve the user experience, and I also collaborated with the marketing team to optimize the site for SEO. This role allowed me to gain valuable experience working in a professional environment and develop my skills as a front-end developer. I learned how to work with a team, manage my time effectively, and communicate with stakeholders to deliver successful projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Fig369",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/jayfigueroa_dev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jayfig89/",
  },
];
