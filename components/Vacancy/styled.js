import styled from "@emotion/styled";
import { IconStar } from "@tabler/icons-react";

export const VacancyWrapper = styled.div`
    cursor: pointer;
    border: 1px solid #EAEBED;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 12.5px;
    padding: 24px;
`
export const VacancyHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    width: 100%;
    color: #5E96FC;
`

export const VacancyInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
`

export const VacancyLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 100%;
`


export const StyledIconStar = styled(IconStar)`
    color: #ACADB9;
    &:hover{
        color: #315699;
    }

`
export const StyledIconStarFilled = styled(IconStar)`
    color: #228be6;
    fill: #228be6;
    &:hover{
        color: #146cb9;
        fill: #146cb9;
    }

`