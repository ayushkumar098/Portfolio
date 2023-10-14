import { Title } from "../../components/title/title";
import "./aboutPage.styles.scss";
import profilePhoto from "../../assets/images/ProfilePicture.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y:0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const AboutPage = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="aboutPage" id="aboutPage">
      <Title title="ABOUT" subTitle="Know me better" />
      <motion.div
        ref={ref}
        className="aboutPage-container"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <div className="profilePhoto-container">
          <motion.img src={profilePhoto} variants={textVariants} />
        </div>
        <div className="description-container">
          <motion.h2 variants={textVariants}>
            Full Stack Web Developer
          </motion.h2>
          <motion.p variants={textVariants}>
            "I am a Computer Science graduate and aspiring web developer, I
            am passionate about crafting meaningful online experiences. With
            proficiency in both frontend and backend web technologies, I thrive
            on turning creative concepts into functional, user-friendly
            websites. My journey is defined by a commitment to continuous
            learning and a dedication to delivering innovative solutions. Let's
            connect and explore the endless possibilities of the digital world
            together."
          </motion.p>
          <motion.a href={profilePhoto} download variants={textVariants}>
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
