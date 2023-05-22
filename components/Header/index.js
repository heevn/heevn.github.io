import { HeaderWrapper, LinksWrapper, StyledLogo } from "./styled"
import Logo from "../../public/Logo.svg"
import { Text } from "@mantine/core"

export default function Header() {
    return (
        <HeaderWrapper>
            <StyledLogo
                src={Logo}
                alt="Follow us on Twitter"
            />
            <LinksWrapper>
                <Text component="a" href={'/'}>Поиск вакансий</Text>
                <Text component="a" href={'/favorite'}>Избранное</Text>
            </LinksWrapper>
        </HeaderWrapper>
    )
}