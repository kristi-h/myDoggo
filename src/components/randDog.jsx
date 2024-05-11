import React from "react"


export default function RandDog(props) {

    return(
        props.dogImgs.map((randDog, index) => {
            return (
                <div key={index} className ="rand-dog-tile">
                    <button type="button" disabled ={!props.gameStat.isGame} onClick={() => props.handleClick(randDog)}
                    >
                        <img src={randDog}></img>
                        <h3>{props.currentDog.isSelected? props.currentDog.name: ""}</h3>
                    </button>
                
                </div>
            )
        })
    )
}