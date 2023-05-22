import { catalogues } from "./mocCatalogues"

export const getAllCatalogues = async ()=>{
    let cat =await catalogues
    return {
        data:{
            objects: [...cat]
        }
    }
}


export const getOneCatalogue = async(id) =>{

    let cat = await catalogues.find((c)=> c.key === id)
    return {
        data:{
            object: cat
        }
    }
}