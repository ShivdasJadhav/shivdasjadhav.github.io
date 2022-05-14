import "./port.css";
import resume from "../../img/resume.jpeg";
import searcher from "../../img/searcher.jpeg";
import videolink from "../../img/videolinks.png";
import Resume from "./myResume.pdf";
function Port() {
  return (
    <div className="port">
      <div className="pimgs">
        <img id="searcher" src={searcher} alt="" />
        <img id="videolink" src={videolink} alt="" />
        <img id="resume" src={resume} alt="" />
      </div>
      <div className="pleft">
        <span>
          Here Are My <h3>Awesome</h3>
        </span>
        <h3>Portfolio Projects</h3>
        <p>
          These Projects I have Bilded with HTML5, CSS3, javascript and some of
          them are build with React Fundamentals.
        </p>
        <a href={Resume} download>
          <button className="btn">Resume</button>
        </a>
      </div>
    </div>
  );
}
export default Port;
