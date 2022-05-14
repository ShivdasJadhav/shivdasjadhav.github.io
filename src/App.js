import './App.css';
import Contact from './Comps/Contact/contact';
import Intro from './Comps/Introduction/intro';
import NavBar from './Comps/Navbar/nav';
import Port from './Comps/Portfolio/port';
function App() {
  return (
   <div className="app">
   <NavBar/>
   <Intro/>
   <Port/>
   <Contact/>
   </div>
  );
}

export default App;
