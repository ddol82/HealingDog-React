import "./Todo.css";
import ReservationList from "./ReservationList";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { callSelectBeautyReservationListAPI } from "apis/BeautyAPICalls";

const Todo = (props) => {
  //redux
  const dispatch = useDispatch();
  const beautyReservationList = useSelector(
    (state) => state.beautyReservationReducer.data
  );

  // useState
  const [form, setForm] = useState({
    beautyReservationListCode: "",
    mypetCode: "",
    beautyCode: "",
    userCode: "",
    date: "",
    time: "",
    reservation: "",
  });

  //useEffect
  useEffect(() => {
    dispatch(callSelectBeautyReservationListAPI());
  }, []);

  useEffect(() => {
    if (!beautyReservationList != true) {
      setForm({
        beautyReservationListCode:
          beautyReservationList.beautyReservationListCode,
        mypetCode: beautyReservationList.mypetCode,
        beautyCode: beautyReservationList.beautyCode,
        userCode: beautyReservationList.userCode,
        date: beautyReservationList.date,
        time: beautyReservationList.time,
        reservation: beautyReservationList.reservation,
      });
    }
  }, [beautyReservationList]);

  // event-handler
  const timeFormatter = (timestamp) => {
    let date = new Date(timestamp);

    let year = date.getFullYear().toString().slice(-2); //년도 뒤에 두자리
    let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리
    let day = ("0" + date.getDate()).slice(-2); //일 2자리
    let hour = ("0" + date.getHours()).slice(-2); //시 2자리
    let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리
    let second = ("0" + date.getSeconds()).slice(-2); //초 2자리

    let result = month + "/" + day + " " + " " + hour + ":" + minute;

    return result;
  };

  const today = props.today;

  return (
    <>
      <div className="todo-title">
        <div className="todo-today">{today}</div>
        <div className="todo-List">
          {Array.isArray(beautyReservationList) &&
            beautyReservationList.map((form) => (
              <ReservationList
                key={form.beautyReservationListCode}
                userCode={form.userCode}
                mypetCode={form.mypetCode}
                date={timeFormatter(form.date)}
                time={timeFormatter(form.time)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
