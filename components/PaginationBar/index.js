import { useState } from "react";
import { PaginationWrapper } from "./styled";
import { Pagination } from "@mantine/core";

export default function PaginationBar({activePage, setPage}) {
    return(
    <PaginationWrapper>
        <Pagination value={activePage} onChange={setPage} total={40}></Pagination>
    </PaginationWrapper>
    )
}