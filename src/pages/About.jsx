import React from "react"
import bgImg from "../assets/About.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-image" />
            <div className="about-page-content">
                <h1>Choose the right dog for you.</h1>
                <p>Our mission is to facilitate your dog searching journey.</p>
                <p>As a dog lover, I would like to make it easier for future dog parents to find the right type of doggo that fits both yours and your doggo's needs!</p>
            </div>
            <div className="about-page-cta">
                <h2>Your best friend is waiting.<br /></h2>
                <Link className="link-button" to="/DogList">See all the doggos!</Link>
            </div>
        </div>
    );
}