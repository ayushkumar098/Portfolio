import { useState } from "react";
import "./App.scss";
import { useMediaQuery } from "@mui/material";
import Cursor from "./components/cursor/cursor";
import { AboutPage } from "./scenes/aboutPage/aboutPage";
import { ContactPage } from "./scenes/contactPage/contactPage";
import { LandingPage } from "./scenes/landingPage/landingPage";
import { Navbar } from "./scenes/navbar/navbar";
import { PortfolioPage } from "./scenes/portfolioPage/portfolioPage";
import Hamburger from "./components/hamburger/hamburger";

function App() {
  const isNonMobileScreen = useMediaQuery("(min-width:450px)");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };

  return (
    <>
      <Cursor />
      <div className="App">
        {!isNonMobileScreen && (
          <Hamburger onToggle={toggleSidebar} isOpen={sidebarOpen} />
        )}
        <Navbar isOpen={sidebarOpen} onClose={toggleSidebar} />
        <main className="content">
          <section>
            <LandingPage />
          </section>
          <section>
            <AboutPage />
          </section>
          <PortfolioPage />
          <section>
            <ContactPage />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
