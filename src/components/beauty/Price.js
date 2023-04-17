import React from "react";
import "./Price.css";

const Price = ({ beautyPrice: { size, cut, price }, form, setForm }) => {
  const handleSizeChange = (event) => {
    setForm({ ...form, size: event.target.value });
  };
  const handleCutChange = (event) => {
    setForm({ ...form, cut: event.target.value });
  };
  const handlePriceChange = (event) => {
    setForm({ ...form, price: event.target.value });
  };

  return (
    <div className="price">
      <label htmlFor="price">가격</label>
      <div className="price-input">
        <input
          type="text"
          name="price"
          id="price"
          placeholder="사이즈"
          defaultValue={size}
          onChange={handleSizeChange}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="컷트명"
          defaultValue={cut}
          onChange={handleCutChange}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="가격"
          defaultValue={price}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default Price;
