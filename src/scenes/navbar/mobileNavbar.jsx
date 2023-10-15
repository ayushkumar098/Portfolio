import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import "./navbar.styles.scss";
import { IconButton } from "@mui/material";

export const MobileNavbar = ({ isOpen, onClose }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      {/* <button onClick={onClose} className="close-button">
        X
      </button> */}
      <div className="navbar-item">
        <a href="#home" className="">
          <IconButton>
            <HomeOutlinedIcon
              sx={{
                fontSize: 35,
                color: "#000",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            <p>Home</p>
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a className="" href="#aboutPage">
          <IconButton>
            <PersonPinOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#000",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            <p>About</p>
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a className="" href="#portfolio">
          <IconButton>
            <PhonelinkOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#000",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            <p>Project</p>
          </IconButton>
        </a>
      </div>

      <div className="navbar-item">
        <a className="" href="#contactPage">
          <IconButton>
            <EmailOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#000",
                ":hover": {
                  color: "#1C6DD0",
                },
              }}
            />
            <p>Contact</p>
          </IconButton>
        </a>
      </div>
    </div>
  );
};
