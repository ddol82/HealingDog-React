import React from 'react';
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();

    const onClickWriteHandler = (e: MouseEvent): any => {
        const token: any = null;
    }

    return (
        <>
            <div>
                <h1>배너 위치. 700x260</h1>
            </div>
            <div>
            </div>
        </>
    );
};

export default Community;