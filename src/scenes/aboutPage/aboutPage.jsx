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
            I have a B.Tech degree in Computer Science from SRMIST. I'm an
            enthusiastic individual with strong communication skills and a quick
            learner. During my academic journey, I developed a strong foundation
            in core computer science subjects such as DSA, OOPS and SQL. I am
            proficient with programming languages such as C, C++, JavaScript. I
            have worked on personal projects such as CKD Pridiction where I was
            able to hone my ML skills. Outside of work, I like chess and
            football.
          </motion.p>
          <motion.a href={profilePhoto} download variants={textVariants}>
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
