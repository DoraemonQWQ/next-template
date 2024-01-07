// 获取$fetch类型
type FetchType = typeof $fetch
// 
type ReqType = Parameters<FetchType>[0]
//
type FetchOptions = Parameters<FetchType>[1]

export const post = <T = unknown>(
    request: ReqType,
    body?: any,
    options?: FetchOptions,
) => {
    // 读取cookie
    const tokenCookie = useCookie("token")
    const token:string = tokenCookie.value

    // 获取配置文件
    const config = useRuntimeConfig().public

    const defaultOptions: FetchOptions = {
        method: 'POST',
        baseURL: config.VITE_API_HOST,
        headers: {
            "Authorization": token,
            "User-Agent": window.navigator.userAgent,
        },
        body: body,

        // 拦截器
        onRequestError() { // 请求错误时
            ElMessage.error("网络错误")
        },
        onResponseError(response) { // 响应错误时
            // 获取数据
            const resp = response.response
            switch (resp.status) {
                case 401:
                    break
                case 500:
                    break
                default:
                    break

            }
        }
    }

    return $fetch<T>(request, merge(defaultOptions, options))
}

function merge(defaultOptions: FetchOptions, options: FetchOptions): FetchOptions {

    return options == undefined ? defaultOptions : options
}