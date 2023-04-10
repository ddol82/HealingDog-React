import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGetAllCommentAPI } from 'apis/CommentAPICalls';

type DetailProps = {
    boardCode: number
}
type CommentType = {
    commentCode: number,
    boardCode: number,
    userCode: number,
    ref?: number,
    uptime: string,
    content: string
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
            <div className='comment-count'>
                <p>댓글 {commentData?.length}</p>
            </div>
            {
                commentData && commentData.length === 0 ?
                    <div className='comment-empty'>
                        <p>첫 댓글을 작성해보세요!</p>
                    </div>
                :
                    commentData.map((value: CommentType, idx: number) => (
                        <>
                            {
                                idx > 0 &&
                                <div className='detail-line'/>
                            }
                            <div key={value.commentCode}>
                                
                            </div>
                        </>
                    ))
            }
        </div>
    );
};

export default CommentDetail;