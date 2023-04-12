import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="price">
      <label htmlFor="price">가격</label>
      <div className="price-input">
        <input type="text" name="price" id="price" placeholder="사이즈" />
        <input type="text" name="price" id="price" placeholder="컷트명" />
        <input type="text" name="price" id="price" placeholder="가격" />
      </div>
    </div>
  );
};

export default Price;
