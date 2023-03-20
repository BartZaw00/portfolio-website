import React from "react";

import "./mainContent.css";
import MainLeft from "./mainLeft/MainLeft";
import MainRight from "./mainRight/MainRight";

const MainContent = () => {
  return (
    <div className="c-main-content">
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default MainContent;
