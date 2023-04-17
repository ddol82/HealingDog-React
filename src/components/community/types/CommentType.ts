export type CommentType = {
    commentCode: number,
    boardCode: number,
    userCode: number,
    userName?: string,
    ref?: number,
    uptime: string,
    content: string,
    isMine: boolean
}