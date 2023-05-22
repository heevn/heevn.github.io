import { TextInput, Button } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"

export default function SearchBar({items, setIte}) {
    return(
        <TextInput
            icon={<IconSearch/>}
            size='lg'
            radius='md'
            placeholder="Введите название вакансии" 
            rightSection={
            <Button radius='md' size="sm" sx={{ position: "relative", right:"12px"}}>
                Поиск
            </Button>
            }
            rightSectionWidth={"fit-content"}
        />
    )
}