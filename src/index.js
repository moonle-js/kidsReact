import React from "react";
import ReactDOM from 'react-dom/client'

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Demo from "./Demo/Demo";
import Card from "./Card/Card";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: 'demo',
                element: <Demo></Demo>
            },
            {
                path: 'card',
                element: <Card></Card>
            }
        ]
    }
])

root.render(
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
)