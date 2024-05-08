import React from "react"
import { useLoaderData } from "react-router-dom"
import { getRandomImgs } from "../api"


export async function loader () {
    return await getRandomImgs()
}

export default function Quiz() {
    const dogImgs = useLoaderData()
    const [selected, setSelected] = React.useState(false)

    function getBreedName(url) {
        const name = url.substr(30, url.indexOf("/") )
        const capName = name[0].toUpperCase()+name.slice(1).toLowerCase()
        return capName
    }

    // function questionBreed(){
    //     const rand = Math.floor(Math.random() * 3)
    //     return dogImgs[rand]
    // }

    function handleClick(e) {
       setSelected(prevState => !prevState)
       return selected
    }

    const randDogEl = dogImgs.map((randDog, index) => {
        return (
            <div key={index} className ="rand-dog-tile">
                <button onClick="handleclick(e)"
                >
                    <img src={randDog}></img>
                    <h3>{selected? getBreedName(randDog): ""}</h3>
                   
                </button>
            </div>
        )
    })

    return(
        <div>
            <h1 className="title">Quiz Time!</h1>
            {/* <h3>Select the {getBreedName(questionBreed)}</h3> */}
            <div className="rand-dog-list">
                {randDogEl}
            </div>
            <h3>Til completion: current/10</h3>
            <h3>Chances left: chance/3</h3>
        </div>
    )
}