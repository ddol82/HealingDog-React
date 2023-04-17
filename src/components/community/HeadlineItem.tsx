import { callGetHeadlineAPI } from "apis/HeadlineAPICalls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Community.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { BoardSimple } from "./types/BoardSimple";
import { callViewIncrementAPI } from "apis/CommunityActivityAPICalls";

const HeadlineItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const headlineList: BoardSimple[] = useSelector((state: any) => state.headlineReducer);

//effect
    useEffect(() => {
        dispatch<any>(callGetHeadlineAPI());
    // eslint-disable-next-line
    }, [])

//function
    const onBoardClickHandler = (code: number) => {
        dispatch<any>(callViewIncrementAPI({
            boardCode : code
        }));
        navigate(`/community/boards/detail/${code}`);
    }

    const Headline = ({boardCode, boardCategoryName, title, profileName, uptime, view, like, commentCount}: BoardSimple):JSX.Element => (
        <div className="headline-content" onClick={() => onBoardClickHandler(boardCode)}>
            <p className="board-category">{boardCategoryName}</p>
            <div className="board-title-block">
                <p className="board-title-text">{title}</p>
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
    );

    return (
        <div className="board-area">
        {
            Array.isArray(headlineList) && headlineList.map((headline: BoardSimple) => (
                <Headline key={headline.boardCode}
                    boardCode={headline.boardCode}
                    boardCategoryName={headline.boardCategoryName}
                    title={headline.title}
                    profileName={headline.profileName}
                    uptime={headline.uptime}
                    view={headline.view}
                    share={headline.share}
                    like={headline.like}
                    commentCount={headline.commentCount}
                />
            ))
        }
        </div>
    );
};

export default HeadlineItem;