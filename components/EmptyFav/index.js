import { EmptyLogo, EmptyWrapper } from "./styled";
import EmptyPage from "../../public/EmptyPage.svg"
import { Button, Title } from "@mantine/core";
import { useRouter } from "next/router";

export default function EmptyFav() {
    const router = useRouter()
    return (
        <EmptyWrapper>
            <EmptyLogo alt={'Нет любимых вакансий:(((('} src={EmptyPage}/>
            <Title order={2}>Упс, здесь ещё ничего нет! :((((</Title>
            <Button 
                variant="light" 
                onClick={()=> {router.push('/')}}
                size="lg"
                radius={"md"}
            >
                Поиск Вакансий</Button>
        </EmptyWrapper>
    )
}