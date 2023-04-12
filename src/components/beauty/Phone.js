import React from "react";
import "./Phone.css";

const Phone = () => {
  return (
    <div className="phone">
      <label htmlFor="phone">연락처</label>
      <div className="phone-input">
        <input type="text" name="phone" id="phone" placeholder="연락처" />
      </div>
    </div>
  );
};

export default Phone;
