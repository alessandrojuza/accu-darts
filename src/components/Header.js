import React from "react";
import "../styles/Header.scss";
import FadeIn from "react-fade-in";

const Header = () => {
  const refreshPage = () => {
    return window.location.reload();
  };
  return (
    <div className="header">
      <FadeIn transitionDuration="1000" delay="1300">
        <div className="header-sub">
          <h3 onClick={refreshPage}>NEW GAME</h3>
          <a
            href="https://github.com/alessandrojuza/accu-darts/blob/master/README.md"
            target="_blank"
          >
            ABOUT
          </a>
          <a href="mailto:mascia.alessandro89@gmail.com">CONTACT</a>
        </div>
      </FadeIn>
    </div>
  );
};

export default Header;
