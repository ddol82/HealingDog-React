import { useDispatch, useSelector } from "react-redux";
import { BoardFull } from "./types/BoardFull";
import { useEffect, useState } from "react";
import { callGetBoardDetailAPI, callDeleteBoardAPI } from "apis/BoardAPICalls";
import { callGetActivityAPI, callShareIncrementAPI, callLikeChangeAPI } from "apis/CommunityActivityAPICalls";
import { callLogoutAPI } from "apis/MemberAPICalls";
import { decodeJwt } from "utils/tokenUtils";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import IconArrowLeft from "../../assets/icon/icon=arrowleft.svg"
import IconArrowRight from "../../assets/icon/icon=arrowright.svg"
import IconLikeFalse from "../../assets/icon/icon=like, Style=false.svg"
import IconLikeTrue from "../../assets/icon/icon=like, Style=true.svg"
import IconShare from "../../assets/icon/icon=share.svg"
import IconEdit from "../../assets/icon/icon=edit.svg"
import IconRemove from "../../assets/icon/icon=remove.svg"
import { useNavigate } from "react-router-dom";

type DetailProps = {
    boardCode: number
}
type ActivityGroup = {
    like: number,
    share: number,
    commentCount: number
}
interface MyToken {
    name: string;
    exp: number;
}

const BoardDetail = ({boardCode}: DetailProps): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const boardData: BoardFull = useSelector((state: any) => state.boardReducer);
    const activityData: ActivityGroup = useSelector((state: any) => state.viewActivityReducer);

    const [imageCursor, setImageCursor] = useState(0);
    // const [imageList, setImageList] = useState<number[]>([]);
    const [isLike, setIsLike] = useState(false);
    const [activities, setActivities] = useState<ActivityGroup>({
        like: 0,
        share: 0,
        commentCount: 0
    });

//useEffect
    useEffect(() => {
        console.log('useEffect - [] call');
        dispatch<any>(callGetBoardDetailAPI({boardCode : boardCode}));
        dispatch<any>(callGetActivityAPI({boardCode : boardCode}));
    }, []);

    useEffect(() => {
        console.log('useEffect - [boardData] call - ', boardData);
        setIsLike(!!boardData.likeState);
    }, [boardData]);

    useEffect(() => {
        console.log('useEffect - [activityData] call -', activityData);
        setActivities(activityData);
    }, [activityData]);

    // useEffect(() => {
        // const tmpList: number[] = [];
        // for(let i = 0; i < boardData.imageCount; i++) {
        //     tmpList.push(i);
        // }
        // setImageList(tmpList);
    // }, [boardData, activityData]);

