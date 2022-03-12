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
  dev.innerHTML =`  <div id="foot">
       <div id="info">
            <img id="me" src="imgs/me.jpg"/>
           
            <div id="information">
                Hallo their! I am Shivdas Subhash Jadhav. 
                A 3<sup>rd</sup> year Deploma Student. 
                I'm a Front-end Web Developer who has Learned HTML,CSS,JavaScript by his own from online resources ex. Youtub, google and from other webpages while the day's of covid-pandamic. 
                Recently I have Completed my internship program of 2 months with <a href="https://www.ssinfotech.org/home/">SSIT. Private limited Nagpur.</a>
                <br/>If you are interested to know more about me, then here are the links. 
                <details>
                <summary>Links</summary>
                <summary> 
                  My Github Profile... <a href="https://github.com/ShivdasJadhav">gihub</a>
                </summary>
                <summary>My LinkedIn Profile... <a href="https://www.linkedin.com/in/shivdas-jadhav-7b8096210/">LinkedIn</a></summary>
              <summary>My Codechef Profile... <a href="https://www.codechef.com/users/kalikeya">CodeChef</a></summary>
               
                </details>
        </div></div>`;
}
developer();
