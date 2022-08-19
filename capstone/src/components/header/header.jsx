import React from "react"
import "./header.css"
import CTA from "../header/CTA"
import ME from ""
const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello! I am</h5>
         <h1>Diyari Fariq</h1>
         <h5 className="text-light">Mechatronical Engineer</h5>
         <CTA/>

         <div className="me">
          <img src={ME} alt="me" />
         </div>
      </div>
    </header>
  );
};

export default Header;
