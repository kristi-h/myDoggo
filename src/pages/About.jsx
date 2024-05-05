import React from "react"
import bgImg from "../assets/About.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-image" />
            <div className="about-page-content">
                <h1>Learn how to identify that Putzi!</h1>
                <p>If you love dogs but struggle to put the face to the name, this app is for you. </p>
                <p>Have fun looking throught the different breed types and having a visual cue of what they look like.</p>
                <p>Coming soon: Game feature where you match the breed to the correct image!</p>
            </div>
            <div className="about-page-cta">
                <h2>Start your dog learning journey<br /></h2>
                <Link className="link-button" to="/DogList">Let's go see some dogs!</Link>
            </div>
        </div>
    );
}