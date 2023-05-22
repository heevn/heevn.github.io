import axios from "axios";
import { $authHost } from ".";

export const getFilterItems = async(page, keyword, catalogues, payment_from , payment_to ) => {
    try{
        console.log(payment_from)
        const data1 =  await $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/vacancies`, 
        {
            params:{
                published: 1,
                page: page, count: 4,
                catalogues: catalogues, keyword, payment_from, payment_to
            },
            headers:{
                "x-secret-key": process.env.NEXT_PUBLIC_X_SECRET_KEY,
                "X-Api-App-Id": process.env.NEXT_PUBLIC_CLIENT_SECRET
            }
        });
    return data1
    }
    catch(e) {console.log(e)}
    return []
}

export const getItems = async(page ) => {
    try{
        const data1 =  await $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/vacancies`, 
        {
            params:{
                page: page, count: 4,

            },
            headers:{
                "x-secret-key": process.env.NEXT_PUBLIC_X_SECRET_KEY,
                "X-Api-App-Id": process.env.NEXT_PUBLIC_CLIENT_SECRET
            }
        });
    return data1
    }
    catch(e) {console.log(e)}
    return []
}