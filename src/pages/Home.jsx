import React from "react"
import bgImg from "../assets/home.jpg"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div className="home-container">
            <img src={bgImg} className="home-image" />
            <h1>Your new family member is waiting for you.</h1>
            <p>Share more smiles by bringing home your best bud.</p>
            <Link to="dogs">Back to doggos</Link>
        </div>
    )
};