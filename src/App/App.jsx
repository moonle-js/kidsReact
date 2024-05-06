import { Outlet } from "react-router";
import Header from "../Header/Header";
import axios from "axios";
import Home from "../Home/Home";


export default function App(){


    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            
        </>
    )
}