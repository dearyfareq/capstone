import React from "react"
import "./header.css"
import CTA from "../header/CTA"
import ME from "../../assests/ME.png"
import Headersocials from "./headersocials"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello! I am</h5>
         <h1>Diyari Fariq</h1>
         <h5 className="text-light">Mechatronical Engineer</h5>
         <CTA/>
         <Headersocials/>
         <div className="me">
          <img src={ME} alt="me" />
         </div>
         <a href="#Contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
