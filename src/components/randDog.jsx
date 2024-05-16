import React from "react"

export default function RandDog(props) {

    return(

        props.dogImgs.map((randDog, index) => {
            return (
                <div key={index} className ="rand-dog-tile">
                    <button disabled ={!props.gameStat.isGame} onClick={() => props.handleClick(randDog)}
                    >
                    <img src={randDog}></img>
                    </button>
                    
                    <h3 
                    // className={props.currentDog.isCorrect? "correct-answer": "wrong-answer"} 
                    >
                        {props.currentDog.isSelected? props.currentDog.name: ""}</h3>
                
                </div>
            )
        })
    )
}