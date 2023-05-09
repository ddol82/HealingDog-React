import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { callMyProfileUserDetailInfoAPI } from "apis/MemberAPICalls";
import { callMyProfileUserDetailUpdateInfoAPI } from "apis/MemberAPICalls";
import { callMyProfileUserDetailDeleteInfoAPI } from "apis/MemberAPICalls";
import { callLogoutAPI } from "apis/MemberAPICalls";
import "../../styles/MyProfile.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myInfoDetail = useSelector((state) => state.memberReducer);
  const myInfoDetailList = myInfoDetail.data;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nickname: "",
    address: "",
    simpleIntro: "",
    selfIntro: "",
  });

  useEffect(() => {
    if (!myInfoDetailList === !true) {
      setForm({
        name: myInfoDetailList.name,
        email: myInfoDetailList.email,
        phone: myInfoDetailList.phone,
        nickname: myInfoDetailList.nickname,
        address: myInfoDetailList.address,
        simpleIntro: myInfoDetailList.simpleIntro,
        selfIntro: myInfoDetailList.selfIntro,
      });
    }
  }, [myInfoDetailList]);

  useEffect(
    () => {
      dispatch(callMyProfileUserDetailInfoAPI());
    }, // eslint-disable-next-line
    []
  );

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const onClickDeleteHandler = () => {
    dispatch(
      callMyProfileUserDetailDeleteInfoAPI({
        userCode: myInfoDetailList.userCode,
      })
    );
    dispatch(callLogoutAPI());
    alert("사용자 탈퇴 성공");
    navigate("/", { replace: true });
    window.location.reload();
  };

  const onClickBackHandler = () => {
    // 돌아가기 클릭시 메인 페이지로 이동
    navigate(-1);
  };

  const onClickUpdateHandler = () => {
    dispatch(
      callMyProfileUserDetailUpdateInfoAPI({
        form: form,
      })
    );
  };

  return (
    <div className="myprofile-main">
      <div className="myprofile-container">
        <div className="myprofile-detail">
          <div className="myprofile-detail-banner"></div>
          <div className="myprofile-detail-profileintro">
            <div className="myprofile-detail-profileintro-profile">
              <img
                src={IconAfterLogin}
                style={{ width: "95%", height: "95%" }}
              />
            </div>
            <div className="myprofile-detail-profileintro-intro">
              <p> {myInfoDetailList?.name} 안녕하세요</p>
            </div>
          </div>
          <div className="myprofile-detail-info">
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">이름</label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="name"
                autoComplete="off"
                value={form.name || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">
                이메일
              </label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="email"
                autoComplete="off"
                value={form.email || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">
                연락처
              </label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="phone"
                autoComplete="off"
                value={form.phone || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">
                닉네임
              </label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="nickname"
                autoComplete="off"
                value={form.nickname || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">주소</label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="address"
                autoComplete="off"
                value={form.address || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column">
              <label className="myprofile-detail-info-column-label">
                간단소개
              </label>
              <input
                className="myprofile-detail-info-column-input"
                type="text"
                name="simpleIntro"
                autoComplete="off"
                value={form.simpleIntro || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div className="myprofile-detail-info-column-self">
              <label className="myprofile-detail-info-column-label-self">
                자기소개
              </label>
              <textarea
                rows="30"
                cols="10"
                className="myprofile-detail-info-column-input-self"
                name="selfIntro"
                autoComplete="off"
                value={form.selfIntro || ""}
                onChange={onChangeHandler}
              ></textarea>
            </div>
          </div>
          <button
            className="myprofile-detail-delete"
            onClick={onClickDeleteHandler}
          >
            탈퇴하기
          </button>
          <button
            className="myprofile-detail-back"
            onClick={onClickBackHandler}
          >
            뒤로가기
          </button>
          <button
            className="myprofile-detail-finsh"
            onClick={onClickUpdateHandler}
          >
            완료
          </button>
        </div>
        <div className="myprofile-footer"></div>
      </div>
    </div>
  );
}

export default MyProfile;
