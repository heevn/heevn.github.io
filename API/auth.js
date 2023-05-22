import axios from "axios";

export const authenticate = async() => {
    try {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/2.0/oauth2/password`, 
        {
            params:{
                login: process.env.NEXT_PUBLIC_LOGIN,
                password: process.env.NEXT_PUBLIC_PASSWORD,
                client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                hr: process.env.NEXT_PUBLIC_HR
            }, 
            headers:{
                "x-secret-key": process.env.NEXT_PUBLIC_X_SECRET_KEY,
                "X-Api-App-Id": process.env.NEXT_PUBLIC_CLIENT_SECRET,
            }
        });
        localStorage.setItem(`access_token`, data.data.access_token)
    }
    
    catch(e) {console.log(e)}
}