import "./topbar.scss";
import React from "react";
import image from "./../images/logo-img.png";
import { Person, Mail } from "@material-ui/icons";

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active") } >
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <img src={image} className="logo" alt="logo" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9990173641</span>
            <Mail className="icon" />
            <span>gya7329@gmail.com</span>
          </div>
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

export default Topbar;
