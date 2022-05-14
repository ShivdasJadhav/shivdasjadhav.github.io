import "./intro.css";
import me from "../../img/my2.png";
import bg from "../../img/homebg.png";
import css from "../../img/css.png";
import reactjs from "../../img/react.png";
import js from "../../img/js.png";
import java from "../../img/java.png";
import html from "../../img/html.png";
import git from "../../img/git.png";
function Intro() {
  return (
    <div className="intro">
      <div className="ileft">
        <span>Hi Their! I Am</span>
        <name>Shivdas S. Jadhav</name>
        <p>
          I am a Front-End Web Developer have done an Internship Training
          program of 2 months with <a href="https://www.ssinfotech.org/home/career.php">SSIT Private Ltd. Nagpur</a>. Now
          in Future I want to complete another Internship In Reactjs one of the
          best Javascript Libraries.
        </p>
      </div>
      <div className="iright">
        <img id="bg" src={bg} alt="" />
        <img id="me" src={me} alt="" />
        <div className="imgs">
          <img id="css" src={css} alt="" />
          <img id="reactjs" src={reactjs} alt="" />
          <img id="js" src={js} alt="" />
          <img id="html" src={html} alt="" />
          <img id="java" src={java} alt="" />
          <img id="git"src={git} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Intro;
