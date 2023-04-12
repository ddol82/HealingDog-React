import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="career">
      <label htmlFor="career">경력/자격</label>
      <div className="career-input">
        <input type="text" name="career" id="career" placeholder="경력/자격" />
        <input type="text" name="career" id="career" placeholder="기간/급" />
      </div>
    </div>
  );
};

export default Career;
