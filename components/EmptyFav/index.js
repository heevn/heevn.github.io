import { EmptyLogo, EmptyWrapper } from "./styled";
import EmptyPage from "../../public/EmptyPage.svg"

export default function EmptyFav() {
    return (
        <EmptyWrapper>
            <EmptyLogo alt={'Нет любимых вакансий:(((('} src={EmptyPage}/>
        </EmptyWrapper>
    )
}