import Header from "./Header"

function MainContainer({children, keywords}) {
    return(
        <>
            <Header/>
            <div style={{border: "solid", padding: "40px 162px", display: "flex"}}>
                {children}
            </div>
        </>
    )
}

export default MainContainer