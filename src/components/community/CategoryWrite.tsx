import { MyCategory } from '../../components/community/types/MyCategory';

type CatWriteProps = {
    categoryList: MyCategory[],
    category: number,
    setCategory: React.Dispatch<React.SetStateAction<number>>
}

const CategoryWrite = ({ categoryList, category, setCategory }: CatWriteProps) => {
    const importantList: MyCategory[] = [];
    const otherList: MyCategory[][] = [];
    if(Array.isArray(categoryList)) {
        const categoryTemp: MyCategory[] = [...categoryList];
        categoryTemp.splice(4, 2); //전체글, 인기글 카테고리 제외
        categoryTemp.splice(0, 2); //admin메뉴 제외
        importantList.push(...categoryTemp.splice(0, 2));
        for(let i = 0; categoryTemp.length > 0; i++) {
            otherList.push([]);
            otherList[i].push(...categoryTemp.splice(0, 4));
        }
    }
    console.log(importantList);
    console.log(otherList);

//function
    const onCategoryClick = (code: number): void => {
        setCategory(code);
    }

//parts
    const CategoryItem = ({ code, type, name }: MyCategory): JSX.Element => (
        <button
            className={'category-btn ' + (category === code ? 'btn-active' : '')}
            onClick={() => onCategoryClick(code)}
        >{ name }</button>
    )

    return (
        <div className='com-category'>
            <div className='category-line'/>
            <div className='category-list'>
            {
                importantList?.map((cat: MyCategory): JSX.Element =>
                        (<CategoryItem key={ cat.code } code={ cat.code } type='' name={ cat.name }/>))
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
        </div>
    );
};

export default CategoryWrite;