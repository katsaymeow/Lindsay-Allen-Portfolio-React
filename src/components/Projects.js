import React from "react";
import MycoHaus from "../img/mycohaus.png";

// const cardStyle = {
//   img: {
//     height: "370px",
//     width: "450px",
//     borderRadius: "20px",
//   },
// };
export default function Projects() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header">MycoHaus</div>
          <img src={MycoHaus} class="card-img-top" alt="MycoHaus" />
          <div className="card-body">
            <div>
              <a href="https://www.mycohaus.com/" class="card-link">
                MycoHaus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
