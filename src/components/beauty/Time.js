import "./Time.css";

const Time = () => {
  return (
    <div className="beauty-info-time" id="infoTime">
      <label htmlFor="time">이용시간</label>
      <div className="info-time">
        <select>
          <option value="">매일</option>
          <option value="">평일</option>
          <option value="">주말</option>
          <option value="">월</option>
          <option value="">화</option>
          <option value="">수</option>
          <option value="">목</option>
          <option value="">금</option>
          <option value="">토</option>
          <option value="">일</option>
        </select>
        <div id="inputs" className="inputs">
          <input type="time" id="time" name="time" min="00:00" max="12:00" />
          <input type="time" id="time" name="time" min="00:00" max="12:00" />
        </div>
        {/* <button>dd</button> */}
      </div>
      <div className="beauty-info-item"></div>
    </div>
  );
};

export default Time;
