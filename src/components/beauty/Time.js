import "./Time.css";

const Time = (time) => {
  const handleDayChange = (event) => {
    time.setForm({ ...time.form, day: event.target.value });
  };
  const handleStartTimeChange = (event) => {
    time.setForm({ ...time.form, startTime: event.target.value });
  };
  const handleEndTimeChange = (event) => {
    time.setForm({ ...time.form, endTime: event.target.value });
  };
  return (
    <div className="beauty-info-time" id="infoTime">
      <label htmlFor="time">이용시간</label>
      <div className="info-time">
        <select defaultValue={time.day} onChange={handleDayChange}>
          <option defaultValue="매일">매일</option>
          <option defaultValue="평일">평일</option>
          <option defaultValue="주말">주말</option>
          <option defaultValue="월">월</option>
          <option defaultValue="화">화</option>
          <option defaultValue="수">수</option>
          <option defaultValue="목">목</option>
          <option defaultValue="금">금</option>
          <option defaultValue="토">토</option>
          <option defaultValue="일">일</option>
        </select>
        <div id="inputs" className="inputs">
          <input
            type="time"
            id="time"
            name="time"
            min="00:00"
            max="12:00"
            defaultValue={time.startTime}
            onChange={handleStartTimeChange}
          />
          <input
            type="time"
            id="time"
            name="time"
            min="00:00"
            max="12:00"
            defaultValue={time.endTime}
            onChange={handleEndTimeChange}
          />
        </div>
        {/* <button>dd</button> */}
      </div>
      <div className="beauty-info-item"></div>
    </div>
  );
};

export default Time;
