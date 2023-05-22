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
    flex-direction: column;
    row-gap:20px;

`

export const DivWrapper = styled(DivMixin)`
    max-width: 315px;
    max-height: 360px;
    width: 100%;
`

export const TitleWrapper= styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

`