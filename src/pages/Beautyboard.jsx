import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Beauty.css";

import { callSelectBeautyInfoAPI } from "apis/BeautyAPICalls";
import Reservation from "../components/beauty/Reservation";
import HealingCalendar from "../components/common/HealingCalendar";
import Todo from "../components/beauty/Todo";
import Review from "components/review/Review";

const Beautyboard = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  const beautyInfo = useSelector((state) => state.beautyReducer.data);

  // useState
  const [date, setDate] = useState(new Date());
  const [form, setForm] = useState({
    beautyCode: "",
    providerCode: "",
    name: "",
    phone: "",
    web: "",
    address: "",
    intro: "",
    blacklist: "",
    large: "",
    medium: "",
    small: "",
    openBeauty: "",
    spa: "",
    massage: "",
    selfBeauty: "",
    hoteling: "",
    playground: "",
    freeParking: "",
    wiFi: "",
  });

  useEffect(
    () => {
      dispatch(callSelectBeautyInfoAPI());
    }, // eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (!beautyInfo != true) {
      setForm({
        beautyCode: beautyInfo.beautyCode,
        providerCode: beautyInfo.providerCode,
        name: beautyInfo.name,
        phone: beautyInfo.phone,
        web: beautyInfo.web,
        address: beautyInfo.address,
        intro: beautyInfo.intro,
        blacklist: beautyInfo.blacklist,
        large: beautyInfo.large,
        medium: beautyInfo.medium,
        small: beautyInfo.small,
        openBeauty: beautyInfo.openBeauty,
        spa: beautyInfo.spa,
        massage: beautyInfo.massage,
        selfBeauty: beautyInfo.selfBeauty,
        hoteling: beautyInfo.hoteling,
        playground: beautyInfo.playground,
        freeParking: beautyInfo.freeParking,
        wiFi: beautyInfo.wiFi,
      });
    }
  }, [beautyInfo]);

  // 캘린더에서 날짜정보 가져오기
  const today = date.toISOString().slice(0, 10);

  return (
    <div>
      <div className="top-section">
        <div className="title">
          <h1>미용실명</h1>
        </div>
        <div className="sub-menu">서브메뉴</div>
      </div>

      <div className="all-section">
        <div className="left-all-section">
          <div className="calender-review">
            <div className="left-section">
              <div className="todo-list">
                <Todo today={today} />
              </div>
              <div className="beauty-review">
                <Review />
              </div>
            </div>
            <div className="month-list">
              <HealingCalendar date={date} setDate={setDate} />
            </div>
          </div>

          <div className="button-section">
            <div className="review-one">최신리뷰</div>
            <div className="beauty-info">
              <div className="beauty-info-items">
                <h1>{form.name}</h1>
                <div className="info-item">
                  <h2>{form.web}</h2>
                  <h2>시간관리</h2>
                  <h2>이용요금관리</h2>
                </div>
                <div className="info-item">
                  <h2>{form.address}</h2>
                  <h2>리뷰관리</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="week-list">
          <Reservation />
        </div>
      </div>
    </div>
  );
};

export default Beautyboard;
