import React, {useEffect} from "react"
import { Link, useLoaderData } from "react-router-dom"
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
        answered: 0,
        isGame: true,
    })

    useEffect(()=> {
        const isMaxTries = gameStat.tries >= 3
        const isMaxAnswered = gameStat.answered >= 10

        if (isMaxTries || isMaxAnswered){
            endGame()
        } 
    }, [currentDog])

    function question(){
        const rand = Math.floor(Math.random() * 3)
        const chosen = dogImgs[rand]
        console.log(chosen)
        return getBreed(chosen)
    }

    function getBreed(url= "") {
        const name = url.substring(30).split("/", 1).join()
        console.log(name)
        const capName = name[0].toUpperCase()+name.slice(1).toLowerCase()
        console.log(name)
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

    function newGame() {
        setGameStat(prev => ({
            ...prev,
            isGame: true,
            answered: 0,
            tries: 0
        }))
    }

    function handleClick(url) {
        setCurrentDog(prev => ({
            ...prev,
            isSelected: true,
            name: getBreed(url),
        })) 
        checkAnswer()
    }

    return(
        <div>
            <div className="title-container">
                {gameStat.isGame? <h1 className="title"> Quiz Time!</h1>: <button onClick={newGame}>Start Over?</button>}
            </div>
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