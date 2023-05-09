import "./Todo.css";
import Reservation from "./Reservation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { callSelectBeautyReservationListAPI } from "apis/BeautyAPICalls";

const Todo = (props) => {
  //redux
  const dispatch = useDispatch();
  const beautyReservationList = useSelector(
    (state) => state.beautyReservationReducer.data
  );

  //useEffect
  useEffect(() => {
    dispatch(callSelectBeautyReservationListAPI());
  }, []);

  const timeFormatter = (timestamp) => {
    let date = new Date(timestamp);

    let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리
    let day = ("0" + date.getDate()).slice(-2); //일 2자리
    let hour = ("0" + date.getHours()).slice(-2); //시 2자리
    let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리

    let result = month + "/" + day + " " + " " + hour + ":" + minute;

    return result;
  };

  const dateFormatter = (timestamp) => {
    let date = new Date(timestamp);

    let year = date.getFullYear().toString().slice(0); //년도 뒤에 두자리
    let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리
    let day = ("0" + date.getDate()).slice(-2); //일 2자리

    let result = year + "-" + month + "-" + day;

    return result;
  };

  const today = props.today;

  //   const [itemIdx, setItemIdx] = useState(0);

  // useEffect(() => {
  //   setformDate({ date: beautyReservationList.date });
  // }, [formDate]);

  return (
    <>
      <div className="todo-title">
        <div className="todo-today">{today}</div>
        <div className="todo-List">
          {Array.isArray(beautyReservationList) &&
            beautyReservationList
              .filter((i) => dateFormatter(i.date) === today)
              .filter((item) => item.reservation === "O")
              .map((val) => (
                <Reservation
                  key={val.beautyReservationListCode}
                  userCode={val.userCode}
                  mypetCode={val.mypetCode}
                  date={timeFormatter(val.date)}
                  time={timeFormatter(val.time)}
                  name={val.name}
                  gender={val.gender}
                  birthday={val.birthday}
                  weight={val.weight}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
