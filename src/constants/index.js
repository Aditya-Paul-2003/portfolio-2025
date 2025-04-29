const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 5, suffix: "+", label: "Satisfied Clients" },
    { value: 3, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "MongoDB",
      imgPath: "/images/logos/MongoDB.svg",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "Frontend Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Ui/Ux Designer",
      modelPath: "/models/figma-transformed.glb",
      scale: 2.3,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Version Control",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      duration: "Feb 2023",
      review: "Internshala Web Development Training. The training consisted of HTML, CSS, Bootstrap, DBMS, PHP, JS, and React",
      imgPath: "/images/logo1.png",
      logoPath: "/images/cisce1.svg",
      title: "ISCE Standard 10th",
      date: "2019",
      Overview: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      duration:"Feb 2023",
      review: "Coincent ArIES IIT ROORKEE. Participated in \"Web Development CSS3 and HTML5\" from 17th Dec, 2022 to 17th Feb, 2023 and successfully completed the program. ",
      imgPath: "/images/logo2.png",
      logoPath: "/images/cisce1.svg",
      title: "ISC Standard 12th",
      date: "2021",
      Overview: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      duration:"Apr 2025",
      review: "Udemy Certification Course on Javascript from zero to expert successfully completed",
      imgPath: "/images/logo3.png",
      logoPath: "/images/makaut.svg",
      title: "B.Tech in Electronics & Communication Engineering",
      date: "2021 - Present ",
      Overview: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Rohit Chakrabarti",
      mentions: "@rohitchakrabarti",
      review:
        "Aditya is a skilled frontend developer and designer with a keen eye for detail. His expertise in modern tech stacks is impressive, and he's actively learning backend development to become a full-stack developer. He’s also a fantastic team player, always collaborative and easy to work with.",
      imgPath: "/images/client1.png",
    },
    {
      name: "naughty",
      mentions: "@floydmiles",
      review:
      "Clean code, quick solutions, and solid logic — you make tech look easy. Always great building with you!",
      imgPath: "/images/client5.png",
    },
    {
      name: "Sayan Mukherjee",
      mentions: "@sayanmukherjee",
      review:
        "Aditya is a dependable and creative developer who brings both innovation and clarity to every project. His adaptability in dynamic situations, paired with strong public speaking and outreach skills, makes him a standout team member. Having worked with him during a hackathon, I found him incredibly easy to collaborate with—always focused, supportive, and ready to contribute wherever needed.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Partha Basak",
      mentions: "@parthabasak",
      review:
        "Aditya Paul's technical prowess in MERN stack and UI/UX design is matched only by his exceptional teamwork skills. He's a creative problem-solver who consistently delivers high-quality solutions, meeting deadlines and surpassing expectations. I've had the pleasure of working with Aditya, and I can confidently attest that he's an invaluable asset to any team. Highly recommended!",
      imgPath: "/images/client6.png",
    },
    
    {
      name: "Ronith Kumar",
      mentions: "@ronithkumar",
      review:
      "Aditya is a skilled frontend developer and designer with a keen eye for detail. His expertise in modern tech stacks is impressive, and he's actively learning backend development to become a full-stack developer. He’s also a fantastic team player, always collaborative and easy to work with.",
      imgPath: "/images/client3.png",
    },
   
    {
      name: "Akhono paini",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client4.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/iadityapaul/",
      imgPath: "/images/insta.png",
    },
    {
      name: "github",
      url: "https://github.com/Aditya-Paul-2003",
      imgPath: "/images/github.png",
    },
    {
      name: "x",
      url: "https://x.com/AdityaPaul59313",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/iamadityapaul/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };
  