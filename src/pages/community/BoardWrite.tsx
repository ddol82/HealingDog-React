import CategoryWrite from "components/community/CategoryWrite";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import IconArrowLeft from "../../assets/icon/icon=arrowleft.svg";
import IconArrowRight from "../../assets/icon/icon=arrowright.svg";
import { useNavigate } from "react-router-dom";
import { callBoardRegistAPI } from "apis/BoardAPICalls";
import UploadLoading from "components/community/UploadLoading";
import { MyCategory } from "components/community/types/MyCategory";
import { callGetCategoryAPI } from "apis/CommunityAPICalls";

const LIMIT_TITLE_LENGTH = 100;
const LIMIT_CONTENT_LENGTH = 1000;
const LIMIT_PHOTO_AMOUNT = 10;
const LIMIT_PHOTO_SIZE = 64 * 1024 * 1024;

const BoardWrite = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageAttach = useRef<HTMLInputElement>(null);
    const categoryList: MyCategory[] = useSelector((state: any) => state.communityReducer);

//state
    const [category, setCategory] = useState(14);
    const [write, setWrite] = useState({
        title: '',
        content: '',
    });
    const [limit, setLimit] = useState({
        title: 0,
        content: 0,
        image: 0,
        size: 0
    });
    const [images, setImages] = useState<File[]>([]);
    const [urls, setUrls] = useState<string[]>([]);
    const [warnTitle, setWarnTitle] = useState(false);
    const [warnContent, setWarnContent] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(false);
    //console.log(`urls : ${urls.length}`);
    //console.log(`images : `, images);

//useEffect
    useEffect(() => {
        dispatch<any>(callGetCategoryAPI());
    }, []);

    useEffect(() => {
        refreshImage();
    }, [images]);

//function
    const onBoardCreateClick = async (): Promise<void> => {
        console.log('게시글 생성 시도');
        if(limit.title === 0) {
            alert('제목을 입력해주세요.');
            return;
        }
        if(limit.content === 0) {
            alert('내용을 입력해주세요.');
            return;
        }
        const sizeArr: number[] = images.map((image: File): number => image.size);
        const boardData: string = JSON.stringify({
            boardCategoryCode: category,
            title: write.title,
            content: write.content,
            size: sizeArr
        });
        const formData = new FormData();
        //formData.append('boardData', boardData);
        formData.append('boardData', new Blob([boardData], {type : 'application/json'}));
        for(const image of images) {
            formData.append('images', image);
        }

        for(const keyItem of formData.keys()) {
            console.log(`key : ${keyItem}`);
        }
        for(const value of formData.values()) {
            console.log('values : ', value);
        }
        
        setUploadProgress(true);
        //(dispatch: JSON, getState: unknown) => Promise<void>
        await dispatch<any>(callBoardRegistAPI({
            form: formData
        }));
        
        setUploadProgress(false);
        console.log('게시글 생성 종료');
        navigate('/community/lists/all/1', {replace: true});
        window.location.reload();
    }

    const onImageAttachClick = (): void => {
        imageAttach.current?.click();
    }

    const onImageMoveClick = (from: number, to: number): void => {
        const imagesTmp = [...images];
        const urlsTmp = [...urls];
        
        [imagesTmp[from], imagesTmp[to]] = [imagesTmp[to], imagesTmp[from]];
        [urlsTmp[from], urlsTmp[to]] = [urlsTmp[to], urlsTmp[from]];
        
        setUrls(urls);
        setImages(imagesTmp);
    }

    const onImageRemoveClick = (target: number): void => {
        const removeSize = images.filter((_: File, idx: number): boolean => idx === target)[0].size;
        setImages(images.filter((_: File, idx: number): boolean => idx !== target));
        setUrls(urls.filter((_: string, idx: number): boolean => idx !== target));
        setLimit({
            ...limit,
            image: limit.image - 1,
            size: limit.size - removeSize
        })
    }

    //비동기 방식인 파일 읽기를 기다리기 위해 Promise 함수를 사용한 Fileread 시작
    async function refreshImage(): Promise<void> {
        const urlTmps: string[] = [];
        for(const image of images) {
            urlTmps.push(await readFileAsync(image));
        }
        setUrls(urlTmps);
    }
    function readFileAsync(file: File): Promise<string> {
        return new Promise((res: (value: string) => void, rej: (reason: unknown) => void): void => {
            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                try {
                    if(!e.target) throw new Error('e.target is null!');
                    const urlGet = e.target.result as string
                    res(urlGet);
                } catch(err) {
                    rej(err);
                }
            }
            fileReader.readAsDataURL(file);
        });
    }
    //비동기 방식인 파일 읽기를 기다리기 위해 Promise 함수를 사용한 Fileread 끝

    const onImageUploadChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if(e.target.files === null) return;
        const imageList: FileList = e.target.files;

        const imageTmp: File[] = [];
        let imageCount: number = limit.image;
        let currSize = limit.size;
        let tooBig = 0;
        Array.from(imageList).forEach((file: File) => {
            if(imageCount === 10) return;
            console.log((currSize + file.size) + " / " + LIMIT_PHOTO_SIZE);
            if((currSize + file.size) >= LIMIT_PHOTO_SIZE) {
                tooBig += 1;
                return;
            }
            currSize += file.size;

            imageTmp.push(file);
            imageCount += 1;
        });
        setImages([...images, ...imageTmp]);
        setLimit({
            ...limit,
            image: imageCount,
            size: currSize
        });
        if(tooBig > 0) {
            alert(`첨부 가능한 용량을 초과했습니다.\n${tooBig}건의 파일을 등록하지 못했습니다.`);
        }
    }

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        switch(e.target.name) {
            case 'title':
                if(e.target.value.length > LIMIT_TITLE_LENGTH) {
                    setWarnTitle(true);
                    return;
                }
                setWarnTitle(false);
                break;
            case 'content':
                if(e.target.value.length > LIMIT_CONTENT_LENGTH) {
                    setWarnContent(true);
                    return;
                }
                setWarnContent(false);
                break;
        }
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setWrite({
            ...write,
            [e.target.name]: e.target.value
        });
        setLimit({
            ...limit,
            [e.target.name]: e.target.value.length
        });
    }

    const getBytesDisplay = (byte: number): string => {
        if(byte < 1024) return `${byte.toFixed(0)} B`;
        if(byte < 1048576) return `${(byte / 1024).toFixed(2)} KB`;
        return `${(byte / 1048576).toFixed(2)} MB`;
    }

