import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        color: "#40e0d0",
        textDecoration: "underline",
        fontWeight: "bold"
      }

    return (
        <header>
            <Link className="site-logo" to="/">#myBestFriend</Link>
            <nav>
                <NavLink 
                    to="/about"
                    style={({isActive})=> isActive ? activeStyles : null }
                    >About
                </NavLink>
                <NavLink
                    to="/dogs"
                    style={({isActive})=> isActive ? activeStyles : null }
                    >Dogs
                </NavLink>
            </nav>
      </header>
    )
}