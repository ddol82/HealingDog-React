import "../../styles/BeautyReservationDetail.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { callMypetAPI } from "apis/MemberAPICalls";
import {
  callUpdateBeautyReservationAPI,
  callDeleteBeautyReservationAPI,
} from "apis/BeautyAPICalls";

const BeautyReservationDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const myPetInfo = useSelector((state) => state.memberReducer.data);

  useEffect(() => {
    dispatch(callMypetAPI({ beautyReservationListCode: id }));
  }, []);

  useEffect(() => {
    setGender(myPetInfo?.gender == "M");
    setNeutered(myPetInfo?.neutered == "O");
  }, [myPetInfo]);

  const [gender, setGender] = useState(true);
  const [neutered, setNeutered] = useState(true);

  const onClickReservationHandler = () => {
    const formData = new FormData();

    formData.append(
      "beautyReservationListCode",
      myPetInfo.beautyReservationListCode
    );
    formData.append("reservation", "O");

    dispatch(
      callUpdateBeautyReservationAPI({
        form: formData,
      })
    );
    navigate(-1);
    alert("신청수락했습니다.");
  };

  const onClickReservationRemoveHandler = () => {
    dispatch(
      callDeleteBeautyReservationAPI({
        mypetCode: myPetInfo.mypetCode,
      })
    );
    navigate(-1);
    alert("거절했습니다.");
  };

  const [isOn, setIsOn] = useState(true);

  // onclickHandler
  const onclickHandler = (value) => {
    setIsOn(value);
  };

  return (
    myPetInfo && (
      <div className="modal">
        <div className="modal-btns">
          <button
            className={isOn ? "modal-btn-active" : "modal-btn"}
            onClick={() => onclickHandler(true)}
          >
            애견 프로필
          </button>
          <button
            className={!isOn ? "modal-btn-active" : "modal-btn"}
            onClick={() => onclickHandler(false)}
          >
            견주 프로필
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-face">
            <h2>
              홍길동님
              <br />
              프로필입니다.
            </h2>
            <div className="modal-img"></div>
          </div>
          <div className="modal-info">
            <div className="modal-input">
              <label htmlFor="name">이름</label>
              <input
                className="input"
                type="text"
                value={myPetInfo.name}
                id="name"
                readOnly="readonly"
              />
            </div>
            <div className="modal-input">
              <label htmlFor="name">생일</label>
              <input
                className="input"
                type="text"
                value={myPetInfo.birthday}
                id="name"
                readOnly="readonly"
              />
            </div>
            <div className="modal-input">
              <label htmlFor="gender">성별</label>
              <div className="input radios checks">
                <input
                  type="radio"
                  id="ex_rd"
                  name="gender"
                  checked={gender}
                  value="M"
                  readOnly="readonly"
                />
                <label htmlFor="ex_rd">남자 </label>
                <input
                  type="radio"
                  id="ex_rd2"
                  name="gender"
                  checked={!gender}
                  value="F"
                  readOnly="readonly"
                />
                <label htmlFor="ex_rd2">여자</label>
              </div>
            </div>
            <div className="modal-input">
              <label htmlFor="name">몸무게</label>
              <input
                className="input"
                type="text"
                value={myPetInfo.weight}
                id="name"
                readOnly="readonly"
              />
            </div>
            <div className="modal-input">
              <label htmlFor="name">품종</label>
              <input
                className="input"
                type="text"
                value={myPetInfo.variety}
                id="name"
                readOnly="readonly"
              />
            </div>
            <div className="modal-input">
              <label htmlFor="neutered">중성화</label>
              <div className="input radios checks">
                <input
                  type="radio"
                  id="neutered1"
                  name="neutered"
                  checked={neutered}
                  value="O"
                  readOnly="readonly"
                />
                <label htmlFor="neutered1">했어요 </label>
                <input
                  type="radio"
                  id="neutered2"
                  name="neutered"
                  checked={!neutered}
                  value="X"
                  readOnly="readonly"
                />
                <label htmlFor="neutered2">안했어요</label>
              </div>
            </div>
          </div>
          <div className="modal-intro">
            <div>
              <span>자기소개</span>
              <span>260자이내</span>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              readOnly="readonly"
              placeholder="자기소개를 입력해주세요."
              value={myPetInfo.referenceInfo}
            ></textarea>
          </div>
          <div className="reservation-info-wrap">
            <div className="reservation-info1">
              <span>예약정보</span>
              <div>
                <label htmlFor="date">예약 날짜</label>
                <input
                  type="text"
                  id="date"
                  readOnly="readonly"
                  value="2023-03-15"
                />
              </div>
              <div>
                <label htmlFor="time">예약 시간</label>
                <input
                  type="text"
                  id="time"
                  readOnly="readonly"
                  value="13:00"
                />
              </div>
              <div>
                <label htmlFor="menu">예약 메뉴</label>
                <input
                  type="text"
                  id="menu"
                  readOnly="readonly"
                  value={
                    myPetInfo.size + " " + myPetInfo.cut + " " + myPetInfo.price
                  }
                />
              </div>
            </div>
            <div className="reservation-info2">
              <button
                onClick={onClickReservationRemoveHandler}
                style={{
                  display: myPetInfo.reservation === "O" ? "none" : "block",
                }}
              >
                거절하기
              </button>
              <button
                onClick={onClickReservationHandler}
                style={{
                  display: myPetInfo.reservation === "O" ? "none" : "block",
                }}
              >
                수락하기
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BeautyReservationDetail;
