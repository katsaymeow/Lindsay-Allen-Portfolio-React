import React from 'react';
// is resume overkill? Should I just list projects?
import Resumes from '../img/Resume.png';
export default function Resume() {
    
    return (
    <div className='row justify-content-center'>
      <div className="col-sm-9">
        <div className="card">
          <div className="card-body">
            <div>
              <img src={Resumes} class="card-img-top" alt="Resume" />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
