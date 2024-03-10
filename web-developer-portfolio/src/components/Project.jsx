/* eslint-disable react/prop-types */
import "../styles/project.css"
import githublogoWhite from '../assets/GitHub_Logo_White.png'

export default function Project(props) {
  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="projectImage" src={props.img} alt={props.alt}></img>
      </a>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <a href={props.repo} target="_blank" rel="noreferrer">
        <img className="githubLogo" src={githublogoWhite} alt="GitHub Project Repository"></img>
      </a>
    </div>
  );
}