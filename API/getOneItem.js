import { $authHost } from ".";

export const getOneItem = async (id) => {
    try{
        const data1 =  await $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/vacancies/${id}`, 
        {
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