//function
    function onImageClickHandler(idx: number): void {
        setImageCursor(idx);
    }

    async function onLikeClickHandler(): Promise<void> {
        const token: MyToken | null = decodeJwt<MyToken>(window.localStorage.getItem('accessToken'));
        // 토근 정보가 없거나 만료되었을 시 로그인
        if (token?.exp === undefined || (token.exp * 1000 < Date.now())) {
            dispatch<any>(callLogoutAPI());
            alert('사용자 정보가 유효하지 않습니다.');
            return navigate("/login");
        }
        await dispatch<any>(callLikeChangeAPI({activityData : activityData, boardCode : boardCode, isLike : isLike}));
        setIsLike(!isLike);
    }
    
    function onShareClickHandler(): void {
        navigator.clipboard
                .writeText(`http://localhost:3000/community/boards/detail/${boardCode}`)
                .then(():void => {
                    alert('주소가 클립보드에 복사되었습니다.');
                });
        dispatch<any>(callShareIncrementAPI({activityData : activityData, boardCode : boardCode}));
    }

    async function onRemoveClickHandler(): Promise<void> {
        if(!confirm('삭제된 게시글은 복구할 수 없습니다.\n정말 삭제하시겠습니까?')) return;
        await dispatch<any>(callDeleteBoardAPI({
            boardCode : boardData.boardCode
        }))
        .then(alert('게시글이 삭제되었습니다.'))
        .then(navigate("/community/lists/all/1"));
    }

    return (
        <>
        {
            boardData &&
            <div className='detail-border'>
                <div className="detail-title-block">
                    <p className="detail-category">{boardData.boardCategoryName}</p>
                    <p className="detail-title">{boardData.title}</p>
                </div>
                <div className="detail-user-block community-drag-none">
                    <div className="community-profile">
                        <img className="img-profile" src={IconAfterLogin} alt="profile"/>
                        <p className="text-profile-name">{boardData.profileName}</p>
                    </div>
                    <p className="detail-text-info">{`${boardData.uptimestamp?.substring(0, 10)} ${boardData.uptimestamp?.substring(11, 16)}`}</p>
                    <p className="detail-text-info">조회 {boardData.view}</p>
                    <p className="detail-text-info">좋아요 {boardData.like}</p>
                    <p className="detail-text-info">댓글 {boardData.commentCount}</p>
                </div>

                <div className="detail-line"/>

                <div className="detail-content-block">
                    <p className="detail-content-text">{boardData.content}</p>
                </div>
                {
                    boardData.imageCount > 0 &&
                    (
                        boardData.imageCount === 1 ?
                        <div className="detail-image-single">
                            <img src={process.env.REACT_APP_IMAGE_DIR + 'board/' + (boardData?.originalImageUrl as string[])[0]} alt="image"/>
                        </div>
                        :
                        <div className="detail-image-multi">
                            <div className="detail-multi-content">
                                <div className="detail-multi-arrow">
                                {
                                    imageCursor > 0 &&
                                    <img src={IconArrowLeft} alt="left" onClick={(): void => onImageClickHandler(imageCursor - 1)}/>
                                }
                                </div>
                                <img src={process.env.REACT_APP_IMAGE_DIR + 'board/' +
                                        (boardData?.originalImageUrl as string[])
                                        ?.filter((_: string, idx: number) => imageCursor === idx)[0]} alt="image" />
                                <div className="detail-multi-arrow">
                                {
                                    imageCursor < boardData.imageCount - 1 &&
                                    <img src={IconArrowRight} alt="right" onClick={(): void => onImageClickHandler(imageCursor + 1)}/>
                                }
                                </div>
                            </div>
                            <div className="detail-multi-bottom">
                            {
                                (boardData?.previewImageUrl as string[])?.map((url: string, idx: number): JSX.Element => (
                                    <div
                                        key={url}
                                        className={`detail-multi-item${imageCursor === idx ? ' item-active' : ''}`}
                                        onClick={(): void => onImageClickHandler(idx)}
                                    >
                                        <img src={process.env.REACT_APP_IMAGE_DIR + 'board/' + url} alt="image" />
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    )
                }

                <div className="detail-line"/>
                
                <div className="detail-footer community-drag-none">
                    <div className="detail-footer-btn-list">
                        <div className={`detail-footer-button${isLike ? ' liked' : ''}`} onClick={onLikeClickHandler}>
                            <img src={isLike ? IconLikeTrue : IconLikeFalse} alt="detail-like" />
                            <p>좋아요</p>
                        </div>
                        <div className="detail-footer-button" onClick={onShareClickHandler}>
                            <img src={IconShare} alt="share" />
                            <p>공유</p>
                        </div>
                        {
                            !!boardData?.isAuthor &&
                            <>
                                <div className="detail-footer-button">
                                    <img src={IconEdit} alt="edit" />
                                    <p>글 수정</p>
                                </div>
                                <div className="detail-footer-button" onClick={onRemoveClickHandler}>
                                    <img src={IconRemove} alt="remove" />
                                    <p>글 삭제</p>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        <p className="detail-footer-text">이 글을 {activities.like}명이 좋아합니다.</p>
                        <p className="detail-footer-text">이 글이 {activities.share}회 공유되었습니다.</p>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default BoardDetail;