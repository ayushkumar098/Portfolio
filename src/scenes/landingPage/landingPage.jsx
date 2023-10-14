import "./landingPage.styles.scss";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const LandingPage = () => {
  const typed = useRef(null);
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Learner", "Programmer"],
      typeSpeed: 150,
      backSpeed: 80,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="for-background">
      <motion.div
        className="home"
        id="home"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <div className="intro">
          {/* <motion.p variants={textVariants}>Hi,</motion.p> */}
          <motion.h1 variants={textVariants}>Ayush Kumar</motion.h1>
          <motion.p variants={textVariants}>
            I'm a <span className="typing" ref={el}></span>
          </motion.p>
        </div>
        <div className="icon-list">
          <a href="https://www.linkedin.com/in/ayushkumar1201/" target="_blank">
            <LinkedInIcon
              sx={{
                color: "#F2F7FF",
                fontSize: "2rem",
                ":hover": { color: "#1C6DD0" },
              }}
            />
          </a>
          <a href="https://github.com/ayushkumar098" target="_blank">
            <GitHubIcon
              sx={{
                color: "#F2F7FF",
                fontSize: "2rem",
                ":hover": { color: "#1C6DD0" },
              }}
            />
          </a>
          <a href="https://www.instagram.com/ayushkumar1201/" target="_blank">
            <InstagramIcon
              sx={{
                color: "#F2F7FF",
                fontSize: "2rem",
                ":hover": { color: "#1C6DD0" },
              }}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
