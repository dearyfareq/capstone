import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {BsBehance} from "react-icons/bs"

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaGithubSquare/></a>
      <a href="https://www.behance.net/" target="_blank"><BsBehance/></a>
    </div>
  );
};

export default Headersocials;
