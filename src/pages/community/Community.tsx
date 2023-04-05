import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { decodeJwt } from 'utils/tokenUtils';
import { useDispatch, useSelector } from 'react-redux';
import { callLogoutAPI } from "../../apis/MemberAPICalls";
import { callGetCategoryAPI } from "../../apis/CommunityAPICalls";
import "../../styles/Community.css";
import menuLogo from "../../assets/icon/icon=menu.svg";
import filterLogo from "../../assets/icon/icon=filter.svg";
import Category from '../../components/community/Category';
import HeadlineItem from '../../components/community/HeadlineItem';
import BoardItem from '../../components/community/BoardItem';
import Banner from '../../components/community/Banner';
import { MyCategory } from '../../components/community/types/MyCategory';
import PagenationPart from 'components/community/PagenationPart';
import { PageData } from 'components/community/types/PageData';

interface MyToken {
    name: string;
    exp: number;
}

const Community = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const categoryList: MyCategory[] = useSelector((state: any) => state.categoryReducer);
    // Store.ts로 type을 export하면 되나, 현재 설정이 js라 리팩토링 필요, 실행을 위한 any 선언

//state
    const [category, setCategory] = useState(`${params.categoryType}`);
    const [categoryText, setCategoryText] = useState('전체 글');
    const [filterText, setFilterText] = useState('시간 순');
    const [categoryIsShown, setCategoryIsShown] = useState(true);
    const [filterIsShown, setFilterIsShown] = useState(false);
    const [pageInfo, setPageInfo] = useState<PageData>({
        pageAmount: 0, startPage: 0, currPage: 1, endPage: 0
    });
    const [pageParam, setPageParam] = useState('1');

//effect
    useEffect(() => {
        dispatch<any>(callGetCategoryAPI());
        setPageParam(params.currPage ?? '1');
        console.log('dispatching');
    // eslint-disable-next-line
    }, [, params]);

    // useEffect(() => {
    //     setPageParam('-');
    //     setPageParam(params.currPage ?? '1');
    // }, [params])
    
    useEffect(() => {
        if(!categoryList) return;
        setCategoryText(categoryList.filter(v => v.type === params.categoryType)[0]?.name ?? '전체 글');
        setPageInfo(pageInfo);
        console.log("pageInfo", pageInfo);
        
    }, [categoryList]);

//function
    //카테고리 목록 펼치기
    const onCategoryToggleClick = () => {
        setCategoryIsShown(!categoryIsShown);
    }
    //카테고리 필터 펼치기
    const onFilterToggleClick = () => {
        setFilterIsShown(!filterIsShown);
    }
    //글 작성
    const onWriteClick = () => {
        const token: MyToken | null = decodeJwt<MyToken>(window.localStorage.getItem('accessToken'));
        // 토근 정보가 없거나 만료되었을 시 로그인
        if (token?.exp === undefined || (token.exp * 1000 < Date.now())) {
            dispatch<any>(callLogoutAPI());
            alert('사용자 정보가 유효하지 않습니다.');
            return navigate("/login");
        }
        return navigate("/community/board/write")
    }

//parts
    const Menu = ():JSX.Element => (
        <div className='com-menu'>
            <div className='category-item cat-left'>
                <p className='category-text'>{categoryText}</p>
                <img className='category-switch-button' src={menuLogo} alt='category' onClick={onCategoryToggleClick}/>
            </div>
            <div className='category-item cat-right'>
                <div className='category-item category-sort'>
                    <p className='category-text'>{filterText}</p>
                    <img className='category-switch-button' src={filterLogo} alt='filter' onClick={onFilterToggleClick}/>
                </div>
                <button className='category-btn btn-active' onClick={onWriteClick}>글 작성</button>
            </div>
        </div>
    );


    return (
        <div className='community-main'>
            <Banner/>
            <div className='com-container'>
                <Menu/>
                {
                    categoryList.length > 0 &&
                    <Category
                        categoryList={categoryList}
                        isShown={categoryIsShown}
                        category={category}
                        setCategory={setCategory}
                        setCategoryText={setCategoryText}
                    />
                }
                {
                    pageInfo !== undefined &&
                    <>
                        <HeadlineItem/>
                        <BoardItem param={pageParam} pageInfo={pageInfo} setPageInfo={setPageInfo} category={category}/>
                        <PagenationPart param={pageParam} category={category} pageInfo={pageInfo} setPageInfo={setPageInfo}/>
                    </>
                }
            </div>
        </div>
    );
};

export default Community;