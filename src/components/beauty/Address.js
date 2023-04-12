import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div className="address">
      <div className="address-input">
        <label htmlFor="address">우편번호</label>
        <input type="text" name="address" id="address" placeholder="우편번호" />
      </div>
      <div className="address-input">
        <label htmlFor="address">주소</label>
        <input type="text" name="address" id="address" placeholder="주소" />
      </div>
      <div className="address-input">
        <label htmlFor="address">상세주소</label>
        <input type="text" name="address" id="address" placeholder="상세주소" />
      </div>
    </div>
  );
};

export default Address;
