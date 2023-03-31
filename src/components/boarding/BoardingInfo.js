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
        dispatch(callSelectBoardingInfoAPI(1))
    }, // eslint-disable-next-line
    []
    );

    // event-handler

    
    return (
        <>
            <p>{form.boardingServiceCode}</p>
        </>
    )
}

export default BoardingInfo;