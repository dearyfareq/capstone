import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {BsBehance} from "react-icons/bs"


const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
      <a href="https://www.behance.net/" target="_blank" rel="noreferrer"><BsBehance/></a>
    </div>
  );
};

export default Headersocials;
