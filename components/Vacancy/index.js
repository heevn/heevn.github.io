import { VacancyWrapper, VacancyHeader, VacancyInfo, VacancyLocation, StyledIconStar, StyledIconStarFilled } from "./styled"
import { IconMapPin, IconPointFilled } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Vacancy({text}) {
    const router = useRouter()
    const [selected, setSelected] = useState(JSON.parse(localStorage.getItem(`vacancy_id`)).includes(text.id))
    let salary = "не указана"
    if(text.payment_from !== 0 && text.payment_to !== 0){
        salary = `от ${text.payment_from} до ${text.payment_to} ${text.currency}`
    } else if (text.payment_from !== 0){
        salary = `от ${text.payment_from} ${text.currency}`
    } else if (text.payment_to !==0){
        salary = `до ${text.payment_to} ${text.currency}`
    }else{
        salary = "не указана"
    }
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
         <VacancyWrapper  onClick={()=>router.push(`/info/${text.id}`)} data-elem={`vacancy-${text.id}`} >
            <VacancyHeader>
                <Text>{text.profession}</Text>
                {selected?
                    <StyledIconStarFilled onClick={removeFav} data-elem={`vacancy-${text.id}-shortlist-button`}/>
                :
                    <StyledIconStar onClick={addFav} data-elem={`vacancy-${text.id}-shortlist-button`}/>
                }
                
            </VacancyHeader>
            <VacancyInfo>
                <Text sx={{alignItems: "center", display: "flex", svg:{height: "50%"}}}><b>з/п {salary}</b> <IconPointFilled/> {text.type_of_work.title}</Text>
            </VacancyInfo>
            <VacancyLocation>
                <Text><IconMapPin/>  {text.town.title}</Text>
            </VacancyLocation>
        </VacancyWrapper>
    )
}