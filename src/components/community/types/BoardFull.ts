export interface BoardFull {
    boardCode: number,
    boardCategoryCode: number,
    boardCategoryName: string,
    title: string,
    content: string,
    profileUrl?: string,
    profileName: string,
    uptime: string,
    uptimestamp: string,
    view: number,
    share?: number,
    like: number,
    likeState?: number,
    originalImageUrl?: string[],
    thumbnailImageUrl: string,
    previewImageUrl?: string[],
    imageCount: number,
    size: number[]
    commentCount: number,
    isAuthor?: boolean
}