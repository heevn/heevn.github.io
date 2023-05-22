import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 28px;
`

export const VacanciesWrapper = styled.div`
    width: 100%;
    row-gap: 16px;
    display: flex;
    flex-direction: column;
`

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 172px;
    row-gap: 20px;
`

export const FavoriteWrapper = styled(InfoWrapper)`
    row-gap: 16px;
`
