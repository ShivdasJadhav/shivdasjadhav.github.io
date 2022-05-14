import "./nav.css";
function NavBar(params) {
    return(<div className="nav">
    <span>@ShivdasJadhav</span>
    <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Clients</li>
    </ul>
    <button className="btn">Contact Me</button>
    <hr />
    </div>);
}
export default NavBar;