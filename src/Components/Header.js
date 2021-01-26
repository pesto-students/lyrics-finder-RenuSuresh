import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <p className="header__name font-effect-shadow-multiple">Lyrics Finder</p>
      <div className="header__search">
        <input
          className="header__input__search"
          placeholder="Search by Artist/ Song"
        />
        <button className="header__searchbtn">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
