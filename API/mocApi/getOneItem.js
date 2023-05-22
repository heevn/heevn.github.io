import { data } from "./data"

export const getOneItem = async(id)=>{
    let data1 = await data 
    let answ = data1.find((d)=> d.id == id)
    return {
        data:{
            object: answ
        }
    }
}