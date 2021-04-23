import React from "react";

function Resume() {
  return (
    <div className="contentContainer p-3 shadow">
      <div className="row">
        <div className="col p-3 ">
          <div className="row">
            <div className="col">
              <div className="d-inline-block hoverBtn">
                <a
                  className="font-weight-bold"
                  href="https://hammonds526.github.io/Portfolio/assets/resume.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col px-4 ">
          <p>
            Corona, CA 92882<br></br>(951) 227-8706<br></br>
            GarthBHammonds@gmail.com
          </p>
          <a href="https://github.com/hammonds526">GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/garth-hammonds-286b2a204/">Linkedin</a>

          <h1>Garth Hammonds</h1>
          <h6>SUMMARY</h6>
          <p className="ml-4">
            Full Stack web developer with a certificate from the UCR Bootcamp. 
            Fluent in Node, Mongo, Express, React, HTML5, CSS and
            SQL. The thrill of learning new things propels me forward in this 
            ever-changing field. 
          </p>
          <h6>TECHNICAL SKILLS</h6>
          <ul>
            <li>CODING: Node, Mongo, Express, React, SQL HTML5 and CSS</li>
            <li>TOOLS: GIT, Heroku, Photoshop </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
