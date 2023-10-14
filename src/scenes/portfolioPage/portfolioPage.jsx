import { useRef } from "react";
import "./portfolioPage.styles.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import image1 from "../../assets/images/socialSync.png";
import image2 from "../../assets/images/ecom.png";

const items = [
  {
    id: 1,
    title: "Social Media App",
    img: image1,
    desc: "Social Sync: Your all-in-one social hub. Share, like, comment, and seamlessly connect with friends through images, fostering connections in a responsive, user-friendly environment. Post memories, react with love, and stay in touch through private messages.",
    link: "https://socialsync.netlify.app/",
    tech: [
      {
        src: "https://img.shields.io/badge/MongoDB-%234ea94b?style=for-the-badge&logo=mongodb&logoColor=white",
        alt: "MongoDB",
      },
      {
        src: "https://img.shields.io/badge/Express.js-%23404d59?style=for-the-badge&logo=express&logoColor=#F2F7FF",
        alt: "Express.js",
      },
      {
        src: "https://img.shields.io/badge/React.js-%2361DAFB?style=for-the-badge&logo=react&logoColor=white",
        alt: "React.js",
      },
      {
        src: "https://img.shields.io/badge/Node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white",
        alt: "Node.js",
      },
      {
        src: "https://img.shields.io/badge/Socket.io-%23000000?style=for-the-badge&logo=socket.io",
        alt: "Socket.io",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce Website",
    img: image2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: "https://magenta-piroshki-d661f6.netlify.app/",
    tech: [
      {
        src: "https://img.shields.io/badge/React.js-%2361DAFB?style=for-the-badge&logo=react&logoColor=white",
        alt: "React.js",
      },
      {
        src: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white",
        alt: "Firebase",
      },
      {
        src: "https://img.shields.io/badge/Redux%20Toolkit-%23764ABC?style=for-the-badge&logo=redux&logoColor=white",
        alt: "Redux Toolkit",
      },
    ],
  },
  {
    id: 3,
    title: "Online Voting System",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "An online voting system that is both secure and efficient employs face recognition and OTP verification for voter authentication. Additionally, an admin section is included for the creation and management of elections.",
    link: false,
    tech: [
      {
        src: "https://img.shields.io/badge/Node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white",
        alt: "Node.js",
      },
      {
        src: "https://img.shields.io/badge/Express.js-%23404d59?style=for-the-badge&logo=express&logoColor=white",
        alt: "Express.js",
      },
      {
        src: "https://img.shields.io/badge/MongoDB-%234ea94b?style=for-the-badge&logo=mongodb&logoColor=white",
        alt: "MongoDB",
      },
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 className="outline-text">{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              {item.tech.map((obj, index) => (
                <img src={obj.src} alt={obj.alt} key={index} />
              ))}
            </div>

            {item.link && (
              <button>
                <a href={item.link} target="_blank">
                  See Demo
                </a>
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

{/* <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
<img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C">
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen" alt="Python">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase">
<img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" alt="Canva">
<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
<img src="https://img.shields.io/badge/Express.js-%23404d59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
<img src="https://img.shields.io/badge/Node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/React.js-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React.js">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/Redux%20Toolkit-%23764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit">
<img src="https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
<img src="https://img.shields.io/badge/SQLPlus-%23FF4500?style=for-the-badge&logo=oracle&logoColor=white" alt="SQLPlus">
<img src="https://img.shields.io/badge/PHP-%23777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP">
<img src="https://img.shields.io/badge/Socket.io-%23000000?style=for-the-badge&logo=socket.io" alt="Socket.io">
<img src="https://img.shields.io/badge/Material%20UI-%230081CB?style=for-the-badge&logo=material-ui" alt="Material UI">
<img src="https://img.shields.io/badge/Bootstrap-%23563D7C?style=for-the-badge&logo=bootstrap" alt="Bootstrap"> */}
