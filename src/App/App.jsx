import { Outlet } from "react-router";
import Header from "../Header/Header";

export default function App(){
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}