import React, {useEffect} from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getRandomImgs } from "../api"
import RandDog from "../components/randDog"

export async function loader () {
    return await getRandomImgs()
}
let count = 0
console.log('count',count)

export function getBreed(url= "") {
    const name = url.substring(30).split("/", 1).join()
    const capName = name[0].toUpperCase()+name.slice(1).toLowerCase()
    return capName
}

export default function Quiz() {
    const dogImgs = useLoaderData()
    const [round, setRound] = React.useState(dogImgs)
    console.log('round before question',round)
    const [dogToMatch, setDogToMatch] = React.useState(question)

    const [currentDog, setCurrentDog] = React.useState({
        key: "",
        isSelected: false,
        isCorrect: false,
        name: "",
    })

    const [gameStat, setGameStat] = React.useState({
        tries: 0,
        answered: 0,
        isGame: true
    })

    useEffect(
        function gameOverTracker() {
        const isMaxTries = gameStat.tries >= 3
        const isMaxAnswered = gameStat.answered >= 10

        if (isMaxTries || isMaxAnswered){
            endGame()
        } 
    }, [currentDog])

    function question(){
        count++
        console.log('count2',count)
        const rand = Math.floor(Math.random() * round.length)
        const chosen = round[rand]
        console.log(chosen, "chosen")
        console.log(round, "round")
        setRound(prev=> prev.filter((_, index) => rand !== index))
        return getBreed(chosen)
        }
    console.log('round after question',round)

    // React.useEffect(()=> {
    //     //get new set of images
    //     setRound(getRandomImgs())
    // }, [round.length === 0])

    // React.useEffect(()=> {
    //     //set new question after previous question is omitted from current round array
    //     setDogToMatch(question())
    // }, [round.length])
 
    function checkAnswer(url) {
        const correctAnswer = getBreed(url) === dogToMatch
        
        console.log('correct', correctAnswer)
        console.log('current', currentDog.name)
        console.log('url', getBreed(url))
        console.log('question', dogToMatch)
        
        if (correctAnswer) {    
            setGameStat(prev => ({
                ...prev,
                answered: prev.answered +1
            }))
        } else {
            setGameStat(prev => ({
                ...prev, 
                tries: prev.tries +1,
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
            name: getBreed(url)
        })) 
        checkAnswer(url)
        setDogToMatch(question())
    }
 
    return(
        <div>
            <div className="title-container">
                {gameStat.isGame? <h1 className="title"> Quiz Time!</h1>: <button onClick={newGame}>Start Over?</button>}
            </div>
            <h3>Select the {dogToMatch}</h3>
            <div className="rand-dog-list">
                { <RandDog
                    dogImgs={dogImgs}
                    currentDog={currentDog}
                    gameStat={gameStat}
                    handleClick = {handleClick}
                /> }
            </div>
           
            <br></br>
            <h3>Til completion: {gameStat.answered}/10</h3>
            <h3>Chances left: {gameStat.tries}/3</h3>
        </div>
    )
}