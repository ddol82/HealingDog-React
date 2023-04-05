import { 
    callSelectBoardingBookingAPI,
    callSelectBoardingBookingMypetAPI
 } from "apis/BoardingAPICalls ";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    GET_BOARDING_BOOKING_DETAIL
  } from "../../modules/BoardingBookingDetailModule";

function BoardingBookingList() {


    // redux
    const dispatch = useDispatch();
    const getBoardingBookingList= useSelector((state) => state.boardingBookingReducer.data);

    // useEffect
    useEffect(
    () => {
        console.log(`[component-rendering] : BoardingBookingList`);
        if (!getBoardingBookingList == true) {
            dispatch(callSelectBoardingBookingAPI())
        }
    }, // eslint-disable-next-line
    []
    );

    // event-handler
    const timeFormatter = (timestamp) => {
        let date = new Date(timestamp);

        let year = date.getFullYear().toString().slice(-2); //년도 뒤에 두자리
        let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리
        let day = ("0" + date.getDate()).slice(-2); //일 2자리
        let hour = ("0" + date.getHours()).slice(-2); //시 2자리
        let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리
        let second = ("0" + date.getSeconds()).slice(-2); //초 2자리

        let result = year + "-" + month + "-" + day + " ( " + hour + ":" + minute + " )";

        return result;
    }

    const bookingOnclickHandler = (e) => {
        let data = {bookingForm : {
            boardingBookingCode : e.target.querySelector("input[name=boardingBookingCode]").value,
            boardingServiceCode : e.target.querySelector("input[name=boardingServiceCode]").value,
            userCode : e.target.querySelector("input[name=userCode]").value,
            mypetCode : e.target.querySelector("input[name=mypetCode]").value,
            bookingDate : e.target.querySelector("input[name=bookingDate]").value,
            boardingCategory : e.target.querySelector("input[name=boardingCategory]").value,
            checkIn : e.target.querySelector("input[name=checkIn]").value,
            checkOut : e.target.querySelector("input[name=checkOut]").value,
            payment : e.target.querySelector("input[name=payment]").value
        }}
        dispatch({ type: GET_BOARDING_BOOKING_DETAIL, payload: data })
        dispatch(callSelectBoardingBookingMypetAPI(data.bookingForm))
    }

    
    return (
        <>
            <h3>예약 리스트</h3>
            <br/>
            {Array.isArray(getBoardingBookingList) && getBoardingBookingList.map((list) => ( 
                <div className="boarding-booking" key={list.boardingBookingCode} onClick={bookingOnclickHandler}>

                    {list.boardingCategory == 'T'? ' 타임케어 ':' 데이케어 '}

                    {` ${timeFormatter(list.checkIn)} ~ ${timeFormatter(list.checkOut)}`}

                    <input name="boardingBookingCode" defaultValue={list.boardingBookingCode} hidden/>
                    <input name="boardingServiceCode" defaultValue={list.boardingServiceCode} hidden/>
                    <input name="userCode" defaultValue={list.userCode} hidden/>
                    <input name="mypetCode" defaultValue={list.mypetCode} hidden/>
                    <input name="bookingDate" defaultValue={list.bookingDate} hidden/>
                    <input name="boardingCategory" defaultValue={list.boardingCategory} hidden/>
                    <input name="checkIn" defaultValue={list.checkIn} hidden/>
                    <input name="checkOut" defaultValue={list.checkOut} hidden/>
                    <input name="payment" defaultValue={list.payment} hidden/>
                </div>
          ))}
        </>
    )
}

export default BoardingBookingList;