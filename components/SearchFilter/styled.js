import styled from "@emotion/styled"
import { NumberInput } from "@mantine/core"
import { IconX } from "@tabler/icons-react"

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
    height: max-content;
    width: 100%;
`

export const TitleWrapper= styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: flex-end;

`

export const Cross = styled(IconX)`
  align-self: flex-end;
  color: #868e96;
  height: 70%;
`


export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const StyledNInput = styled(NumberInput)`
  & button {
    border: none;
  }

  & svg {
    color: #868e96;
  }

`