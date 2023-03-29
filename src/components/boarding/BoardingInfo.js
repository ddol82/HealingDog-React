import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BoardingInfo() {


    // redux
    const dispatch = useDispatch();
    const getReviews = useSelector((state) => state.boardingManagementReducer.data);

    // useState
    const [form, setForm] = useState({
        itemNo: 0,
    });

    // useEffect
    useEffect(
    () => {
        console.log(`[component-rendering] : BoardingInfo`);
    }, // eslint-disable-next-line
    []
    );

    // event-handler

    
    return (
        <>
            
        </>
    )
}

export default BoardingInfo;