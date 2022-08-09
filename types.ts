export interface IAuthor {
    avatar_url: string
    loginname: string
}

export interface IData {
    author: IAuthor
    authorId: string
    content: string
    createAt: string
    good: boolean
    id: string
    lastReplyAt: string
    replyCount: number
    tab: string
    title: string
    top: boolean
    visitCount: number
}
