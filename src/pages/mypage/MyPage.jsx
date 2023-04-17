import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import "../../styles/MyPage.css";
import { callMyPageUserInfoAPI } from "apis/MemberAPICalls";
import MyPetProfileList from "components/mypage/MyPetProfileList";
import IconAfterLogin from "../../assets/icon/Login=true.svg";

function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myInfoList = useSelector((state) => state.memberReducer.data);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (!myInfoList === !true) {
      setForm({
        name: myInfoList.name,
        email: myInfoList.email,
        phone: myInfoList.phone,
      });
    }
  }, [myInfoList]);

  useEffect(
    () => {
      dispatch(callMyPageUserInfoAPI());
    }, // eslint-disable-next-line
    []
  );

  const onClickMyProfileHandler = () => {
    navigate("/myprofile/:userCode");
  };

  return (
    <div className="mypage-main">
      <div className="mypage-container">
        <div className="mypage-profile">
          <div className="mypage-myprofile" onClick={onClickMyProfileHandler}>
            <div className="mypage-myprofile-title">내프로필</div>
            <div className="mypage-myprofile-image">
              <img src={IconAfterLogin} style={{ width: "100%" }} />
            </div>
            <div className="mypage-myprofile-simpleinfo">
              <div className="mypage-myprofile-simpleinfo-column">
                {form.name}
              </div>
              <div className="mypage-myprofile-simpleinfo-column">
                {form.email}
              </div>
              <div className="mypage-myprofile-simpleinfo-column">
                {form.phone}
              </div>
            </div>
          </div>
          <div className="mypage-mypet">
            <div className="mypage-mypet-title-insert">
              <div className="mypage-mypet-title">마이펫프로필</div>
              <button className="mypage-mypet-insert-button">추가하기</button>
            </div>
            <div className="mypage-mypet-showlist">
              <MyPetProfileList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
