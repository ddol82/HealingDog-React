import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { decodeJwt } from 'utils/tokenUtils';
import { useDispatch, useSelector } from 'react-redux';
import { callLogoutAPI } from "../../apis/MemberAPICalls";
import { callGetCategoryAPI } from "../../apis/CommunityAPICalls";
import "../../styles/Community.css";
import menuLogo from "../../assets/icon/icon=menu.svg";
import filterLogo from "../../assets/icon/icon=filter.svg";
import HeadlineItem from './HeadlineItem';
import { MyCategory } from './types/MyCategory';

interface MyToken {
    name: string;
    exp: number;
}

const Community = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const categoryList: MyCategory[] = useSelector((state: any) => state.communityReducer);
    // Store.ts로 type을 export하면 되나, 현재 설정이 js라 리팩토링 필요, 실행을 위한 any 선언

//state
    const [categoryText, setCategoryText] = useState('전체 글');
    const [filterText, setFilterText] = useState('시간 순');
    const [categoryIsShown, setCategoryIsShown] = useState(false);
    const [filterIsShown, setFilterIsShown] = useState(false);

//effect
    useEffect(() => {
        dispatch<any>(callGetCategoryAPI({
            categoryType: params.categoryType
        }));
        setCategoryText(categoryList.filter(v => v.type === params.categoryType)[0]?.name ?? '전체 글');
    // eslint-disable-next-line
    },[]);
    
    useEffect(() => {
        console.log(categoryList);
        setCategoryText(categoryList.filter(v => v.type === params.categoryType)[0]?.name ?? '전체 글');
    },[categoryList])


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
    //카테고리 변경
    const onCategoryClick = (type: string) => {
        setCategoryText(categoryList.filter(v => v.type === type)[0].name ?? '전체 글');
        navigate(`/community/${type}`);
    }

//parts
    const Banner = (): JSX.Element => (
        <div className='com-banner'>
            <h1>배너 위치. 700x260</h1>
        </div>
    );

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

    const Category = (): JSX.Element => {
        const importantList: MyCategory[] = [];
        const allList: MyCategory[] = [];
        const otherList: MyCategory[][] = [];
        const categoryTemp: MyCategory[] = [...categoryList];
        if(Array.isArray(categoryList)) {
            importantList.push(...categoryList.splice(0, 4));
            allList.push(...categoryList.splice(0, 2));
            for(let i = 0; categoryList.length > 0; i++) {
                otherList.push([]);
                otherList[i].push(...categoryList.splice(0, 4));
            }
        }
        categoryList.push(...categoryTemp);
        
        return (
            <div className='com-category'>
                <div className='category-line'/>
                {
                    categoryIsShown &&
                    <>
                        <div className='category-list'>
                        {
                            importantList.map((category: MyCategory): JSX.Element =>
                                    (<CategoryItem key={ category.code } category={ category }/>))
                        }
                        </div>
                        <div className='category-line'/>
                        <div className='category-list'>
                        {
                            allList.map((category: MyCategory): JSX.Element =>
                                    (<CategoryItem key={ category.code } category={ category }/>))
                        }
                        </div>
                        <div className='category-line'/>
                        {
                            otherList.map(
                                (others: MyCategory[]): JSX.Element => (
                                    <div key={ others[0].code } className='category-list'>
                                        {
                                            others.map(
                                                (category: MyCategory): JSX.Element => (
                                                    <CategoryItem key={ category.code } category={ category }/>
                                                )
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                        <div className='category-line'/>
                    </>
                }
            </div>
        )
    };

    const CategoryItem = ({ category }: any): JSX.Element => (
        <button
            className={'category-btn ' + (params.categoryType === category.type ? 'btn-active' : '')}
            onClick={() => onCategoryClick(category.type)}
        >{ category.name }</button>
    );

    return (
        <div className='community-main'>
            <Banner/>
            <div className='com-container'>
                <Menu/>
                <Category/>
                {/*<HeadlineItem/>*/}
            </div>
        </div>
    );
};

export default Community;