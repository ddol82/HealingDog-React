import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="web">
      <label htmlFor="web">홈페이지</label>
      <div className="web-input">
        <input type="text" name="web" id="web" placeholder="주소" />
      </div>
    </div>
  );
};

export default HomePage;
