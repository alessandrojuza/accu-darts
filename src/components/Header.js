import React from "react";
import "../styles/Header.scss";
import FadeIn from "react-fade-in";

const Header = () => {
  return (
    <div className="header">
      <FadeIn transitionDuration="1000" delay="1300">
        <div className="header-sub">
          <h3>NEW GAME</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT</h3>
        </div>
      </FadeIn>
    </div>
  );
};

export default Header;
