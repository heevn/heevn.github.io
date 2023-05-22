import { DivWrapper, TitleWrapper, SectionWrapper, StyledNInput, Cross} from "./styled"
import { Button, Text } from "@mantine/core"
import { Autocomplete, NumberInput } from '@mantine/core';
import { useState, useEffect } from "react";
import { getAllCatalogues } from "../../API/getCatalogues";
import { IconSelector, IconChevronDown } from "@tabler/icons-react";

export default function SearchFilter({setFilters}) {
    const [arrCat, setArrCat] = useState([])
    const [catalogue, setCatalogue] = useState()
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const fetchData = getAllCatalogues()
    useEffect(() => {
       
        fetchData.then((data) => {setArrCat(data.data)}).catch(e=> console.log(e))
    }, [])

    useEffect(()=>{
        console.log(catalogue)
    }, [catalogue])

    const setFilter = () => {
        setFilters({catalogue: catalogue !== '' && arrCat.filter(a => a.title_rus === catalogue)[0].key || null, payment_from: start !== ''?start:null, payment_to: end !== ''?end : null})
    }

    const removeFilter = () =>{
        setCatalogue("")
        setStart("")
        setEnd("")
        setFilters({catalogue: null, payment_from: null, payment_to: null})
    }

    return(
        <DivWrapper>
            <TitleWrapper>
                <Text fz="xl" fw={700}>Фильтры</Text>
                <div style={{display: "flex", flexDirection:"row", cursor:"pointer"}} onClick={removeFilter}>
                    <Text c="dimmed">Сбросить всё </Text>
                    <Cross/>
                </div>
            </TitleWrapper>
            <SectionWrapper>
            <Text fz="lg" fw={700}>Отрасль</Text>
                 <Autocomplete
                value={catalogue}
                onChange={setCatalogue}
                placeholder="Выберите отрасль"
                data={arrCat.map(c => c.title_rus) || []}
                transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                disabled={arrCat?false:true}
                rightSection={<IconChevronDown color="#868e96"/>}
                radius={"md"}
                size="lg"
            />
            </SectionWrapper>
            <SectionWrapper>
                <Text fz="lg" fw={700}>Оклад</Text>
                <StyledNInput
                radius={"md"}
                size="lg"
                placeholder="От"
                value={start}
                onChange={setStart}
                min={0}
                step={50}
                />
                <StyledNInput
                radius={"md"}
                size="lg"
                placeholder="До"
                value={end}
                onChange={setEnd}
                min={0}
                step={50}
                />
            </SectionWrapper>
            <Button size="lg" radius="md" onClick={setFilter}>Применить</Button>
        </DivWrapper>
    )
}