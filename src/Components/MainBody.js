import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";

function MainBody() {
  const [showHome, setShowHome] = useState(true);
  const toggleHome = () => {
    setShowHome(!showHome);
  };
  return (
    <div>
      <Header toggleHome={toggleHome} showHome={showHome} />
      {showHome && <Home />}
    </div>
  );
}

export default MainBody;
