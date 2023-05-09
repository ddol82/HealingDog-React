import { useNavigate } from "react-router-dom";
import { MyCategory } from "./types/MyCategory";
import { PageData } from "./types/PageData";

type categoryProps = {
    categoryList: MyCategory[],
    isShown: boolean,
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setCategoryText: React.Dispatch<React.SetStateAction<string>>
}

const Category = ({ categoryList, isShown, category, setCategory, setCategoryText }: categoryProps): JSX.Element => {
    const navigate = useNavigate();

//function
    //카테고리 변경
    const onCategoryClick = (type: string, name: string): void => {
        setCategory(type);
        setCategoryText(name ?? '전체 글');
        navigate(`/community/lists/${type}/1`, {replace: true});
    }

    const importantList: MyCategory[] = [];
    const allList: MyCategory[] = [];
    const otherList: MyCategory[][] = [];
    console.log(categoryList);
    
    if(Array.isArray(categoryList)) {
        const categoryTemp: MyCategory[] = [...categoryList];
        importantList.push(...categoryTemp.splice(0, 4));
        allList.push(...categoryTemp.splice(0, 2));
        for(let i = 0; categoryTemp.length > 0; i++) {
            otherList.push([]);
            otherList[i].push(...categoryTemp.splice(0, 4));
        }
    }

    const CategoryItem = ({ code, type, name }: MyCategory): JSX.Element => (
        <button
            className={'category-btn ' + (category === type ? 'btn-active' : '')}
            onClick={() => onCategoryClick(type, name)}
        >{ name }</button>
    )
    
    return (
        <div className='com-category'>
            <div className='category-line'/>
            {
                isShown &&
                <>
                    <div className='category-list'>
                    {
                        importantList.map((cat: MyCategory): JSX.Element =>
                                (<CategoryItem key={ cat.code } code={ cat.code } type={ cat.type } name={ cat.name }/>))
                    }
                    </div>
                    <div className='category-line'/>
                    <div className='category-list'>
                    {
                        allList.map((cat: MyCategory): JSX.Element =>
                                (<CategoryItem key={ cat.code } code={ cat.code } type={ cat.type } name={ cat.name }/>))
                    }
                    </div>
                    <div className='category-line'/>
                    {
                        otherList.map(
                            (others: MyCategory[]): JSX.Element => (
                                <div key={ others[0].code } className='category-list'>
                                    {
                                        others.map(
                                            (cat: MyCategory): JSX.Element => (
                                                <CategoryItem key={ cat.code } code={ cat.code } type={ cat.type } name={ cat.name }/>
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

export default Category;