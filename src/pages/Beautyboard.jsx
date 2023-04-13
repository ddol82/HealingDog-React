import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Beauty.css";

import { callSelectBeautyInfoAPI } from "apis/BeautyAPICalls";
import { callSelectBeautyReviewAPI } from "apis/BeautyReviewAPICalls";
import { callSelectBeautyReviewsListAPI } from "apis/BeautyReviewListAPICalls";
import ReservationList from "../components/beauty/ReservationList";
import HealingCalendar from "../components/common/HealingCalendar";
import Todo from "../components/beauty/Todo";
import BeautyReview from "components/review/BeautyReview";
import BeautyReviewOne from "components/review/BeautyReviewOne";

const Beautyboard = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beautyInfo = useSelector((state) => state.beautyReducer.data);

  const beautyReview = useSelector((state) => state.beautyReviewReducer.data);

  // useState
  const [date, setDate] = useState(new Date(Date.now() - 86400000));
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
    beautyPricesCode: "",

    content: "",
    nickname: "",
    registDate: "",
    reviewsCode: "",
    score: "",
    serviceCategoryCode: "",
    userCode: "",
  });
  const [num, setNum] = useState(0);
  useEffect(
    () => {
      dispatch(callSelectBeautyInfoAPI());
    }, // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      dispatch(callSelectBeautyReviewAPI({ num: num }));
    }, // eslint-disable-next-line
    [num]
  );
  useEffect(
    () => {
      dispatch(callSelectBeautyReviewsListAPI());
    }, // eslint-disable-next-line
    []
  );

  const beautyReviewList = useSelector(
    (state) => state.beautyReviewListReducer.data
  );

  useEffect(() => {
    if (!beautyInfo != true || !beautyReview != true) {
      setForm({
        beautyCode: beautyInfo?.beautyCode,
        providerCode: beautyInfo?.providerCode,
        name: beautyInfo?.name,
        phone: beautyInfo?.phone,
        web: beautyInfo?.web,
        address: beautyInfo?.address,
        intro: beautyInfo?.intro,
        blacklist: beautyInfo?.blacklist,
        large: beautyInfo?.large,
        medium: beautyInfo?.medium,
        small: beautyInfo?.small,
        openBeauty: beautyInfo?.openBeauty,
        spa: beautyInfo?.spa,
        massage: beautyInfo?.massage,
        selfBeauty: beautyInfo?.selfBeauty,
        hoteling: beautyInfo?.hoteling,
        playground: beautyInfo?.playground,
        freeParking: beautyInfo?.freeParking,
        wiFi: beautyInfo?.wiFi,
        beautyPricesCode: beautyInfo?.beautyPricesCode,

        content: beautyReview?.content,
        nickname: beautyReview?.nickname,
        registDate: beautyReview?.registDate,
        reviewsCode: beautyReview?.reviewsCode,
        score: beautyReview?.score,
        serviceCategoryCode: beautyReview?.serviceCategoryCode,
        userCode: beautyReview?.userCode,
      });
    }
  }, [beautyInfo, beautyReview]);

  // 캘린더에서 날짜정보 가져오기
  // const today = date.toISOString().slice(0, 10);
  const today = new Date(date.getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const onClickBeautyCodeHandler = (beautyCode) => {
    navigate(`/provider/beauty-board/beauty-info/${beautyCode}`);
  };

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
                <BeautyReview />
              </div>
            </div>
            <div className="month-list">
              <HealingCalendar date={date} setDate={setDate} />
            </div>
          </div>

          <div className="button-section">
            <div className="review-one">
              <BeautyReviewOne
                content={form.content}
                nickname={form.nickname}
                registDate={form.registDate}
                reviewsCode={form.reviewsCode}
                score={form.score}
                serviceCategoryCode={form.serviceCategoryCode}
                userCode={form.userCode}
                num={num}
                setNum={setNum}
                beautyReviewList={beautyReviewList}
              />
            </div>
            <div
              className="beauty-info"
              onClick={() => {
                onClickBeautyCodeHandler(beautyInfo?.beautyCode);
              }}
            >
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
          <ReservationList />
        </div>
      </div>
    </div>
  );
};

export default Beautyboard;
