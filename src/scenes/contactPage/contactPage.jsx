import { IconButton } from "@mui/material";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Title } from "../../components/title/title";
import "./contactPage.styles.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const ContactPage = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("clicked");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        formRef.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          formRef.current.reset();
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contactPage"
      id="contactPage"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div>
        <Title title="Contact" subTitle="Reach out to me" />
        <div className="main-container">
          <motion.div className="contact-container" variants={variants}>
            <div className="info">
              <motion.div className="box" variants={variants}>
                <IconButton>
                  <LocationOnOutlinedIcon />
                </IconButton>
                <div className="infoText">
                  <h2>Location:</h2>
                  <p>At. PO. Babhanbay, Hazaribagh, Jharkhand, India</p>
                </div>
              </motion.div>
              <motion.div className="box" variants={variants}>
                <IconButton>
                  <PhoneAndroidOutlinedIcon />
                </IconButton>{" "}
                <div className="infoText">
                  <h2>Call:</h2>
                  <p>+91 9636104946</p>
                </div>
              </motion.div>
              <motion.div className="box" variants={variants}>
                <IconButton>
                  <EmailOutlinedIcon />
                </IconButton>{" "}
                <div className="infoText">
                  <h2>Email:</h2>
                  <p>kumarayush2418@gmail.com</p>
                </div>
              </motion.div>
            </div>
            {/* <div className="message"></div> */}
          </motion.div>

          <div className="messgage-container">
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <svg
                width="400px"
                height="400px"
                viewBox="0 0 32.666 32.666"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 2 }}
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                />
              </svg>
            </motion.div>
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className="form">
                <div>
                  <input type="text" required placeholder="Name" name="name" />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  name="subject"
                />
                <textarea placeholder="Message" rows="6" name="message" />
                <button>Submit</button>
                {error && "Error!"}
                {success && "Success"}
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </div>
        <p>Created By Ayush Kumar</p>
      </div>
    </motion.div>
  );
};
