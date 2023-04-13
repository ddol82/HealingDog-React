import CategoryWrite from "components/community/CategoryWrite";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import IconArrowLeft from "../../assets/icon/icon=arrowleft.svg";
import IconArrowRight from "../../assets/icon/icon=arrowright.svg";
import { useNavigate, useParams } from "react-router-dom";
import { callBoardUpdateAPI, callGetBoardDetailAPI } from "apis/BoardAPICalls";
import UploadLoading from "components/community/UploadLoading";
import { MyCategory } from "components/community/types/MyCategory";
import { callGetCategoryAPI } from "apis/CommunityAPICalls";
import { BoardFull } from "components/community/types/BoardFull";

const LIMIT_TITLE_LENGTH = 100;
const LIMIT_CONTENT_LENGTH = 1000;
const LIMIT_PHOTO_AMOUNT = 10;
const LIMIT_PHOTO_SIZE = 64 * 1024 * 1024;

type ImageObject = {
    index: number,
    attach: ImageAttach
}

type ImageAttach = {
    position: number,
    image?: File,
    url: string,
    fileSize: number
}

const BoardUpdate = (): JSX.Element => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageAttach = useRef<HTMLInputElement>(null);
    const categoryList: MyCategory[] = useSelector((state: any) => state.communityReducer);
    const boardData: BoardFull = useSelector((state: any) => state.boardReducer);

//useState
    const [boardCode, setBoardCode] = useState(Number(params.boardCode));
    const [category, setCategory] = useState(14);
    const [write, setWrite] = useState({
        title: '',
        content: '',
    });
    const [limit, setLimit] = useState({
        title: 0,
        content: 0,
        image: 0,
        beforeSize: 0,
        size: 0
    });
    /*
        const [imageData, setImageData] = useState({
            index: 0,
            attach: {
                position: -1,
                image: {},//including file data
                url: '',
                fileSize: 2147552
            }
        });
    */
    const [imageData, setImageData] = useState<ImageObject[]>([]);
    const [warnTitle, setWarnTitle] = useState(false);
    const [warnContent, setWarnContent] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(false);

//useEffect
    useEffect(() => {
        dispatch<any>(callGetCategoryAPI());
        dispatch<any>(callGetBoardDetailAPI({boardCode : boardCode}));
    }, []);

    useEffect(() => {
        if(!boardData.title) return;
        
        setCategory(boardData.boardCategoryCode);
        setWrite({
            title: boardData.title,
            content: boardData.content
        });
        const imageTmp: ImageObject[] = [];
        for(let i = 0; i < boardData.imageCount; i++) {
            if(!boardData?.originalImageUrl) break;
            imageTmp.push({
                index: i,
                attach: {
                    position: i,
                    image: undefined,
                    url: boardData.originalImageUrl[i],
                    fileSize: boardData.size[i]
                }
            });
        }
        setImageData(imageTmp);
        setLimit({
            title: boardData.title.length,
            content: boardData.content.length,
            image: boardData.imageCount,
            beforeSize: boardData.size.reduce((prev: number, next: number): number => prev + next),
            size: 0
        });
    }, [boardData]);

    useEffect(() => {
        refreshImage();
    }, [limit])

