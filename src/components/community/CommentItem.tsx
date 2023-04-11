import { CommentType } from "./types/CommentType";
import IconAfterLogin from "../../assets/icon/Login=true.svg";

type ItemProps = {
    item: CommentType
}

const CommentItem = ({item}: ItemProps): JSX.Element => {
    return (
        <div className="comment-list-block">
            <div className="comment-owner-block community-drag-none">
                <div className='community-profile'>
                    <img className='img-profile' src={IconAfterLogin} alt='writer'/>
                    <p className='text-profile-name'>{item?.userName ?? '탈퇴 회원'}</p>
                </div>
                <p className="detail-text-info">{`${item.uptime?.substring(2, 10)} ${item.uptime?.substring(11, 16)}`}</p>
                <div className="comment-btn">
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