import SearchFilter from "../components/SearchFilter";
import Vacancy from "../components/Vacancy";
import { Button, Input } from '@mantine/core';
import { HomePageWrapper, VacanciesWrapper } from "./styles";
import { IconSearch } from "@tabler/icons-react";
import { IconAdjustmentsStar } from "@tabler/icons-react";
import { authenticate } from "../API/auth";
import { useEffect, useState } from "react";
import { getItems } from "../API/getItems";

function Index() {
    const [items, setItems] = useState([])
    const fetchData = getItems(1,4)
    useEffect(() => {
        console.log(fetchData)
        setItems(fetchData.then((data) => data.data.objects))},
        [fetchData])
    return (
        <HomePageWrapper>
            <SearchFilter />
        <VacanciesWrapper>
            <Input
                icon={<IconSearch/>}
                
                size='lg'
                radius='md'
                placeholder="Введите название вакансии" 
                rightSection={
                <Button radius='md' size="sm" sx={{ position: "relative", right:"12px"}} >
                    Поиск
                </Button>
                }
                rightSectionWidth={"fit-content"}
            />
            {items?.map((item) => <Vacancy text={item}/>)}
        </VacanciesWrapper>
        </HomePageWrapper>
    );
};

export default Index;