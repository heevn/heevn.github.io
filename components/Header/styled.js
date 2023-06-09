import styled from "@emotion/styled"
import Image from "next/image"

export const HeaderWrapper = styled.div`
    background-color: #FFFFFF;
    height: 84px;
    isolation: isolate;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    justify-content: center;
    z-index: 3;
    top: 0;
`

export const LinksWrapper = styled.div`
    display: flex;
    column-gap: 60px;
    & :hover{
        color: #228be6;
    }
`

export const StyledLogo = styled(Image)`
    position: absolute;
    left: 160px;
`