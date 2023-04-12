import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callSelectBeautyInfoAPI } from "apis/BeautyAPICalls";
import beautyImg from "../../assets/beauty_img1.png";
import Time from "../../components/beauty/Time";
import Career from "../../components/beauty/Career";
import Price from "../../components/beauty/Price";
import HomePage from "../../components/beauty/HomePage";
import Address from "components/beauty/Address";
import Phone from "components/beauty/Phone";

import "../../styles/BeautyInfo.css";

const BeautyInfo = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  const beautyInfo = useSelector((state) => state.beautyReducer.data);

  useEffect(
    () => {
      dispatch(callSelectBeautyInfoAPI());
    }, // eslint-disable-next-line
    []
  );

  //   const onclickHandlerMinus = () => {
  //     if (props.num > 0) {
  //       props.setNum(props.num - 1);
  //     }
  //   };
  //   const onclickHandlerPlus = () => {
  //     if (props.num >= 0 && props.num < beautyReviewListLength) {
  //       props.setNum(props.num + 1);
  //     }
  //   };
  return (
    beautyInfo && (
      <div className="modal">
        <div className="info-top">
          <button className="beauty-review-btn review-btn-l">{"<"}</button>
          <div className="info-img">
            <img src={beautyImg} alt="beautyImg" />
          </div>
          <button className="beauty-review-btn review-btn-r">{">"}</button>
        </div>
        <h1>{beautyInfo.name}</h1>
        <div className="beauty-info-wrap">
          <Time />
          <Career />
          <Price />
          <Phone />
          <HomePage />
          <Address />
        </div>
      </div>
    )
  );
};

export default BeautyInfo;
