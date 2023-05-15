import { VacancyWrapper, VacancyHeader } from "./styled"
import { IconStar } from "@tabler/icons-react";
import { Text } from "@mantine/core";

export default function Vacancy({text}) {
    return(
        <VacancyWrapper>
            <VacancyHeader>
                <Text>{text.profession}</Text>
                <IconStar/>
            </VacancyHeader>
        </VacancyWrapper>
    )
}