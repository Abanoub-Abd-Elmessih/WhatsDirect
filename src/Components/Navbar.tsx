import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <h3 className="navbar-brand mt-2">
  WhatsDirect
      </h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-2 align-items-center justify-content-center flex-row">
        <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/abanoub-abd-elmessih/"
          target="_blank"
          className="icon"
        >
          <FaLinkedinIn />
        </a>
        </li>
        <li className="nav-item">
        <a
          href="https://github.com/Abanoub-Abd-Elmessih"
          target="_blank"
          className="icon"
        >
          <LuGithub />
        </a>
        </li>
        <li className="nav-item">
        <a
          href="mailto:Abanoubabdelmessih110@gmail.com"
          target="_blank"
          className="icon"
        >
          <BiLogoGmail />
        </a>
        </li>
        <li className="nav-item">
        <a href="tel:+20 155 956 6765" target="_blank" className="icon">
          <MdOutlinePhone />
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
