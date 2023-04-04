export interface BoardSimple {
    boardCode: number,
    boardCategoryName: string,
    title: string,
    profileUrl?: string,
    profileName: string,
    uptime: string,
    view: number,
    share?: number,
    like: number,
    commentCount: number
}