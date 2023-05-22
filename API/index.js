import axios from "axios";

const $authHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authInterceptor = config => {
    const token =  typeof window !== "undefined" ? window.localStorage.getItem('access_token') : false
    config.headers.authorization = `Bearer ${token}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost
}

