import "./ReservationList.css";

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

function ReservationList(props) {
  const dispatch = useDispatch();
  const myPetInfo = useSelector((state) => state.memberReducer.data);

  const [form, setForm] = useState({
    mypetCode: "",
    userCode: "",
    name: "",
    gender: "",
    variety: "",
    birthday: "",
    weight: "",
    neutered: "",
    animalHospital: "",
    referenceInfo: "",
  });

  useEffect(() => {
    dispatch(callMypetAPI({ mypetCode: props.mypetCode }));
  }, []);

  useEffect(() => {
    if (!myPetInfo != true) {
      setForm({
        mypetCode: myPetInfo.mypetCode,
        userCode: myPetInfo.userCode,
        name: myPetInfo.name,
        gender: myPetInfo.gender,
        variety: myPetInfo.variety,
        birthday: myPetInfo.birthday,
        weight: myPetInfo.weight,
        neutered: myPetInfo.neutered,
        animalHospital: myPetInfo.animalHospital,
        referenceInfo: myPetInfo.referenceInfo,
      });
    }
  }, [myPetInfo]);

  const age = calculateAge(form.birthday);

  return (
    <>
      <div className="reservation-box">
        <div className="user-img"></div>
        <div className="reservation-info">
          <p className="reservation-user-name">{form.name}</p>
          <div className="reservation-item">
            <p>{form.gender === "M" ? "남아" : "여아"}</p>
            {/* <p>{form.birthday}</p> */}
            <p>{age == 0 ? 1 : age}살</p>
            <p>{form.weight}</p>
          </div>
        </div>
        <div className="reservation-time">{props.time}</div>
      </div>
    </>
  );
}

export default ReservationList;