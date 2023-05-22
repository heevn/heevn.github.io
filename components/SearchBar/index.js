import { TextInput, Button } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"

export default function SearchBar({setKey}) {
    const [value, setValue] = useState("")

    const search = () =>{
        console.log(value)
        setKey(value)
    }

    return(
        <TextInput
            icon={<IconSearch/>}
            size='lg'
            radius='md'
            placeholder="Введите название вакансии" 
            rightSection={
            <Button radius='md' size="sm" sx={{ position: "relative", right:"12px"}} onClick={search}>
                Поиск
            </Button>
            }
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            rightSectionWidth={"fit-content"}
        />
    )
}