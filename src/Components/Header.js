import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <p className="header__name">Lyrics Finder</p>
      <div className="header__search">
        <input className="header__input__search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
