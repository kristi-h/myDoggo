import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </>
    )
}