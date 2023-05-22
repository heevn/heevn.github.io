import { $authHost } from ".";

export const getFavorites = async() => {
    try{
        const ids = JSON.parse(localStorage.getItem(`vacancy_id`))
        const data1 =  await $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/vacancies`, 
        {
            params:{
                ids: ids
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