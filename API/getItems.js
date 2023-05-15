import axios from "axios";
import { $authHost } from ".";

export const getItems = async(page, count) => {
    try{
        const data1 =  await $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/vacancies`, 
        {
            params:{
                page: 1, count: 4
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