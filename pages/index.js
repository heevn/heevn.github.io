import { Title } from "@mantine/core";
import A from "../components/A"
import { MyNavbar } from "../styles/styled";
import Head from "next/head"
import MainContainer from "../components/MainContainer";

function Index() {
    return (
        <MainContainer keywords={"main page"}>
            <h1>Главная страница</h1>
        </MainContainer>
    );
};

export default Index;