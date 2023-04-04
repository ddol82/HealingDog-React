export interface BoardFull {
    boardCode: number,
    boardCategoryName: string,
    title: string,
    content: string,
    profileUrl?: string,
    profileName: string,
    uptime: string,
    view: number,
    share?: number,
    like: number,
    thumbnailImageUrl: string,
    imageCount: number,
    commentCount: number
}