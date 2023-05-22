import { getFavorites } from "../API/getFavorites";
import { getItems } from "../API/mocApi/getItems";
import EmptyFav from "../components/EmptyFav";
import PaginationBar from "../components/PaginationBar";
import Vacancy from "../components/Vacancy";
import { FavoriteWrapper } from "../public/styles";
import { useState, useEffect } from "react";
import { Loader } from "@mantine/core";

function Favorite() {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const fetchData = getFavorites(page)
    const [length, setLength] = useState() 
    const [shown, setShown] = useState([])


    useEffect(()=>{   
          setShown(items.slice((page-1)*4, page*4))
    }, [page, items])
    
    useEffect(() => {
        getFavorites().then((data) => {
            console.log(data)
            setItems(data.data.objects)})
        setLength(JSON.parse(localStorage.getItem(`vacancy_id`)).length)
      }, []);

    return (
        <>
            {length? 
                shown.length === 0?
                <Loader sx={{margin: "0 auto"}}/>
                :
                 <FavoriteWrapper>
                {shown?.map((item) => <Vacancy text={item} key={item.id}/>)}
                <PaginationBar activePage={page} setPage={setPage}/>
                </FavoriteWrapper>
                :
                <EmptyFav/>
            }
        </>
    );
};

export default Favorite;