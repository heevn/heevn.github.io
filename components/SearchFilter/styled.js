import styled from "@emotion/styled"

export const DivMixin = styled.div`
  //  box-sizing: border-box;
    display: flex;
    position: static;
    border: solid;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #EAEBED;
    border-radius: 12px;
`

export const DivWrapper = styled(DivMixin)`
    max-width: 315px;
    width: 100%;
`