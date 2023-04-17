import React from "react";
import "./Career.css";

const Career = (career) => {
  const handleCertificateNameChange = (event) => {
    career.setForm({ ...career.form, certificateName: event.target.value });
  };

  const handleCertificateTextChange = (event) => {
    career.setForm({ ...career.form, certificateText: event.target.value });
  };
  return (
    <div className="career">
      <label htmlFor="career">경력/자격</label>
      <div className="career-input">
        <input
          type="text"
          name="career"
          id="career"
          placeholder="경력/자격"
          defaultValue={career.certificateName}
          onChange={handleCertificateNameChange}
        />
        <input
          type="text"
          name="career"
          id="career"
          placeholder="기간/급"
          defaultValue={career.certificateText}
          onChange={handleCertificateTextChange}
        />
      </div>
    </div>
  );
};

export default Career;
