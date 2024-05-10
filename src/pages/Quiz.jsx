import React from "react"
import { useLoaderData, useEffect } from "react-router-dom"
import { getRandomImgs } from "../api"
import RandDog from "../components/randDog"

export async function loader () {
    return await getRandomImgs()
}

export default function Quiz() {
    const dogImgs = useLoaderData()
   
    const [currentDog, setCurrentDog] = React.useState({
        key: "",
        isSelected: false,
        isCorrect: false,
        name: "",
    })

    const [gameStat, setGameStat] = React.useState({
        tries: 0,
        isGame: false,
        answered: 0,
    })

    useEffect(()=> {
        const isMaxTries = gameStat.tries >= 3
        const isMaxAnswered = gameStat.answered >= 10

        if (isMaxTries || isMaxAnswered){
            endGame()
        } 
    }, [gameStat])

    function question(){
        const rand = Math.floor(Math.random() * 3)
        const chosen = dogImgs[rand]
        return getBreed(chosen)
    }

    function getBreed(url) {
        const name = url.substr(30, url.indexOf("/") )
        const capName = name[0].toUpperCase()+name.slice(1).toLowerCase()
        return capName
    }
 
    function checkAnswer() {
        if (currentDog.name !== question()) {
            setGameStat(prev => ({
                ...prev, 
                tries: prev.tries +1,
            }))
        } else {
            setGameStat(prev => ({
                ...prev,
                answered: prev.answered +1
            })) 
        }
    }
    
    function endGame() {
        setGameStat(prev => ({
            ...prev, 
            isGame: false,
        }))
    }

    function handleClick() {
        setCurrentDog(prev => ({
            ...prev,
            isSelected: true,
            name: getBreed(),
        })) 
        checkAnswer()
        return currentDog
    }

    return(
        <div>
            <h1 className="title">Quiz Time!</h1>
            <h3>Select the {question()}</h3>
            <div className="rand-dog-list">
                { <RandDog
                    dogImgs={dogImgs}
                    currentDog={currentDog}
                    gameStat={gameStat}
                    handleClick = {handleClick}
                /> }
            </div>
            <h3>Til completion: {gameStat.answered}/10</h3>
            <h3>Chances left: {gameStat.tries}/3</h3>
        </div>
    )
}