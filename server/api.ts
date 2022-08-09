import { $fetch } from 'ohmyfetch'

export const fetchTest = async (tab) => {
    const item = await $fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}`)
    console.log('api test', item)
    return item
}
