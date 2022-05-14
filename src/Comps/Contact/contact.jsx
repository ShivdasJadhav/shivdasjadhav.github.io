
import chef from "../../img/chef.png";
import linkdin from "../../img/linkdin.png";
import fb from "../../img/fb.png";
import "./contact.css"
function Contact() {
  return (
    <div className="footer">
        <div className="foot">
          <a href="https://www.facebook.com/profile.php?id=100080796021068"><img id="fb" src={fb} alt="" /></a>
        <a href="https://www.codechef.com/users/kalikeya"><img id="chef" src={chef} alt="" /></a>
        <a href="https://www.linkedin.com/feed/?trk=msn-top-in"> <img id="linkdin" src={linkdin} alt="" /></a>
       
       <div className="cont">
         <h3>Profesional Media</h3>
         <span>E-mail: <p>jshivdas07@gmail.com</p></span>
         <span>contact: <p>+91 8767835325</p></span>
         <span></span>
      </div> </div>
    </div>
  );
}
export default Contact;
