import { useRef } from "react";
import "./App.css";
import Cursor from "./components/cursor/cursor";
import { AboutPage } from "./scenes/aboutPage/aboutPage";
import { ContactPage } from "./scenes/contactPage/contactPage";
import { LandingPage } from "./scenes/landingPage/landingPage";
import { Navbar } from "./scenes/navbar/navbar";
import { PortfolioPage } from "./scenes/portfolioPage/portfolioPage";
import { ProjectsPage } from "./scenes/projectsPage/projectsPage";

function App() {
  const ref = useRef()
  return (
    <>
      <Cursor />
      <div className="App">
        <Navbar />

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
