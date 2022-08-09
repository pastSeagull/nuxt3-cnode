import { ref } from 'vue'

export const useAsync = () => {
    const loading = ref(false)
    const data = ref(null)
    const error = ref(null)
    const request = (promise) => {
        if (!promise || !promise.then) {
            throw new Error("请传入promise")
        }
        loading.value = true
        return promise.then(res => {
            data.value = res.data
        }).catch(e => {
            error.value = e
        }).finally(() => {
            loading.value = false
        })
    }
    return {
        loading,
        error,
        data,
        request
    }
}

export const capitalize = (str: any) => {
    let date = new Date(str)
    let time = new Date().getTime() - date.getTime()
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}
