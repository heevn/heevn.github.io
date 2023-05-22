import { useRouter } from "next/router"
import { getOneItem } from "../../API/getOneItem"
import Vacancy from "../../components/Vacancy"
import { useState, useEffect } from "react"
import { InfoWrapper } from "../../public/styles";
import ExtInfo from "../../components/ExtInfo"
import { Loader } from '@mantine/core';

function Info() {
    const {query} = useRouter()
    const [item, setItem] = useState(undefined)
    const dataI =getOneItem(query.id)

    useEffect(() => {dataI.then((data) => {console.log(data);setItem(data.data)})}, [])
    return( item === undefined?
    <Loader sx={{margin: "0 auto"}}/>:
    <InfoWrapper>
        <Vacancy text={item}/>
        <ExtInfo text={item.firm_activity}></ExtInfo>
    </InfoWrapper>
    )
}

export default Info