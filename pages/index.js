import SearchFilter from "../components/SearchFilter";
import Vacancy from "../components/Vacancy";
import { HomePageWrapper, VacanciesWrapper } from "../public/styles";

import { useEffect, useState } from "react";
import { getItems, getFilterItems } from "../API/getItems";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";
import { Loader } from "@mantine/core";

function Index() {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({catalogue: null, payment_from: null, payment_to: null})
    const [keyword, setKeyword] = useState(null)

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getFilterItems(page, keyword, filters.catalogue, filters.payment_from, filters.payment_to).then((data) => {
            console.log(data);setItems(data.data.objects); setLoading(false);
        })
    }, [page, filters, keyword])

    return (
        <HomePageWrapper>
            <SearchFilter setFilters={setFilters}/>
        <VacanciesWrapper>
            <SearchBar setKey={setKeyword}/>
           { loading?
        <Loader sx={{margin: "0 auto"}}/>:
            items?.map((item) => <Vacancy text={item} key={item.id}/>)}
            <PaginationBar activePage={page} setPage={setPage}/>
        </VacanciesWrapper>
        </HomePageWrapper>
    );
};

export default Index;