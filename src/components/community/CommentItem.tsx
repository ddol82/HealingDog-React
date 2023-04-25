import { CommentType } from "./types/CommentType";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { useDispatch } from "react-redux";
import { callRegistCommentAPI } from 'apis/CommunityAPICalls';

type ItemProps = {
    item: CommentType,
    idx: number,
    updateIndex: number,
    setUpdateIndex: React.Dispatch<React.SetStateAction<number>>
}

const CommentItem = ({item, idx, updateIndex, setUpdateIndex}: ItemProps): JSX.Element => {
    const dispatch = useDispatch();
    const getDisplayValue = (timeParam: number): string => {
        timeParam = ~~(timeParam/1000);
        if(timeParam < 60) return `${timeParam}초 전`
        timeParam = ~~(timeParam/60);
        if(timeParam < 60) return `${timeParam}분 전`
        timeParam = ~~(timeParam/60);
        if(timeParam < 24) return `${timeParam}시간 전`
        return 'default';
    }

    const dateInfo: Date = new Date(item.uptime);
    const elapsed: number = Date.now() - dateInfo.getTime();
    const uptimeDisplay: string = getDisplayValue(elapsed);

//function
    // async function onRemoveClickHandler(): Promise<void> {
    //     if(!confirm('삭제된 댓글은 복구할 수 없습니다.\n정말 삭제하시겠습니까?')) return;
    //     await dispatch<any>(callDeleteCommentAPI({
    //         boardCode : boardData.boardCode
    //     }))
    //     .then(alert('게시글이 삭제되었습니다.'));
    // }

    function onCommentClickHandler(): void {
        setUpdateIndex(updateIndex === -1 ? idx : -1);
    }
    return (
        <div className="comment-list-block">
            <div className="comment-owner-block community-drag-none">
                <div className='community-profile'>
                    <img className='img-profile' src={IconAfterLogin} alt='writer'/>
                    <p className='text-profile-name'>{item?.userName ?? '탈퇴 회원'}</p>
                </div>
                <p className="detail-text-info">{uptimeDisplay === 'default' ?
                             `${item.uptime?.substring(2, 10)} ${item.uptime?.substring(11, 16)}` : uptimeDisplay}</p>
                <div className="comment-btn" onClick={onCommentClickHandler}>
                    <p>답글 달기</p>
                </div>
                {
                    item.isMine ?
                    <>
                        <div className="comment-btn">
                            <p>수정</p>
                        </div>
                        <div className="comment-btn">
                            <p>삭제</p>
                        </div>
                    </>
                    :
                    <div className="comment-btn comment-btn-red">
                        <p>신고</p>
                    </div>
                }
            </div>
            <div className="comment-content-block">
                <p>{item.content}</p>
            </div>
        </div>
    );
};

export default CommentItem;