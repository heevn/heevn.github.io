import { VacancyWrapper, VacancyHeader, VacancyInfo, VacancyLocation, StyledIconStar, StyledIconStarFilled } from "./styled"
import { IconMapPin, IconPointFilled, IconStar } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Vacancy({text}) {
    const router = useRouter()
    const [selected, setSelected] = useState(JSON.parse(localStorage.getItem(`vacancy_id`)).includes(text.id))

    const addFav = (e)=>{
        e.stopPropagation()
        localStorage.setItem(`vacancy_id`, JSON.stringify([...JSON.parse(localStorage.getItem(`vacancy_id`)), text.id]))
        setSelected(true)
    }

    const removeFav = (e)=>{
        e.stopPropagation()
        localStorage.setItem('vacancy_id', JSON.stringify(JSON.parse(localStorage.getItem(`vacancy_id`)).filter(el => el!=text.id)))
        setSelected(false)

    }
    return(
         <VacancyWrapper  onClick={()=>router.push(`/info/${text.id}`)}>
            <VacancyHeader>
                <Text>{text.profession}</Text>
                {selected?
                    <StyledIconStarFilled onClick={removeFav}/>
                :
                    <StyledIconStar onClick={addFav}/>
                }
                
            </VacancyHeader>
            <VacancyInfo>
                <Text><b>з/п от {text.payment_from} до {text.payment_to} rub</b> <IconPointFilled/> {text.type_of_work.title}</Text>
            </VacancyInfo>
            <VacancyLocation>
                <Text><IconMapPin/>  {text.town.title}</Text>
            </VacancyLocation>
        </VacancyWrapper>
    )
}