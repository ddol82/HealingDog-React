import { useDispatch, useSelector } from "react-redux";
import { BoardFull } from "./types/BoardFull";
import { useEffect, useState } from "react";
import { callGetBoardDetailAPI } from "apis/BoardAPICalls";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import IconArrowLeft from "../../assets/icon/icon=arrowleft.svg"
import IconArrowRight from "../../assets/icon/icon=arrowright.svg"
import IconLike from "../../assets/icon/icon=like.svg"
import IconShare from "../../assets/icon/icon=share.svg"
import IconEdit from "../../assets/icon/icon=edit.svg"
import IconRemove from "../../assets/icon/icon=remove.svg"

type detailProps = {
    boardCode: number
}
const BoardDetail = ({boardCode}: detailProps): JSX.Element => {
    const dispatch = useDispatch();
    const boardData: BoardFull = useSelector((state: any) => state.boardReducer);

    const [imageCursor, setImageCursor] = useState(0);
    const [imageList, setImageList] = useState<number[]>([]);
    const [isLike, setIsLike] = useState(false);

//useEffect
    useEffect(() => {
        dispatch<any>(callGetBoardDetailAPI({boardCode : boardCode}));
    }, []);

    useEffect(() => {
        const tmpList: number[] = [];
        for(let i = 0; i < boardData.imageCount; i++) {
            tmpList.push(i);
        }
        setImageList(tmpList);
    }, [boardData]);

    function onImageClickHandler(idx: number): void {
        setImageCursor(idx);
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
                <div className="detail-user-block">
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
                                <img src={IconArrowLeft} alt="left" onClick={():void => onImageClickHandler(imageCursor - 1)}/>
                            }
                            </div>
                            <img src={process.env.REACT_APP_IMAGE_DIR + 'board/' +
                                    (boardData?.originalImageUrl as string[])
                                    ?.filter((_: string, idx: number) => imageCursor === idx)[0]} alt="image" />
                            <div className="detail-multi-arrow">
                            {
                                imageCursor < boardData.imageCount - 1 &&
                                <img src={IconArrowRight} alt="right" onClick={():void => onImageClickHandler(imageCursor + 1)}/>
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
                }

                <div className="detail-line"/>
                
                <div className="detail-footer">
                    <div className="detail-footer-btn-list">
                        <div className="detail-footer-button">
                            <img src={IconLike} alt="like" />
                            <p>좋아요</p>
                        </div>
                        <div className="detail-footer-button">
                            <img src={IconShare} alt="share" />
                            <p>공유</p>
                        </div>
                        <div className="detail-footer-button">
                            <img src={IconEdit} alt="edit" />
                            <p>글 수정</p>
                        </div>
                        <div className="detail-footer-button">
                            <img src={IconRemove} alt="remove" />
                            <p>글 삭제</p>
                        </div>
                    </div>
                    <div>
                        <p className="detail-footer-text">이 글을 0명이 좋아합니다.</p>
                        <p className="detail-footer-text">이 글이 0회 공유되었습니다.</p>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default BoardDetail;