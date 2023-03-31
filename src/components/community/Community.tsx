import React from 'react';
import { useNavigate } from "react-router-dom";

const Community = () => {
    const navigate = useNavigate();

    const onClickWriteHandler = (e: MouseEvent): void => {
        const token: any = null;
    }

    return (
        <>
            <div>
                <h1>배너 위치. 700x260</h1>
            </div>
            <div>
                <button
                    onClick={ onClickWriteHandle }
                >
                    
                </button>
            </div>
        </>
    );
};

export default Community;