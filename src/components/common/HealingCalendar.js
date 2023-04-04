import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import "./Calendar.css";

function HealingCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar locale="en-US" value={date} onChange={setDate} />
      <div className="text-gray-500 mt-4">
        {moment(date).format("YYYY-MM-DD")}
      </div>
    </div>
  );
}

export default HealingCalendar;
