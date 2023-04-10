import "./Reservation.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { callMypetAPI } from "apis/MemberAPICalls";

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function Reservation(props) {
  const age = calculateAge(props.birthday);

  return (
    <>
      <div className="reservation-box">
        <div className="user-img"></div>
        <div className="reservation-info">
          <p className="reservation-user-name">{props.name}</p>
          <div className="reservation-item">
            <p>{props.gender === "M" ? "남아" : "여아"}</p>
            <p>{age == 0 ? 1 : age}살</p>
            <p>{props.weight}</p>
          </div>
        </div>
        <div className="reservation-time">{props.date}</div>
      </div>
    </>
  );
}

export default Reservation;
