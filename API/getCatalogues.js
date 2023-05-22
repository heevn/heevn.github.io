import { $authHost } from "."

export const getAllCatalogues = async()=>{
    try{
    let data1 = $authHost.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/catalogues`, 
    {
        params:{
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
