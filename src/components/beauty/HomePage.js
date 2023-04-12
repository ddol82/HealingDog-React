import React from "react";
import "./HomePage.css";

const HomePage = (web) => {
  const handleWebChange = (event) => {
    web.setForm({ ...web.form, web: event.target.value });
  };
  return (
    <div className="web">
      <label htmlFor="web">홈페이지</label>
      <div className="web-input">
        <input
          type="text"
          name="web"
          id="web"
          placeholder="주소"
          defaultValue={web.web}
          onChange={handleWebChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
