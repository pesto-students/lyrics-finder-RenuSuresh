import React, { useState } from "react";
import "./Header.css";
import Table from "./Table";

function Header({ toggleHome }) {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const getSearch = () => {
    if (search) {
      setIsSearch(true);
      toggleHome(false);
    } else {
      console.log("error");
    }
  };
  const hideTable = () => {
    setIsSearch(false);
    toggleHome(true);
    setSearch("");
  };
  return (
    <div>
      <div className="header">
        <p className="header__name font-effect-shadow-multiple">
          Lyrics Finder
        </p>
        <div className="header__search">
          <input
            className="header__input__search"
            placeholder="Search by Artist/ Song"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="header__searchbtn" onClick={getSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {isSearch && <Table musicType={search} hideTable={hideTable} />}
    </div>
  );
}

export default Header;
