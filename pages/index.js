import SearchFilter from "../components/SearchFilter";
import Vacancy from "../components/Vacancy";
import { HomePageWrapper, VacanciesWrapper } from "../public/styles";
import { authenticate } from "../API/auth";
import { useEffect, useState } from "react";
import { getItems } from "../API/getItems";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";

function Index() {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [catalogue, setCatalogue] = useState()
    const fetchData = getItems(1)
    useEffect(()=>{
        getItems(page).then((data) => {
            setItems(data.data.objects)
        })
    }, [page])
    useEffect(() => {
        authenticate() //не удалять!!!!!!
        if(!Array.isArray(JSON.parse(localStorage.getItem(`vacancy_id`)))){
            localStorage.setItem(`vacancy_id`, JSON.stringify([]))
        }
        fetchData.then((data) => {setItems(data.data.objects)}).catch(e=> console.log(e))
    }, [])
    return (
        <HomePageWrapper>
            <SearchFilter catalogue={catalogue} setCatalogue={setCatalogue}/>
        <VacanciesWrapper>
            <SearchBar></SearchBar>
            {items?.map((item) => <Vacancy text={item} key={item.id}/>)}
            <PaginationBar activePage={page} setPage={setPage}/>
        </VacanciesWrapper>
        </HomePageWrapper>
    );
};

export default Index;