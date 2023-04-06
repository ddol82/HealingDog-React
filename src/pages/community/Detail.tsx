import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Banner from 'components/community/Banner';
import BoardDetail from 'components/community/BoardDetail';

const Detail = () => {
    const params = useParams();

    const [boardCode, setBoardCode] = useState(Number(params.boardCode))

//useEffect
    useEffect(() => {
        setBoardCode(boardCode);
    }, [])

    return (
        <div className='community-main'>
            <Banner/>
            <div className='com-container'>
                {
                    !isNaN(boardCode) &&
                    <BoardDetail boardCode={ boardCode }/>
                }
            </div>
        </div>
    );
};

export default Detail;