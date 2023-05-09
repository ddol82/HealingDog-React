import { useState, useEffect } from "react"
import { PageData } from "./types/PageData";
import IconArrowLeftDouble from "../../assets/icon/icon=arrowleft2.svg";
import IconArrowLeft from "../../assets/icon/icon=arrowleft.svg";
import IconArrowRight from "../../assets/icon/icon=arrowright.svg";
import IconArrowRightDouble from "../../assets/icon/icon=arrowright2.svg";
import { useNavigate } from "react-router-dom";

type PageProps = {
    param: string,
    category: string,
    pageInfo: PageData,
    setPageInfo: React.Dispatch<React.SetStateAction<PageData>>
}

const PagenationPart = ({ param, category, pageInfo, setPageInfo }: PageProps): JSX.Element => {
    const navigate = useNavigate();

//useState
    const [pageList, setPageList] = useState<number[]>([]);

//useEffect
    useEffect(() => {
        console.log('Filling tmpPageList : ', pageInfo);
        
        const tmpPageList = [];
        for(let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
            tmpPageList.push(i);
        }
        setPageList(tmpPageList);
    }, [pageInfo, param])

    const onPageClick = (page: number): void => {
        const newPage: PageData = {
            pageAmount : pageInfo.pageAmount,
            startPage : pageInfo.startPage,
            currPage : page,
            endPage : pageInfo.endPage
        }
        setPageInfo(newPage);
        navigate(`/community/lists/${category}/${page}`);
    }

    type PageNumber = {
        page: number
    }
    const PageItem = ({page}: PageNumber): JSX.Element => (
        <div className="page-item-block" onClick={() => onPageClick(page)}>
            <p className={`page-item-text${pageInfo.currPage === page ? ' current' : ''}`}>{page}</p>
        </div>
    )

    return (
        <div className="page-items-container">
            <div className="page-item-arrow">
                <div className="page-arrow-block" onClick={() => onPageClick(1)}>
                    <img className="page-arrow-icon" src={IconArrowLeftDouble} alt="arrowLeft2"/>
                </div>
                <div className="page-arrow-block" onClick={() => onPageClick(Math.max(~~((pageInfo.currPage-1)/10)*10, 1))}>
                    <img className="page-arrow-icon" src={IconArrowLeft} alt="arrowLeft"/>
                </div>
            </div>
            {
                !!pageList && pageList.length > 0 &&
                pageList.map((page: number): JSX.Element => <PageItem key={page} page={page}/>)
            }
            <div className="page-item-arrow">
                <div className="page-arrow-block" onClick={() => onPageClick(Math.min((~~((pageInfo.currPage-1)/10)+1)*10+1, pageInfo.pageAmount))}>
                    <img className="page-arrow-icon" src={IconArrowRight} alt="arrowRight"/>
                </div>
                <div className="page-arrow-block" onClick={() => onPageClick(pageInfo.pageAmount)}>
                    <img className="page-arrow-icon" src={IconArrowRightDouble} alt="arrowRight2"/>
                </div>
            </div>
        </div>
    );
}

export default PagenationPart;