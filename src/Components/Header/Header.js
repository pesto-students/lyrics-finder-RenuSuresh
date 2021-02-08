import React, { useState } from "react";
import "./Header.css";
import Table from "../Table/Table";

function Header({ toggleHome }) {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isError, setIsError] = useState("");
  const getSearch = () => {
    if (search) {
      setIsSearch(true);
      toggleHome(false);
    } else {
      toggleHome(false);
      setIsError(true);
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="header__search">
            <input
              className="header__input__search"
              placeholder="Search by Artist/ Song"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
                setIsError(false);
              }}
              value={search}
              data-testid="header-search"
            />

            <button
              className="header__searchbtn"
              onClick={getSearch}
              data-testid="search-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
          {isError && (
            <p
              style={{
                color: "white",
                fontSize: "12px",
                marginTop: "1%",
              }}
              data-testid="error-text"
            >
              * This field is required.
            </p>
          )}
        </div>
      </div>

      {isSearch && <Table musicType={search} hideTable={hideTable} />}
    </div>
  );
}

export default Header;
