import "./download.css";
import resume from "../assets/resume1.png";
import resume2 from "../assets/resume2.png";

export default function Download() {
  return (
    <div className="container">
      <a className="btn" href={resume} download="resume1.png">
        Download the front side of my Resume!
      </a>
      <a className="btn" href={resume2} download="resume2.png">
        Download the back side of my Resume!
      </a>
    </div>
  );
}
