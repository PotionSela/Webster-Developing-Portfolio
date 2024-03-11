import Project from "../Project";
import chaosEmployee from "../../assets/Projects/Chaotic-Employee-Tracked-Down.png";
import weatherApp from "../../assets/Projects/Climate-Quest-Navigator.png";
import project1 from "../../assets/Projects/DnD-Stat-Compiler.png";
import friendzoneAPI from "../../assets/Projects/Friendzone-API.png";
import project2 from "../../assets/Projects/Off-The-Beaten-Path.png";
import techBlog from "../../assets/Projects/Tech-blog.png";

export default function Portfolio() {
  return (
    <div className="body container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row mb2">
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://github.com/PotionSela/Chaotic-Employee-Tracked-Down/blob/main/README.md"
            img={chaosEmployee}
            alt="MySQL ReadMe"
            title="Chaotic Employees"
            desc="A Node.js powered project with Inquirer for user prompts, and MySQL for database interaction."
            repo="https://github.com/PotionSela/Chaotic-Employee-Tracked-Down"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://github.com/PotionSela/Climate-Quest-Navigator/blob/main/README.md"
            img={weatherApp}
            alt="Weather App ReadMe"
            title="Weather App"
            desc="Built with HTML, CSS, JavaScript, and bootstrap to bring you the weather in any city you wish!"
            repo="https://github.com/PotionSela/Climate-Quest-Navigator"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://github.com/CRNaro/dnd-stat-compiler/blob/main/README.md"
            img={project1}
            alt="DnD Stats ReadMe"
            title="DnD Stat Compiler"
            desc="Built with HTML, CSS, JavaScript, and Bulma. Also using D&D 5th Edition API, and PoetryDB API to generate classes, race and a poem to go with it."
            repo="https://github.com/CRNaro/dnd-stat-compiler"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://github.com/PotionSela/FriendzoneAPI/blob/main/README.md"
            img={friendzoneAPI}
            alt="Friendzone API ReadMe"
            title="Friend Zoning API"
            desc="FriendzoneAPI is a robust social network API project built using Express.js, MongoDB, and Mongoose ODM."
            repo="https://github.com/PotionSela/FriendzoneAPI"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://offthebeatenpath-c1b11d5328ea.herokuapp.com/"
            img={project2}
            alt="Deployed site Off The Beaten Path"
            title="Off The Beaten Path"
            desc="HTML, CSS, and JavaScript App built to help people who are stuck off the road."
            repo="https://github.com/Conartisttt/Off-Road-Unstucker"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://dev-thoughts-blog-2fbafcb43f14.herokuapp.com/"
            img={techBlog}
            alt="Deployed site of Dev thoughts blog"
            title="Tech blog"
            desc="Tech Blog is a CMS-style tech blog built using the MVC paradigm."
            repo="https://github.com/PotionSela/Dev-thoughts-blog"
          />
        </div>
      </div>
    </div>
  );
}
