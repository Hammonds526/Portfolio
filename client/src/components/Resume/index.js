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
                  href="https://hammonds526.github.io/Portfolio/images/resume.pdf"
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
            Full-stack web developer with a certificate from the University of California Riverside. 
            My primary focus is JavaScript, Node.js, MongoDB, Express, React, HTML5, CSS, SQL, and some experience with C# and .NET Framework. The thrill of learning new things propels me forward in this 
            ever-changing field. There's always a new way to do things and ways to improve.
          </p>
          <h6>TECHNICAL SKILLS</h6>
          <ul>
            <li>CODING:</li>
              <li>•JavaScript</li>
              <li>•Jquery</li>
              <li>•HTML5</li>
              <li>•CSS/Bootstrap/Bulma</li>
              <li>•Node.js</li>
              <li>•Express</li>
              <li>•Ajax/Axios</li>
              <li>•React/React Router DOM</li>
              <li>•MongoDB/Mongoose</li>
              <li>•SQL/Sequelize</li>
              <li>•NoSQL databases</li>
              <li>•User Authentication/Passport</li>
              <li>•C#</li>
              <li>•.NET Framework</li>
          </ul>
          <ul>
            <li>TOOLS: GIT, GitHub, Heroku, Photoshop </li>
              <li>•Agile development techniques</li>
              <li>•MVC programming framework</li>
              <li>•GIT</li>
              <li>•GitHub</li>
              <li>•Heroku</li>
              <li>•MySQL Workbench</li>
              <li>•Microsoft SQL</li>
              <li>•Visual Studio Code</li>
              <li>•ESLint VSC Extension</li>
              <li>•C# VSC Extension</li>
              <li>•Adobe Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
