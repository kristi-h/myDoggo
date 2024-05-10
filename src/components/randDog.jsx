import React from "react"


export default function RandDog(props) {

    return(
        props.dogImgs.map((randDog, index) => {
            return (
                <div key={index} className ="rand-dog-tile">
                    <button onClick={props.handleClick}
                    >
                        <img src={randDog}></img>
                        <h3>{props.currentDog.isSelected? props.currentDog: ""}</h3>
                       
                    </button>
                </div>
            )
        })
    )
}