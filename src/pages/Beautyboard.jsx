import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Beauty.css";

import { callSelectBeautyInfoAPI } from "../apis/BeautyAPICalls";

const Beautyboard = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  //const beautyInfo = useSelector(state => state.)

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
              <div className="todo-list">일일목록</div>
              <div className="review">리뷰</div>
            </div>
            <div className="month-list">한달목록</div>
          </div>

          <div className="button-section">
            <div className="review-one">최신리뷰</div>
            <div className="beauty-info">미용실정보</div>
          </div>
        </div>

        <div className="week-list">주일목록</div>
      </div>
    </div>
  );
};

export default Beautyboard;
