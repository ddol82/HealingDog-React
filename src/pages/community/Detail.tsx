import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Banner from 'components/community/Banner';
import BoardDetail from 'components/community/BoardDetail';
import CommentDetail from 'components/community/CommentDetail';
import WriteDetail from 'components/community/WriteDetail';

const Detail = () => {
    const params = useParams();

//useState
    const [boardCode, setBoardCode] = useState(Number(params.boardCode));

//useEffect
    useEffect(() => {
        setBoardCode(boardCode);
    }, [])

    return (
        <div className='community-main'>
            <Banner/>
            <div className='com-container'>
                {
                    boardCode &&
                    <>
                        <BoardDetail boardCode={ boardCode }/>
                        <WriteDetail boardCode={ boardCode }/>
                        <CommentDetail boardCode={ boardCode }/>
                    </>
                }
            </div>
        </div>
    );
};

export default Detail;