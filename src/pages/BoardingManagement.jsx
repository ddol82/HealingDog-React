import BoardingInfo from "components/boarding/BoardingInfo";
import React from "react";
import "../styles/BoardingManagement.css";

const BoardingManagement = () => {

// evenet handler

  return (
    <div>
      <div className="top-section">
        <div className="title">
          <h1>위탁돌봄</h1>
        </div>
        <div className="sub-menu">서브메뉴</div>
      </div>

      <div className="all-section">

        <div className="all-section-left">
          <div className="boarding-images">이미지</div>
          <div className="boarding-info">위탁돌봄정보</div>
        </div>

        <div className="all-section-center">
        <div className="boarding-calendar">캘린더</div>
        <div className="boarding-booking-list">예약리스트</div>
        </div>

        <div className="all-section-right">
          <div className="boarding-booking-info">
            <BoardingInfo/>
          </div>
          <div className="boarding-reviews">위탁돌봄리뷰</div>
          <div className="boarding-income">위탁돌봄수익</div>
          <div className="boarding-active">현재 서비스 활성</div>
        </div>

      </div>
    </div>
  );
};

export default BoardingManagement;
