import React from "react";
import MycoHaus from "../img/mycohaus.png";
import Music from "../img/Music-venue-API.png";
import Quiz from "../img/ss-of-the-page-deployed-from-html.png";
import Planner from "../img/ss-page.png";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div>
              <a
                href="https://www.mycohaus.com/"
                class="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MycoHaus} class="card-img-top" alt="MycoHaus" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div>
              <a
                href="https://github.com/katsaymeow/Quiz-Show-With-The-Flow"
                class="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Quiz} class="card-img-top" alt="Quiz" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div>
              <a
                href="https://github.com/Aaronpqking/data-day"
                class="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Music} class="card-img-top" alt="Music API" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div>
              <a
                href="https://github.com/katsaymeow/Task-At-Hand"
                class="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Planner} class="card-img-top" alt="Planner" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
