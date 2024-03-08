import "./footer.css";
import githubMark from "../../assets/github-mAudioWorklet.png";
import githubMarkWhite from "../../assets/github-mark-white.png";
import linkedInlogo from "../../assets/LinkedIn-logo.png";
import linkedInlogoWhite from "../../assets/LinkedIn-logo2.png";
import stackOverflowLogo from "../../assets/StackOverflow1.png";
import stackOverflowWhite from "../../assets/StackOverflowWhite1.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialContainer">
        <a href="https://github.com/PotionSela" target="blank" rel="noreferrer">
          <img
            className="socialLogo normal"
            src={githubMark}
            alt="GitHub Repo"
          ></img>
        </a>
        <a href="https://github.com/PotionSela" target="blank" rel="noreferrer">
          <img
            className="socialLogo hover"
            src={githubMarkWhite}
            alt="GitHub Repo"
          ></img>
        </a>
      </div>
      <div className="socialContainer">
        <a
          href="https://www.linkedin.com/in/gisela-mata-b67152aa/"
          target="blank"
          rel="noreferrer"
        >
          <img
            className="socialLogo normal"
            src={linkedInlogo}
            alt="LinkedIn Profile"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/gisela-mata-b67152aa/"
          target="blank"
          rel="noreferrer"
        >
          <img
            className="socialLogo hover"
            src={linkedInlogoWhite}
            alt="LinkedIn Profile"
          ></img>
        </a>
      </div>
      <div className="socialContainer">
        <a
          href="https://stackoverflow.com/users/23563078/potionsela"
          target="blank"
          rel="noreferrer"
        >
          <img
            className="socialLogo normal"
            src={stackOverflowLogo}
            alt="StackOverflow Profile"
          ></img>
        </a>
        <a
          href="https://stackoverflow.com/users/23563078/potionsela"
          target="blank"
          rel="noreferrer"
        >
          <img
            className="socialLogo hover"
            src={stackOverflowWhite}
            alt="StackOverflow Profile"
          ></img>
        </a>
      </div>
    </footer>
  );
}