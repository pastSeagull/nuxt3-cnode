import { $fetch } from 'ohmyfetch'

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

export const fetchTest = async () => {
    const item = await $fetch('https://cnodejs.org/api/v1/topics')
    console.log('api test', item)
    return 1
}