//parts
    const Menu = (): JSX.Element => (
        <div className='com-menu'>
            <div className='category-item cat-left'>
                <p className='category-text'>게시글 작성</p>
            </div>
            <div className='category-item cat-right'>
                <button className='category-btn btn-active' onClick={onBoardCreateClick}>작성 완료</button>
            </div>
        </div>
    );

    return (
        <>
            {
                uploadProgress &&
                <UploadLoading/>
            }
            <div className="com-container com-write-container">
                <Menu/>
                <CategoryWrite categoryList={categoryList} category={category} setCategory={setCategory}/>
                <div className="com-write">
                    <div className="write-border">
                        <div className="write-block">
                            <p className={`write-limit${warnTitle ? ' write-warning' : ''}`}>글자 수 : {limit.title} / {LIMIT_TITLE_LENGTH}</p>
                            <input
                                type="text"
                                name="title"
                                className="write-text"
                                placeholder="제목을 입력해주세요."
                                value={write.title}
                                onChange={ onInputChangeHandler }
                            />
                        </div>
                    </div>
                    <div className="write-border">
                        <div className="write-block">
                            <p className={`write-limit${warnContent ? ' write-warning' : ''}`}>글자 수 : {limit.content} / {LIMIT_CONTENT_LENGTH}</p>
                            <textarea
                                name="content"
                                className="write-text write-textarea"
                                placeholder="내용을 입력해주세요."
                                value={write.content}
                                onChange={ onInputChangeHandler }
                            ></textarea>
                        </div>
                        <div className="write-image-block community-drag-none">
                            <div className="write-image-insert">
                                <div className='category-btn btn-active' onClick={(onImageAttachClick)}>사진 첨부</div>
                                <input
                                    style={{display: 'none'}}
                                    type="file"
                                    name="fileItem"
                                    multiple
                                    accept="image/jpg,image/png,image/jpeg,image/gif"
                                    ref={ imageAttach }
                                    onChange={ onImageUploadChange }
                                />
                                <div className="write-image-limit">
                                    <p className='write-limit'>사진 : {limit.image} / {LIMIT_PHOTO_AMOUNT}</p>
                                    <p className='write-limit'>용량 : {getBytesDisplay(limit.size)} / {getBytesDisplay(LIMIT_PHOTO_SIZE)}</p>
                                    <div className="size-limit-bar">
                                        <div className="size-limit-max"/>
                                        <div className="size-limit-use" style={{width: `calc(${limit.size / LIMIT_PHOTO_SIZE * 100}%)`}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="write-image-list">
                            {
                                urls?.map((urlstr: string, idx: number): JSX.Element => (
                                    <div key={idx} className={`write-image-item${idx === 0 ? ' write-image-thumbnail' : ''}`}>
                                        <img src={urlstr} alt="attachment"/>
                                        {
                                            idx === 0 &&
                                            <div className="write-icon write-thumbnail">대표</div>
                                        }
                                        <div className="write-icon write-remove" onClick={() => onImageRemoveClick(idx)}>X</div>
                                        {
                                            idx > 0 &&
                                            <div className="write-icon write-left" onClick={() => onImageMoveClick(idx, idx-1)}>
                                                <img src={IconArrowLeft} alt="moveLeft" />
                                            </div>
                                        }
                                        {
                                            idx < limit.image-1 &&
                                            <div className="write-icon write-right" onClick={() => onImageMoveClick(idx, idx+1)}>
                                                <img src={IconArrowRight} alt="moveRight" />
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoardWrite;