import React from "react";
import { Linkedin, Github } from "react-bootstrap-icons";

function Home() {
  return (
    <div id="mainPage" className="">
      <div className="contentContainer mb-4 p-5 shadow">
        <h2 className="ml-1 mb-3 mt-6">About Me</h2>
        <div className="row">
          <div className="col">
            <img
              src="
              https://hammonds526.github.io/Portfolio/images/garthImg.jpg"
              className="rounded float-left img-fluid  mr-3 shadow-sm"
              alt="Garth Hammonds"
              width="200px"
            ></img>
            <p>
            I’m a hard working individual, experienced in web development, marketing, photography, client services, customer service, and project management. I have a passion for knowledge and excel at whatever I set my sights on. In previous employment, I have been consistently used by multiple departments due to my quick learning, diligent work ethic, and problem solving ability. My work history has allowed me to learn a multitude of skills that I use to work effectively whether it be alone, or in a team environment.

            </p>
            <p>- Garth Hammonds</p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contentContainer p-4  shadow">
        <div className="row">
          <div className="col main-article text-center">
            <h2 className=" mb-4">Contact</h2>
            <h5 className="text-center mb-3">
              <i
                className="bi bi-envelope mr-1"
                style={{ fontSize: "22px" }}
              ></i>{" "}
              garthbhammonds@gmail.com
            </h5>
            <h5 className="text-center mb-3">
              <i
                className="bi bi-telephone-fill mr-1"
                style={{ fontSize: "22px" }}
              ></i>{" "}
              (951) 227-8706
            </h5>
            <div className="socialDiv p-2 shadow">
              <div className="d-flex justify-content-between">
                <a
                  href="https://github.com/Hammonds526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Github
                    className="bi bi-github social hoverBtn d-block"
                    size={50}
                  ></Github>
                </a>
                <a
                  href="https://www.linkedin.com/in/garth-hammonds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Linkedin
                    className="bi bi-linkedin social hoverBtn d-block ml-2"
                    size={50}
                  ></Linkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col lg-4 sm-2"></div>
    </div>
  );
}

export default Home;
