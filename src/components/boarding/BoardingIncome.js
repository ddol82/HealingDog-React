import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    callSelectBoardingIncomeAPI
 } from "apis/BoardingAPICalls ";
 import "./BoardingIncome.css";

function BoardingIncome() {
    // let currentDate = new Date();
    //redux
    const dispatch = useDispatch();
    const getBoardingIncome= useSelector((state) => state.boardingIncomeReducer.data);

    // useState
    const [dateForm, setDateForm] = useState({
        selectedDate : new Date()
    });

    const [incomeForm, setIncomeForm] = useState({
        monthIncome : "0",
        yearIncome: "0"
    });
    
    
    //useEffect
    useEffect(
        () => {
            console.log(`[component-rendering] : BoardingReview`);
            dispatch(callSelectBoardingIncomeAPI(timeFormatter(dateForm.selectedDate)))
        }, // eslint-disable-next-line
        [dateForm]
    );

    useEffect(
        () => {
            if (!getBoardingIncome != true) {
                setIncomeForm({
                    monthIncome : getBoardingIncome.monthIncome,
                    yearIncome: getBoardingIncome.yearIncome
                })
            } 
        }, // eslint-disable-next-line
        [getBoardingIncome]
    );

    //event handler
    
    const onclickHandlerMinusYear = () => {
        console.log("onclickHandlerMinusYear");
        let date = dateForm.selectedDate;
        date.setFullYear(date.getFullYear() - 1);
        setDateForm({...dateForm, selectedDate : date});
    }

    const onclickHandlerPlusYear = () => {
        console.log("onclickHandlerMinusYear");
        let date = dateForm.selectedDate;
        date.setFullYear(date.getFullYear() + 1);
        setDateForm({...dateForm, selectedDate : date});
    }

    const onclickHandlerMinusMonth = () => {
        console.log("onclickHandlerMinusMonth");
        let date = dateForm.selectedDate;
        date.setMonth(date.getMonth() - 1);
        setDateForm({...dateForm, selectedDate : date});
    }

    const onclickHandlerPlusMonth = () => {
        console.log("onclickHandlerPlusMonth");
        let date = dateForm.selectedDate;
        date.setMonth(date.getMonth() + 1);
        setDateForm({...dateForm, selectedDate : date});
    }

    const timeFormatter = (date) => {

        let year = date.getFullYear().toString(); //년도 4자리
        let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리
        let day = ("0" + date.getDate()).slice(-2); //일 2자리
        let hour = ("0" + date.getHours()).slice(-2); //시 2자리
        let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리
        let second = ("0" + date.getSeconds()).slice(-2); //초 2자리

        let result = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        console.log(result);
        return result;
    }

    const costFormatter = (cost) => {
        if(!cost == true) return;
        cost = parseInt(cost);
    return `${cost.toLocaleString()} 원`;
}
   

    return (
        <>
            <div className="income-yearly">
                <button className="boarding-review-btn" onClick={onclickHandlerMinusYear}>
                    {"<"}
                </button>
                <span className="date-span">
                    {dateForm.selectedDate.getFullYear() + "년 수익"}
                </span>
                <button className="boarding-review-btn" onClick={onclickHandlerPlusYear}>
                    {">"}
                </button>
                <p>{costFormatter(incomeForm.yearIncome)}</p>
            </div>
            <div className="income-monthly">
                <button className="boarding-review-btn" onClick={onclickHandlerMinusMonth}>
                    {"<"}
                </button>
                <span className="date-span">
                    {(dateForm.selectedDate.getMonth()+1) + "월 수익"}
                </span>
                <button className="boarding-review-btn" onClick={onclickHandlerPlusMonth}>
                    {">"}
                </button>
                <p>{costFormatter(incomeForm.monthIncome)}</p>
            </div>            
        </>
    )
}

export default BoardingIncome;