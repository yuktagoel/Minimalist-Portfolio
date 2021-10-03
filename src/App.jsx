import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonial"
import Contacts from "./components/contacts/Contacts"
import { useState } from "react";
import "./app.scss"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       {/* <Works/>
       <Testimonials/> */}
       <Contacts/>
     
     </div>
    </div>
  );
}

export default App;
