import { MyNavbar } from "../styles/styled"
import Head from "next/head"
import A from "../components/A"

function MainContainer({children, keywords}) {
    return(
        <>
            <Head>
                <meta keywords={"pizda, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <MyNavbar>
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </MyNavbar>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer