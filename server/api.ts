import { $fetch } from 'ohmyfetch'

export const fetchTest = async (tab) => {
    return $fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}`)
}
