import { DivWrapper, TitleWrapper } from "./styled"
import { Text } from "@mantine/core"
import { Autocomplete } from '@mantine/core';
import { useState, useEffect } from "react";
import { getAllCatalogues } from "../../API/getCatalogues";

export default function SearchFilter({catalogue, setCatalogue, start, setStart, end, setEnd}) {
    const [arrCat, setArrCat] = useState([])

    const fetchData = getAllCatalogues()
    useEffect(() => {
       
        fetchData.then((data) => {console.log(data);setArrCat(data.data)}).catch(e=> console.log(e))
    }, [])

    useEffect(()=>{
        console.log(catalogue)
    }, [catalogue])

    return(
        <DivWrapper>
            <TitleWrapper>
                <Text fz="xl" fw={700}>Фильтры</Text>
                <div>close</div>
            </TitleWrapper>
            <div>
            <Text fz="lg" fw={700}>Отрасль</Text>
                 <Autocomplete
                value={catalogue}
                onChange={setCatalogue}
                placeholder="Pick one"
                data={arrCat.map(c => c.title_rus) || []}
                transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                disabled={arrCat?false:true}
            />
            </div>
           
        </DivWrapper>
    )
}