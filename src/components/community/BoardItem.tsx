import { callGetBoardListAPI } from "apis/BoardAPICalls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Community.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { BoardFull } from "./types/BoardFull";
import { PageData } from "./types/PageData";

type boardProps = {
    pageInfo: PageData,
    category: string
}

const BoardItem = ({ pageInfo, category }: boardProps): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const boardList: BoardFull[] = useSelector((state: any) => state.boardReducer.item);

//effect
    useEffect(() => {
        dispatch<any>(callGetBoardListAPI({
            categoryType: category,
            currPage: pageInfo.currPage
        }));
    // eslint-disable-next-line
    }, [, category])

//function
    const onBoardClickHandler = (code: number) => {
        navigate(`/community/boards/detail/${code}`);
    }

    const Board = ({boardCode, boardCategoryName, title, content, profileName,
                uptime, view, like, commentCount, thumbnailImageUrl, imageCount}: BoardFull):JSX.Element => (
        <div className="board-content" onClick={() => onBoardClickHandler(boardCode)}>
            <p className="board-category">{boardCategoryName}</p>
            <div className="board-title-block">
                <p className="board-title-text">{title}</p>
            </div>
            <div className="board-detail-block">
                <p className="board-detail-text">{content}</p>
            </div>
            <div className="board-info">
                <div className="community-profile">
                    <img className="img-profile" src={IconAfterLogin} alt="profile"/>
                    <p className="text-profile-name">{profileName}</p>
                </div>
                <p>{uptime}</p>
                <p>조회 {view}</p>
                <p>좋아요 {like}</p>
                <p>댓글 {!thumbnailImageUrl ? 0 : 1}</p>
            </div>
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