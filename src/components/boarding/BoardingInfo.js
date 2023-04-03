import { callSelectBoardingInfoAPI } from "apis/BoardingAPICalls ";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BoardingInfo() {


    // redux
    const dispatch = useDispatch();
    const getBoardingInfo = useSelector((state) => state.boardingReducer.data);

    // useState
    const [form, setForm] = useState({
        boardingServiceCode: '',
        providerCode: '',
        title: '',
        address: '',
        hashtag: '',
        introduce: '',
        daysCostS: '',
        daysCostM: '',
        daysCostL: '',
        timeCostS: '',
        timeCostM: '',
        timeCostL: '',
        state: ''
    });

    // useEffect
    useEffect(
    () => {
        console.log(`[component-rendering] : BoardingInfo`);
        if (!getBoardingInfo == true) {
            dispatch(callSelectBoardingInfoAPI())
        }
    }, // eslint-disable-next-line
    []
    );

    useEffect(
        () => {
            if (!getBoardingInfo != true) {
                setForm({
                    boardingServiceCode: getBoardingInfo.boardingServiceCode,
                    providerCode: getBoardingInfo.providerCode,
                    title: getBoardingInfo.title,
                    address: getBoardingInfo.address,
                    hashtag: getBoardingInfo.hashtag,
                    introduce: getBoardingInfo.introduce,
                    daysCostS: getBoardingInfo.daysCostS,
                    daysCostM: getBoardingInfo.daysCostM,
                    daysCostL: getBoardingInfo.daysCostL,
                    timeCostS: getBoardingInfo.timeCostS,
                    timeCostM: getBoardingInfo.timeCostM,
                    timeCostL: getBoardingInfo.timeCostL,
                    state: getBoardingInfo.state
                });
            }            
        }, // eslint-disable-next-line
        [getBoardingInfo]
        );

    // event-handler
    const costFormatter = (cost) => {
            if(!cost == true) return;
        return `${cost.toLocaleString()} 원`;
    }

    
    return (
        <>
            <br/>
            <h3>위탁돌봄정보</h3>
            <br/>
            <p className="boarding-info-title">제목 : {form.title}</p>
            <br/>
            <p className="boarding-info-address">주소 : {form.address}</p>
            <br/>
            <p className="boarding-info-hashtag">태그 : {form.hashtag}</p>
            <br/>
            <table className="boarding-info-table">
                <tbody>     
                    <tr>                
                        <th>이용금액</th>
                        <th>Time Care</th>
                        <th>Day Care</th>                                                        
                    </tr>          
                    <tr>
                        <th>대형견</th>
                        <td>{costFormatter(form.timeCostL)}</td>
                        <td>{costFormatter(form.daysCostL)}</td>
                    </tr>
                    <tr>
                        <th>중형견</th>
                        <td>{costFormatter(form.timeCostM)}</td>
                        <td>{costFormatter(form.daysCostM)}</td>
                    </tr>
                    <tr>
                        <th>소형견</th>
                        <td>{costFormatter(form.timeCostS)}</td>
                        <td>{costFormatter(form.daysCostS)}</td>
                    </tr>                        
                </tbody>
            </table>
            <br/>
            <p className="boarding-info-introduce">소개글 : {form.introduce}</p>
        </>
    )
}

export default BoardingInfo;