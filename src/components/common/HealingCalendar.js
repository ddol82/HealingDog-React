import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import "./Calendar.css";

function HealingCalendar({ date, setDate }) {
    // 사용할 파일에서 다음 선언 필요: const [date, setDate] = useState(new Date());
    return (
        <Calendar locale='en-US' value={date} onChange={setDate} />
    );
}

export default HealingCalendar;