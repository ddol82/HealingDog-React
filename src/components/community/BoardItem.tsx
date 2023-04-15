import { callGetBoardListAPI } from "apis/BoardAPICalls";
import { callViewIncrementAPI } from "apis/CommunityActivityAPICalls";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Community.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { BoardFull } from "./types/BoardFull";
import { PageData } from "./types/PageData";

type BoardItemProps = {
    param: string,
    pageInfo: PageData,
    setPageInfo: React.Dispatch<React.SetStateAction<PageData>>,
    category: string
}

type BoardProps = {
    board: BoardFull
}

type BoardWithPaging = {
    pageInfo: PageData,
    item: BoardFull[]
}

const BoardItem = ({ param, pageInfo, setPageInfo, category }: BoardItemProps): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const boardData: BoardWithPaging = useSelector((state: any) => state.boardReducer);
    const boardList: BoardFull[] = boardData.item;
    const pageList: PageData = boardData.pageInfo;
    console.log("boardData", boardData);

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
        window.scrollTo({ top: 370 })
    }

    const navigateToBoardDetail = (code: number): void => {
        navigate(`/community/boards/detail/${code}`);
    }

    const Board = ({board}: BoardProps): JSX.Element => {
        const dateInfo: Date = new Date(board.uptimestamp);
        const elapsed: number = Date.now() - dateInfo.getTime();
        const uptimeDisplay: string = getDisplayValue(elapsed);
        
        return (
            <div className="board-full" onClick={() => onBoardClickHandler(board.boardCode)}>
                <div className={`board-content${board.thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                    <p className={"board-category"}>{board.boardCategoryName}</p>
                    <div className={`board-title-block${board.thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                        <p className={`board-title-text${board.thumbnailImageUrl ? ' bd-contains-image' : ''}`}>{board.title}</p>
                    </div>
                    <div className={`board-detail-block${board.thumbnailImageUrl ? ' bd-contains-image' : ''}`}>
                        <p className={`board-detail-text${board.thumbnailImageUrl ? ' bd-contains-image' : ''}`}>{board.content}</p>
                    </div>
                    <div className="board-info">
                        <div className="community-profile">
                            <img className="img-profile" src={IconAfterLogin} alt="profile"/>
                            <p className="text-profile-name">{board.profileName}</p>
                        </div>
                        <p>{uptimeDisplay === 'default' ? board.uptime : uptimeDisplay}</p>
                        <p>조회 {board.view}</p>
                        <p>좋아요 {board.like}</p>
                        <p>댓글 {board.commentCount}</p>
                    </div>
                </div>
                {
                    board.thumbnailImageUrl &&
                    <div className="board-image">
                        <img className="board-thumbnail" src={process.env.REACT_APP_IMAGE_DIR + 'board/' + board.thumbnailImageUrl} alt="thumbnail"/>
                        {
                            board.imageCount > 1 &&
                            <div className="board-image-count">
                                <p>+{board.imageCount - 1}</p>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }

    const getDisplayValue = (timeParam: number): string => {
        timeParam = ~~(timeParam/1000);
        if(timeParam < 60) return `${timeParam}초 전`
        timeParam = ~~(timeParam/60);
        if(timeParam < 60) return `${timeParam}분 전`
        timeParam = ~~(timeParam/60);
        if(timeParam < 24) return `${timeParam}시간 전`
        timeParam = ~~(timeParam/24);
        if(timeParam <= 3) return `${timeParam}일 전`
        return 'default';
    }

    return (
        <div className="board-area">
        {
            Array.isArray(boardList) && boardList.map((board: BoardFull) => (
                <Board key={board.boardCode} board={board}/>
            ))
        }
        </div>
    );
};

export default BoardItem;