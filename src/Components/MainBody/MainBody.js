import React, { useState } from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";

function MainBody() {
  const [showHome, setShowHome] = useState(true);
  const toggleHome = (event = true) => {
    setShowHome(event);
  };
  return (
    <div>
      <Header toggleHome={toggleHome} showHome={showHome} />
      {showHome && <Home />}
    </div>
  );
}

export default MainBody;
