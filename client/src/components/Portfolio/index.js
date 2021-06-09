import React from "react";

function Portfolio() {
  return (
    <div className="contentContainer shadow">
      <div className="row">
        <div className="col p-3 ">
          <h2 className="ml-4 mb-3 mt-6">Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col p-4 d-flex flex-wrap justify-content-around">
          <div className="card mb-4" style={{ width: "23rem" }}>
            <img src="https://hammonds526.github.io/Portfolio/images/characterTavernHome.JPG" className="card-img-top" alt="Character Creator"></img>
            <div className="card-body">
              <h5 className="card-title">
                Character Creator Tavern
              </h5>
              <p className="card-text">
              React application for quick and easy character creator for 5th edition Dungeons & Dragons. Custom pixel art homepage, assets, and local data makes site quick and gives a clean nostalgic style.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://character-creator-tavern.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Hammonds526/CharacterCreator"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
          <img src="https://hammonds526.github.io/Portfolio/images/trackStarImg.JPG" className="card-img-top" alt="trackStarImg2"></img>
            <div className="card-body">
              <h5 className="card-title">
                Track Star - Auto organize all your online orders!
              </h5>
              <p className="card-text">
                An app that organizes all your online orders by when they'll be delivered and auto files them after you've received it.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://track-star-2021.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Hammonds526/TRACK-STAR"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
            <img
              src="https://hammonds526.github.io/Portfolio/images/willItStreamImg.JPG"
              className="card-img-top"
              alt="willitstream.com"
            ></img>
            <div className="card-body">
              <h5 className="card-title">willitstream.com - Is that movie being streamed?</h5>
              <p className="card-text">
                A quick and easy search tool to find out which streaming site a movie or tv show is being streamed at, including a link to the movie/tv show on that site!
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://willitstream.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/ctyFaktz"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
            <img
              src="https://hammonds526.github.io/Portfolio/images/employeeDirectoryImg.JPG"
              className="card-img-top"
              alt="Employee Directory"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">Quickly search and organize employees in a helpful directory.</p>
            </div>

            <div className="card-body">
              <a
                href="https://charlestbell.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/Weather-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
