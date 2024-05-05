import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        color: "#115E59",
        textDecoration: "underline",
        fontWeight: "bold"
      }

    return (
        <header>
            <Link className="site-logo" to="/">#doggozine</Link>
            <nav className="nav">
                <NavLink 
                    to="about"
                    style={({isActive})=> isActive ? activeStyles : null }
                    >About
                </NavLink>
                <NavLink
                    to="dogs"
                    style={({isActive})=> isActive ? activeStyles : null }
                    >Dogs
                </NavLink>
            </nav>
      </header>
    )
}