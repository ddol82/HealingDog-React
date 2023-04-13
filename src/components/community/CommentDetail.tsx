import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGetAllCommentAPI } from 'apis/CommentAPICalls';
import CommentItem from './CommentItem';
import { CommentType } from './types/CommentType';

type DetailProps = {
    boardCode: number
}

const CommentDetail = ({ boardCode }: DetailProps) => {
    const dispatch = useDispatch();
    const commentData: CommentType[] = useSelector((state: any) => state.commentReducer);

//useEffect
    useEffect(() => {
        console.log('useEffect - [] call');
        dispatch<any>(callGetAllCommentAPI({boardCode : boardCode}));
    }, []);

    return (
        <div className='detail-border'>
            <div className='comment-count community-drag-none'>
                <p>댓글 {commentData?.length}</p>
            </div>
            {
                commentData && commentData.length === 0 ?
                    <div className='comment-empty'>
                        <p>첫 댓글을 작성해보세요!</p>
                    </div>
                :
                    commentData.map((item: CommentType, idx: number) => (
                        <React.Fragment key={item.commentCode}>
                            {
                                idx > 0 &&
                                <div className='detail-line'/>
                            }
                            <CommentItem item={item}/>
                        </React.Fragment>
                    ))
            }
        </div>
    );
};

export default CommentDetail;