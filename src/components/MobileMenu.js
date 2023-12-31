import React from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";

const MobileMenu = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={CloseBtn} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
            Come experience consultative recruiting. We answer your questions with real answers - no sugar coating.
          </p>
          <p>
            <a href="mailto:Apply75Recruit@outlook.com">Apply75Recruit.com</a> <br />
            <a target="_blank" href="https://join.skype.com/invite/vd9j1iM5tK94" >live:.cid.3ecf09b6e26552ac</a> Skype <br/>
            <a target="_blank" href="http://wa.me/17164272129">+1-716-427-2129 (WhatsApp)</a>
          </p>
          {/*<div className="side-menu__social">*/}
          {/*  <a href="#">*/}
          {/*    <i className="fab fa-facebook-square"></i>*/}
          {/*  </a>*/}
          {/*  <a href="#">*/}
          {/*    <i className="fab fa-twitter"></i>*/}
          {/*  </a>*/}
          {/*  <a href="#">*/}
          {/*    <i className="fab fa-instagram"></i>*/}
          {/*  </a>*/}
          {/*  <a href="#">*/}
          {/*    <i className="fab fa-pinterest-p"></i>*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
