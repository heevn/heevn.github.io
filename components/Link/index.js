import { MyLink } from "./styled";

export default function A({text, href}) {
    return(
        <MyLink href={href}>
            {text}
        </MyLink>
    )
}