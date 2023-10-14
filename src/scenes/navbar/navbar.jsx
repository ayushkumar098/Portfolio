import { useState } from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import "./navbar.styles.scss";
import { IconButton } from "@mui/material";

export const Navbar = () => {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isHoveredProject, setIsHoveredProject] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);

  const handleMouseEnter = (e) => {
    switch (e) {
      case "home":
        setIsHoveredHome(true);
        break;
      case "project":
        setIsHoveredProject(true);
        break;
      case "contact":
        setIsHoveredContact(true);
        break;
      case "about":
        setIsHoveredAbout(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    setIsHoveredHome(false);
    setIsHoveredContact(false);
    setIsHoveredProject(false);
    setIsHoveredAbout(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-item">
        <a
          href="#home"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
          className={`${isHoveredHome ? "hovered" : ""}`}
        >
          <IconButton>
            <HomeOutlinedIcon
              sx={{
                fontSize: 35,
                color: "#F2F7FF",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            {isHoveredHome && <p>Home</p>}
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
          className={`${isHoveredAbout ? "hovered" : ""}`}
          href="#aboutPage"
        >
          <IconButton>
            <PersonPinOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#F2F7FF",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            {isHoveredAbout && <p>About</p>}
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a
          onMouseEnter={() => handleMouseEnter("project")}
          onMouseLeave={handleMouseLeave}
          className={`${isHoveredProject ? "hovered" : ""}`}
          href="#portfolio"
        >
          <IconButton>
            <PhonelinkOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#F2F7FF",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            {isHoveredProject && <p>Project</p>}
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
          className={`${isHoveredContact ? "hovered" : ""}`}
          href="#contactPage"
        >
          <IconButton>
            <EmailOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#F2F7FF",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            {isHoveredContact && <p>Contact</p>}
          </IconButton>
        </a>
      </div>
    </div>
  );
};
