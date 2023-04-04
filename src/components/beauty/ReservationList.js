import "./ReservationList.css";

function ReservationList(props) {
  return (
    <>
      <div className="reservation-box">
        <div className="user-img"></div>
        <div className="reservation-info">
          <p className="reservation-user-name">{props.userCode}사랑이</p>
          <div className="reservation-item">
            <p>스피츠</p>
            <p>여</p>
            <p>6살</p>
            <p>15kg</p>
          </div>
        </div>
        <div className="reservation-time">{props.time}</div>
      </div>
    </>
  );
}

export default ReservationList;
