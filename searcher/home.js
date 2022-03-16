let content = document.getElementById("content");
let dev = document.getElementById("developer");
function home() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "google_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some erroe occured to load Google Search!");
    }
  };
  replace_content.send();
}
home();
function image_search() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "image_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some erroe occured to load image Search!");
    }
  };
  replace_content.send();
}
function advance_search() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "advance_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some erroe occured to load advance Search!");
    }
  };
  replace_content.send();
}
function developer() {
  dev.innerHTML = `
      <details class="info" open>
      <summary>Developer</summary>
      <summary> <div id="information"><img id="me" src="imgs/me.jpg"/></summary>
           Hallo there! I am "Shivdas Subhash Jadhav". 
           I have created this to practice my skillset of Front-End Web development. 
           I'm a Front-end Web Developer and also a person who always used to do the things until he got satisfied. <br/> While the days of covid pandamic I choosed to study Front-End Wevdevelopment from the online free resources like Youtub, google and from other webpages.
           Recently I have Completed my internship program in "Web Development" which of 2 months at <a href="https://www.ssinfotech.org/home/">SSIT. Private limited Nagpur.</a> In which I have worked on verious Hands-On projects. Under the guidance of "Mr. Santosh Selokar sir..."
           <br/>If you are interested to know more about me, then here are the links. 
           <br/><br/>
           <summary>Links: </summary>
           <ul>
           <li><summary> 
              Github Profile... <a  href="https://github.com/ShivdasJadhav">github</a>
           </summary></li>
           <li><summary>LinkedIn Profile... <a href="https://www.linkedin.com/in/shivdas-jadhav-7b8096210/">LinkedIn</a></summary></li>
         <li><summary>Codechef Profile... <a  href="https://www.codechef.com/users/kalikeya">CodeChef</a></summary></li>
          <sumamary>
          </ul>
  `;
}
function skills() {
  dev.innerHTML=`
  <details class="info" open>
  <summary>Skills:</summary><br/>
  <ul>
  <li>C/C++</li>
  <li>Core JAVA</li>
  <li>JavaScript</li>
  <li>Python</li>
  <li>Front-End Web Development</li>
  <li>ReactJS Fundamentals</li>
  <li>Git & Github</li>
  </ul>
  </details>
  `;
}
setInterval(() => {
  developer();
}, 3000);