import { Title } from "../../components/title/title";
import "./projectsPage.styles.scss";
import sample from "./sample1.jpg";
export const ProjectsPage = () => {

  const clickFun = () => {
    console.log("clicked");
  }
  return (
    <div className="projectPage" id="projectPage">
      <div className="project-container">
        <Title title="My Projects" subTitle="My Works" />

        <div className="projects">
          <div className="project">
            <div className="image-wrapper">
              <img src={sample} alt="A descriptive text for the image" />
              <div className="overlay">
                <div className="column">
                  <div className="box">HTML & CSS</div>
                  <div className="box">React</div>
                  <div className="box">Redux</div>
                </div>
                <div className="column">
                  <div className="box">Firestore</div>
                  <div className="box">Socket.IO</div>
                  <div className="box">Express.js</div>
                </div>
              </div>
            </div>
            <div className="text-div">
              <h3>Project Title</h3>
              <p>
                {" "}
                This will be a short project description ... ghewf vidfce gduy
                dewfuvhksc ufev dfd ewfwfwe fhegwe fgv
              </p>
              <a onClick={clickFun}>Visit</a>
            </div>
          </div>
          <div className="project">
            <div className="image-wrapper">
              <img src={sample} alt="A descriptive text for the image" />
              <div className="overlay">
                <div className="column">
                  <div className="box">HTML & CSS</div>
                  <div className="box">React</div>
                  <div className="box">Nodejs</div>
                </div>
                <div className="column">
                  <div className="box">Firestore</div>
                  <div className="box">Item 5</div>
                  <div className="box">Item 6</div>
                </div>
              </div>
            </div>
            <div className="text-div">
              <h3>Project Title</h3>
              <p>
                {" "}
                This will be a short project description ... ghewf vidfce gduy
                dewfuvhksc ufev dfd ewfwfwe fhegwe fgv
              </p>
              <a onClick={clickFun}>Visit</a>
            </div>
          </div>

          <div className="project">
            <div className="image-wrapper">
              <img src={sample} alt="A descriptive text for the image" />
              <div className="overlay">
                <div className="column">
                  <div className="box">HTML & CSS</div>
                  <div className="box">React</div>
                  <div className="box">Redux</div>
                </div>
                <div className="column">
                  <div className="box">Firestore</div>
                  <div className="box">Item 5</div>
                  <div className="box">Item 6</div>
                </div>
              </div>
            </div>
            <div className="text-div">
              <h3>Project Title</h3>
              <p>
                {" "}
                This will be a short project description ... ghewf vidfce gduy
                dewfuvhksc ufev dfd ewfwfwe fhegwe fgv
              </p>
              <a onClick={clickFun}>Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
