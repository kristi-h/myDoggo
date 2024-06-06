import React from "react"
import { getBreed } from "../pages/Quiz";

export default function RandDog(props) {
    const currentDog = props.currentDog;

    return(
      
        props.dogImgs.map((randDog, index) => {
            const breed = getBreed(randDog);
            const isSelected = currentDog.name === breed;
            
            return (  
                <div key={index}>
                    <div key={index} className ="rand-dog-tile">
                    <button disabled ={!props.gameStat.isGame} onClick={() => props.handleClick(randDog)}
                    >
                        <img src={randDog}></img>
                    </button>
                    </div>
                    <h2 id="breed-text">{isSelected && breed}</h2>
                </div>   
            )
        })
    )
}