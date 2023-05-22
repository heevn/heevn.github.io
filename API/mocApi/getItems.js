import { data } from "./data";


export const getItems = async(page, catalogue = null, start = null, end = null) => {
    let data1 = await data
    if(start){
         data1 = data1.filter((d) => d.payment_from >= start )
    }
    if(end !==null){
        data1 = data1.filter((d) => d.payment_from <= end )
    }
    if(catalogue !== null){
        data1 = data1.filter((d) => d.catalogues.some((s) => s.id === catalogue) )
    }

    data1 = data1.slice((page-1)*4, page*4)
    return {
        data:{
            objects:[...data1]
        }
    }
}