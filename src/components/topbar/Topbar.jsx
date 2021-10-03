// import "./topbar.scss"
// import {Person,Mail} from "@material-ui/icons"

// export default function Topbar({menuOpen,setMenuOpen}) {
//     return (
//         <div className={"topbar " + (menuOpen && "active")} >
//             <div className="wrapper">
//                 <div className="left">
//                     <a href="#intro" className="logo" >Logo</a>
//                     <div className="itemContainer">
//                     <Person className="icons"/>
//                     <span>345678945</span>
//                     </div>
//                     <div className="itemContainer">
//                     <Mail className="icons"/>
//                     <span>qwerty</span>
//                     </div>
//                 </div>
//                 <div className="right">
//                 <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
//                     <span className="line1"></span>
//                     <span className="line2"></span>
//                     <span className="line3"></span>
//                 </div>
//             </div>
//         </div>
//         </div>

//     );
// }
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Yukta.
          </a>
          {/* <div className="itemContainer">
            <Person className="icon" />
            <span></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span></span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
