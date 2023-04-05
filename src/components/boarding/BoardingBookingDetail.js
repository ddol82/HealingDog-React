import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BoardingBookingDetail() {


    // redux
    const dispatch = useDispatch();
    const getBoardingBookingDetail= useSelector((state) => state.boardingBookingDetailReducer.bookingForm);
    const getMypet= useSelector((state) => state.boardingBookingMypetReducer.data);

    // useState
    const [userForm, setUserForm] = useState({
        name:"",
        email:"",
        phone:""
    });

    const [mypetForm, setMypetForm] = useState({
        mypetCode : "",
        userCode : "",
        name : "",
        gender : "",
        variety : "",
        birthday : "",
        weight : "",
        neutered : "",
        animalHospital : "",
        referenceInfo : ""
    });

    const [boardingBookingForm, setBoardingBookingForm] = useState({
        boardingBookingCode : "",
        boardingServiceCode : "",
        userCode : "",
        mypetCode : "",
        bookingDate : "",
        boardingCategory : "",
        checkIn : "",
        checkOut : "",
        payment : ""
    });

    
    // useEffect
    useEffect(
    () => {
        console.log(`[component-rendering] : BoardingBookingDetail`);
        if (!getBoardingBookingDetail != true) {
            setBoardingBookingForm({
                boardingBookingCode : getBoardingBookingDetail.boardingBookingCode,
                boardingServiceCode : getBoardingBookingDetail.boardingServiceCode,
                userCode : getBoardingBookingDetail.userCode,
                mypetCode : getBoardingBookingDetail.mypetCode,
                bookingDate : getBoardingBookingDetail.bookingDate,
                boardingCategory : getBoardingBookingDetail.boardingCategory,
                checkIn : getBoardingBookingDetail.checkIn,
                checkOut : getBoardingBookingDetail.checkOut,
                payment : getBoardingBookingDetail.payment
            });
        }
        if (!getMypet != true) {
            setMypetForm({
                mypetCode : getMypet.mypet.mypetCode,
                userCode : getMypet.mypet.userCode,
                name : getMypet.mypet.name,
                gender : getMypet.mypet.gender,
                variety : getMypet.mypet.variety,
                birthday : getMypet.mypet.birthday,
                weight : getMypet.mypet.weight,
                neutered : getMypet.mypet.neutered,
                animalHospital : getMypet.mypet.animalHospital,
                referenceInfo : getMypet.mypet.referenceInfo
            });
            setUserForm({
                name:getMypet.user.name,
                email:getMypet.user.name,
                phone:getMypet.user.phone
            })
        }
    }, // eslint-disable-next-line
    [getBoardingBookingDetail,getMypet]
    );

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
    
    return (
        <>
            <table>
                <tbody>
                    <tr className="boarding-detail-checkIn">
                        <th>체크인</th>
                        <td>{timeFormatter(boardingBookingForm.checkIn)}</td>
                    </tr>
                    <tr className="boarding-detail-checkOut">
                        <th>체크아웃</th>
                        <td>{timeFormatter(boardingBookingForm.checkOut)}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span className="boarding-detail-image">IMAGE</span>
                <span className="boarding-detail-name">{mypetForm.name}</span>    
            </div>
            <table>                
                <tbody>
                    <tr className="boarding-detail-gender">
                        <th>성별</th>
                        <td>{mypetForm.gender}</td>
                    </tr>
                    <tr className="boarding-detail-variety">
                        <th>종류</th>
                        <td>{mypetForm.variety}</td>
                    </tr>
                    <tr className="boarding-detail-birthday">
                        <th>생일</th>
                        <td>{mypetForm.birthday}</td>
                    </tr>
                    <tr className="boarding-detail-weight">
                        <th>무게</th>
                        <td>{mypetForm.weight}</td>
                    </tr>
                    <tr className="boarding-detail-neutered">
                        <th>중성화</th>
                        <td>{mypetForm.neutered}</td>
                    </tr>
                </tbody>
            </table>
            <p  className="boarding-detail-animalHospital">{mypetForm.animalHospital}</p>
            <p  className="boarding-detail-referenceInfo">{mypetForm.name} 소개 : {mypetForm.referenceInfo}</p>
            <br/>
            <p>견주정보</p>
            <p>이름 : {userForm.name}</p>
            <p>모바일 : {userForm.phone}</p>
            <p>이메일 : {userForm.email}</p>
            
        </>
    )
}

export default BoardingBookingDetail;