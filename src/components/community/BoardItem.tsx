import { callGetBoardListAPI } from "apis/BoardAPICalls";
import { callViewIncrementAPI } from "apis/CommunityActivityAPICalls";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Community.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { BoardFull } from "./types/BoardFull";
import { PageData } from "./types/PageData";

type BoardProps = {
    param: string,
    pageInfo: PageData,
    setPageInfo: React.Dispatch<React.SetStateAction<PageData>>,
    category: string
}

type BoardWithPaging = {
    pageInfo: PageData,
    item: BoardFull[]
}

const BoardItem = ({ param, pageInfo, setPageInfo, category }: BoardProps): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const boardData: BoardWithPaging = useSelector((state: any) => state.boardReducer);
    const boardList: BoardFull[] = boardData.item;
    const pageList: PageData = boardData.pageInfo;
    console.log("boardData", boardData);
    console.log("boardList", boardList);
    console.log("pageList", pageList);

//effect
    useEffect(() => {
        dispatch<any>(callGetBoardListAPI({
            categoryType: category,
            currPage: Number(param)
        }));
    // eslint-disable-next-line
    }, [,category, param])

    useEffect(() => {
        //re-render Community.tsx
        setPageInfo({
            ...pageList
        });
    }, [boardData])

//function
    const onBoardClickHandler = async (code: number): Promise<void> => {
        await dispatch<any>(callViewIncrementAPI({
            boardCode : code
        })).then(() => navigateToBoardDetail(code));
    }

    const navigateToBoardDetail = (code: number): void => {
        navigate(`/community/boards/detail/${code}`);
    }

    const Board = ({boardCode, boardCategoryName, title, content, profileName,
                uptime, view, like, commentCount, thumbnailImageUrl, imageCount}: BoardFull): JSX.Element => (
        <div className="board-full" onClick={() => onBoardClickHandler(boardCode)}>
            <div className={`board-content${thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                <p className={"board-category"}>{boardCategoryName}</p>
                <div className={`board-title-block${thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                    <p className="board-title-text">{title}</p>
                </div>
                <div className={`board-detail-block${thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                    <p className={`board-detail-text${thumbnailImageUrl ? ' bd-contains-image' : ''}`}>{content}</p>
                </div>
                <div className="board-info">
                    <div className="community-profile">
                        <img className="img-profile" src={IconAfterLogin} alt="profile"/>
                        <p className="text-profile-name">{profileName}</p>
                    </div>
                    <p>{uptime}</p>
                    <p>조회 {view}</p>
                    <p>좋아요 {like}</p>
                    <p>댓글 {commentCount}</p>
                </div>
            </div>
            {
                thumbnailImageUrl &&
                <div className="board-image">
                    <img className="board-thumbnail" src={process.env.REACT_APP_IMAGE_DIR + 'board/' + thumbnailImageUrl} alt="thumbnail"/>
                    {
                        imageCount > 1 &&
                        <div className="board-image-count">
                            <p>+{imageCount - 1}</p>
                        </div>
                    }
                </div>
            }
        </div>
    );

    return (
        <div className="board-area">
        {
            Array.isArray(boardList) && boardList.map((board: BoardFull) => (
                <Board key={board.boardCode}
                    boardCode={board.boardCode}
                    boardCategoryName={board.boardCategoryName}
                    title={board.title}
                    content={board.content}
                    profileName={board.profileName}
                    uptime={board.uptime}
                    uptimestamp=""
                    view={board.view}
                    share={board.share}
                    like={board.like}
                    commentCount={board.commentCount}
                    thumbnailImageUrl={board.thumbnailImageUrl}
                    imageCount={board.imageCount}
                />
            ))
        }
        </div>
    );
};

export default BoardItem;