import axios from "axios";

const $authHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost
}

