import React from "react";
import "./Phone.css";

const Phone = (phone) => {
  const handlePhoneChange = (event) => {
    phone.setForm({ ...phone.form, phone: event.target.value });
  };
  return (
    <div className="phone">
      <label htmlFor="phone">연락처</label>
      <div className="phone-input">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="연락처"
          defaultValue={phone.phone}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default Phone;
