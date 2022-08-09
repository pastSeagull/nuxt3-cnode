import { useAsync } from "./utils"

export const useItem = (promise) => {
    const { loading, error, data, request} = useAsync()
    onMounted(() => request(promise))
    return {
        loading,
        error,
        data,
        request
    }
}

