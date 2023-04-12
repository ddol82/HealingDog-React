import React, { useState } from 'react';
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { useDispatch, useSelector } from 'react-redux';
import { callRegistCommentAPI } from 'apis/CommunityAPICalls';

type DetailProps = {
    boardCode: number
}
const LIMIT_WRITE_LENGTH = 300;

const WriteDetail = ({ boardCode }: DetailProps) => {
    const dispatch = useDispatch();
    const result: number = useSelector((state: any) => state.commentReducer);

    const [write, setWrite] = useState('');
    const [warn, setWarn] = useState(false);

//function
    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if(e.target.value.length > LIMIT_WRITE_LENGTH) {
            setWarn(true);
            return;
        }
        setWarn(false);
        e.target.style.height = 'auto';
        if(e.target.scrollHeight < 200) {
            e.target.style.overflowY = 'hidden';
            e.target.style.height = `${e.target.scrollHeight}px`;
        } else {
            e.target.style.overflowY = 'scroll';
            e.target.style.height = `200px`;
        }
        setWrite(e.target.value);
    }

    const onCommentWriteClickHandler = async (): Promise<void> => {
        if(write === '') {
            alert('댓글 내용을 작성해주세요.');
            return;
        }
        await dispatch<any>(callRegistCommentAPI({
            boardCode : boardCode,
            form : write
        }));
        setWrite('');
        window.location.reload();
    }

    return (
        <div className='detail-border'>
            <div className='detail-write-block'>
                <div className='detail-write-body'>
                    <div className='detail-write-upper community-drag-none'>
                        <div className='community-profile'>
                            <img className='img-profile' src={IconAfterLogin} alt='writer'/>
                            <p className='text-profile-name'>nickname</p>
                        </div>
                        <p className='write-limit'>{write.length} / 300</p>
                    </div>
                    <textarea
                        name="content"
                        className="write-text write-textarea comment-textarea"
                        placeholder="내용을 입력해주세요."
                        value={write}
                        onChange={ onInputChangeHandler }
                    ></textarea>
                </div>
                <div className='detail-write-btn community-drag-none' onClick={ onCommentWriteClickHandler }>
                    <p>작성</p>
                </div>
            </div>
        </div>
    );
};

export default WriteDetail;