//function
    const onBoardUpdateClick = async (): Promise<void> => {
        console.log('게시글 수정 시도');
        if(limit.title === 0) {
            alert('제목을 입력해주세요.');
            return;
        }
        if(limit.content === 0) {
            alert('내용을 입력해주세요.');
            return;
        }
        const positionList: number[] = imageData.map<number>((imagePart: ImageObject): number => imagePart.attach.position);
        const sizeList: number[] = imageData.map<number>((imagePart: ImageObject): number => imagePart.attach.fileSize);
        const newBoardData: string = JSON.stringify({
            boardCategoryCode: category,
            title: write.title,
            content: write.content,
            size: sizeList,
            boardCode: boardCode,
            position: positionList,
            beforeContains: boardData.imageCount
        });
        const formData = new FormData();
        formData.append('boardData', new Blob([newBoardData], {type : 'application/json'}));
        for(const imagePart of imageData) {
            formData.append('images', imagePart.attach.image ?? '');
        }
        
        setUploadProgress(true);
        await dispatch<any>(callBoardUpdateAPI({
            form: formData
        }));
        
        setUploadProgress(false);
        console.log('게시글 수정 종료');
        navigate(`/community/boards/detail/${boardCode}`, {replace: true});
        window.location.reload();
    }

    const onImageAttachClick = (): void => {
        imageAttach.current?.click();
    }

    const onImageMoveClick = (from: number, to: number): void => {
        const imageTmp: ImageObject[] = [...imageData];
        
        [imageTmp[from].attach, imageTmp[to].attach] = [imageTmp[to].attach, imageTmp[from].attach];
        
        setImageData(imageTmp);
        setLimit({...limit});
    }

    const onImageRemoveClick = (target: number): void => {
        const removeItem: ImageObject = imageData[target];

        if(removeItem.attach.position === -1) {
            setLimit({
                ...limit,
                image: limit.image - 1,
                size: limit.size - removeItem.attach.fileSize
            })
        } else {
            setLimit({
                ...limit,
                image: limit.image - 1,
                beforeSize: limit.beforeSize - removeItem.attach.fileSize
            })
        }
        setImageData(imageData
            .filter((_, idx: number): boolean => target !== idx)
            .map<ImageObject>((imageItem: ImageObject, idx: number) => {
                return {
                    ...imageItem,
                    index: idx
                }
            })
        );
    }

    //비동기 방식인 파일 읽기를 기다리기 위해 Promise 함수를 사용한 Fileread 시작
    async function refreshImage(): Promise<void> {
        const imageTmp: ImageObject[] = [...imageData];
        for(let i = 0; i < imageTmp.length; i++) {
            if(imageTmp[i].attach.position === -1) {
                imageTmp[i].attach.url = await readFileAsync(imageTmp[i].attach.image as File);
            }
        }
        setImageData([...imageData]);
    }
    function readFileAsync(file: File): Promise<string> {
        return new Promise((res: (value: string) => void, rej: (reason: unknown) => void): void => {
            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                try {
                    if(!e.target) throw new Error('e.target is null!');
                    const urlGet = e.target.result as string;
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

        const imageTmp: ImageObject[] = [...imageData];
        let imageCount: number = limit.image;
        const beforeSize = limit.beforeSize
        let currSize =  limit.size;
        let tooBig = 0;
        Array.from(imageList).forEach((file: File) => {
            if(imageCount === 10) return;
            console.log((beforeSize + currSize + file.size) + " / " + LIMIT_PHOTO_SIZE);
            if((beforeSize + currSize + file.size) >= LIMIT_PHOTO_SIZE) {
                tooBig += 1;
                return;
            }
            currSize += file.size;

            imageTmp.push({
                index: imageCount,
                attach: {
                    position: -1,
                    image: file,
                    url: '',
                    fileSize: file.size
                }
            });
            imageCount += 1;
        });
        
        setImageData(imageTmp);
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
                <button className='category-btn btn-active' onClick={onBoardUpdateClick}>작성 완료</button>
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
                                    {
                                        limit.beforeSize > 0 ?
                                            <p className='write-limit'>용량 :&nbsp;
                                            {getBytesDisplay(limit.beforeSize)}{limit.size > 0 && `(+${getBytesDisplay(limit.size)})`} /&nbsp;
                                            {getBytesDisplay(LIMIT_PHOTO_SIZE)}</p>
                                        :
                                            <p className='write-limit'>용량 :&nbsp;
                                            {getBytesDisplay(limit.size)} /&nbsp;
                                            {getBytesDisplay(LIMIT_PHOTO_SIZE)}</p>
                                    }
                                    
                                    <div className="size-limit-bar">
                                        <div className="size-limit-max"/>
                                        <div className="size-limit-use" style={{width: `calc(${(limit.beforeSize + limit.size) / LIMIT_PHOTO_SIZE * 100}%)`}}/>
                                        <div className="size-limit-before" style={{width: `calc(${limit.beforeSize / LIMIT_PHOTO_SIZE * 100}%)`}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="write-image-list">
                            {
                                imageData?.map((imagePart: ImageObject, idx: number): JSX.Element => (
                                    <div key={idx} className={`write-image-item${idx === 0 ? ' write-image-thumbnail' : ''}`}>
                                        <img 
                                            className={imagePart.attach.position > -1 ? 'already-contains' : ''}
                                            src={!imagePart.attach.image ?
                                                `${process.env.REACT_APP_IMAGE_DIR}board/${imagePart.attach.url}` :
                                                `${imagePart.attach.url}`
                                            }
                                            alt="attachment"
                                        />
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

export default BoardUpdate;