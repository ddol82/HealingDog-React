import { PageData } from "./types/PageData";

type PageProps = {
    pageInfo: PageData,
    setPageInfo: React.Dispatch<React.SetStateAction<PageData>>
}

const PagenationPart = ({ pageInfo, setPageInfo }: PageProps): JSX.Element => {

    return (
        <div className="page-items-container">
            
        </div>
    );
}

export default PagenationPart;