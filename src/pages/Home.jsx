import React from "react"
import bgImg from "../assets/home.jpg"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <div className="home-container">
            <img src={bgImg} className="home-image" />
            <h1>Hello DogWorld</h1>
            <h3>Let's explore the world of dogs!</h3>
            <Link to="dogs">See those dogs</Link>
        </div>
    )
};