import "../pages/about.css";
import Profile from "../../assets/portrait.png";

export default function About() {
  return (
    <>
      <div className="body container">
        <h1 className="text-center title">About Me</h1>
        <div className="main d-flex flex-row justify-content-between align-items-center">
          <div className="imageContainer">
            <img className="portrait" src={Profile} alt="portrait" />
          </div>
          <div className="AboutContainer">
            <p className="about">
              Hello and Welcome! This is my way of showcasing my talent and
              skills as a full-stack web developer. Where I have experience
              creating a visually appealing HTML website, with CSS style skills,
              then adding functionality to those applications using JavaScript
              for front-end skills. For my backend skills I have taken the time
              to build databases in MySQL, and MongoDB, then adding to that I
              have worked using Node.js and Express.js.
              <br />
              <br />
              I have a background in various customer service industries, even
              getting so good to become a supervisor overseeing a small team,
              and schooling that helped develop my vision from an artistic
              perspective. With these skills in my background, I can confidently
              say that I have the abilities to direct a small team, or work well
              with others as we collaborate. I have also the background that can
              support the soft skills like communication, quick decision making
              for time sensitive matters, and having adaptability in new roles.
              <br />
              <br />I am living in the New England area, and have had the
              pleasure of spending time in the West Coast, I enjoy each region
              for their unique cultures that has definitely influenced my
              perspective on life and how people can work together. I am excited
              to get to learn more about coding through new challenges that any
              full-stack or front-end development job can provide to me. I am
              the type of person that works hard to learn a new skill, so being
              able to constantly learn and grow through trial and error is ideal
              for me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
  }