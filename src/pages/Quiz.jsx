import React from "react"
import { useLoaderData } from "react-router-dom"
import { getRandomImgs } from "../api"
import { nanoid } from 'nanoid'

export async function loader () {
    return await getRandomImgs()
}

export default function Quiz() {
    const dogImgs = useLoaderData()

    function getBreedName(url) {
        const name = url.substr(30, url.indexOf("/") )
        const capName = name[0].toUpperCase()+name.slice(1).toLowerCase()
        return capName
    }

    const randDogEl = dogImgs.map((randDog, index) => {
        return (
            <div key={index} className ="rand-dog-tile">
                <button 
                // onClick={handleClick}   
                >
                    <img src={randDog}></img>
                    <p>{getBreedName(randDog)}</p>
                </button>
            </div>
        )
    })

    // function handleClick() {

    // }

    return(
        <div>
            <h1 className="title">Quiz Time!</h1>
            <h3>Select the breed</h3>
            <div className="rand-dog-list">
                {randDogEl}
            </div>
            <h3>Til completion: current/10</h3>
            <h3>Chances left: chance/3</h3>
        </div>
    )
}