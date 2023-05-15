import A from "../Link"
import { HeaderWrapper, LinksWrapper, StyledLogo } from "./styled"
import Logo from "../../public/Logo.svg"

export default function Header() {
    return (
        <HeaderWrapper>
            <StyledLogo
                src={Logo}
                alt="Follow us on Twitter"
            />
            <LinksWrapper>
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </LinksWrapper>
        </HeaderWrapper>
    )
}