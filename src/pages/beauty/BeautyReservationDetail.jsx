import "../../styles/BeautyReservationDetail.css";

const BeautyReservationDetail = () => {
  return (
    <div className="modal">
      <div className="modal-btns">
        <button className="modal-btn">애견 프로필</button>
        <button className="modal-btn">견주 프로필</button>
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
              value="사랑이"
              id="name"
              readOnly="readonly"
            />
          </div>
          <div className="modal-input">
            <label htmlFor="name">생일</label>
            <input
              className="input"
              type="text"
              value="2019-09-11"
              id="name"
              readOnly="readonly"
            />
          </div>
          <div className="modal-input">
            <label htmlFor="gander">성별</label>
            <div className="input radios checks">
              <input type="radio" id="ex_rd" name="ex_rds" />
              <label htmlFor="ex_rd">남자 </label>
              <input type="radio" id="ex_rd2" name="ex_rds" />
              <label htmlFor="ex_rd2">여자</label>
            </div>
          </div>
          <div className="modal-input">
            <label htmlFor="name">몸무게</label>
            <input
              className="input"
              type="text"
              value="사랑이"
              id="name"
              readOnly="readonly"
            />
          </div>
          <div className="modal-input">
            <label htmlFor="name">품종</label>
            <input
              className="input"
              type="text"
              value="사랑이"
              id="name"
              readOnly="readonly"
            />
          </div>
          <div className="modal-input">
            <label htmlFor="name">중성화</label>
            <input
              className="input"
              type="text"
              value="사랑이"
              id="name"
              readOnly="readonly"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyReservationDetail;
