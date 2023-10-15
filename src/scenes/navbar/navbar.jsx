import { useMediaQuery } from "@mui/material";
import "./navbar.styles.scss";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";

export const Navbar = ({ isOpen, onClose }) => {
  const isNonMobileScreen = useMediaQuery("(min-width:450px)");

  return <>{isNonMobileScreen ? <DesktopNavbar /> : <MobileNavbar isOpen={isOpen} onClose={onClose}/>}</>;
};
