import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callSelectBeautyInfoAPI } from "apis/BeautyAPICalls";
import "../../styles/beauty/beautyInfo.css";

const BeautyInfo = () => {
  // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  const dispatch = useDispatch();
  const params = useParams();
  const beautyInfo = useSelector((state) => state.beautyReducer);
  useEffect(
    () => {
      dispatch(
        callSelectBeautyInfoAPI({
          providerCode: params.providerCode,
        })
      );
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="detail-box">
      <div className="detail-top">이미지</div>
      <div className="detail-info">
        <div className="detail-info-1">
          <div className="detail-title">{beautyInfo.name}</div>
          <div className="item-wrap">
            <div className="item-left">
              <div className="item-left-1"></div>
              <div className="item-left-2"></div>
              <div className="item-left-3"></div>
            </div>
            <div className="item-right"></div>
          </div>
        </div>
        <div className="detail-info-2"></div>
        <div className="detail-info-3"></div>
        <div className="detail-info-4"></div>
      </div>
    </div>
  );
};

export default BeautyInfo;
