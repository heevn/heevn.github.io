import { getFavorites } from "../API/getFavorites";
import { getItems } from "../API/mocApi/getItems";
import EmptyFav from "../components/EmptyFav";
import PaginationBar from "../components/PaginationBar";
import Vacancy from "../components/Vacancy";
import { FavoriteWrapper } from "../public/styles";
import { useState, useEffect } from "react";

function Favorite() {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const fetchData = getFavorites(page)
    useEffect(()=>{
        getFavorites(page).then((data) => {
            setItems(data.data.objects)
        })
    }, [page])
    useEffect(() => {
        //authenticate() //не удалять!!!!!!
        fetchData.then((data) => {console.log(data);setItems(data.data.objects)}).catch(e=> console.log(e))
    }, [])

    const [length, setLength] = useState() 
    
    useEffect(() => {
        setLength(JSON.parse(localStorage.getItem(`vacancy_id`)).length)
      }, []);

    return (
        <>
            {length? 
                <>
                 <FavoriteWrapper>
                {items?.map((item) => <Vacancy text={item}/>)}
                <PaginationBar activePage={page} setPage={setPage}/>
                </FavoriteWrapper>
                
                </>
               
                :
                <EmptyFav/>
            }
        </>
    );
};

export default Favorite;