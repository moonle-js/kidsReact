import { Outlet } from "react-router";
import Header from "../Header/Header";
import axios from "axios";


export default function App(){

    // async function goster(){
    //     try{
    //         var response = await axios.get('/data.json')
    //         console.log(response.data)
    //     }catch(error){
    //       console.log(error)
    //     }
    // }

    // goster()

    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}