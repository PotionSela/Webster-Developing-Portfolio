import Download from "../Download";

import "../../styles/resume.css"

export default function Resume() {
  return (
    <div className="container">
      <h1 className="text-center title">Resume</h1>
     
      <div className="skills d-flex flex-row justify-content-center">
        <div className="frontend col-md-6 col-sm-12 text-center">
          <h2>FRONT-END</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div className="backend col-md-6 col-sm-12 text-center">
          <h2>BACK-END</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>mySQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <Download />
    </div>
  );
}