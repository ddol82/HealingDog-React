import { callGetHeadlineAPI } from "apis/CommunityAPICalls";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/Community.css";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { BoardSimple } from "./types/BoardSimple";

const HeadlineItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //const headlineList = useSelector((state: any) => state.communityReducer);

//effect
    useEffect(() => {
        dispatch<any>(callGetHeadlineAPI());
    // eslint-disable-next-line
    }, [])

    const Headline = ({items}: BoardSimple):JSX.Element => (
        <div className="headline-content">
            <p className="headline-category">카테고리</p>
            <div className="headline-title-block">
                <p className="headline-title-text">제목</p>
            </div>
            <div className="headline-info">
                <div className="community-profile">
                    <img className="img-profile" src={IconAfterLogin} alt="profile"/>
                    <p className="text-profile-name">닉네임</p>
                </div>
                <p>23.01.01</p>
                <p>조회 1,234</p>
                <p>좋아요 135</p>
                <p>댓글 24</p>
            </div>
        </div>
    );

    return (
        <div className="headline-area">
        {/*
            Array.isArray(headlineList) && headlineList.map((item) => (
                <Headline key={item.code} items={item}/>
            ))
            */}
        </div>
    );
};

export default HeadlineItem;