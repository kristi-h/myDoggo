import React from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
import { nanoid } from 'nanoid'

export default function DogProfile() {
    const {breed} = useParams()
    const [dog, setDog] = React.useState([])
    
    const {type} = useSearchParams()

    React.useEffect(() => {
        const url = 'https://dog.ceo/api/breed/{type}/images'
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setDog(data.message)})
            
    }, [])

    const dogPic = dog.map(url  => {
        return (
            <div key={nanoid}>
                <p>{url}</p> 
            </div>
            
        )
    })

    return (
        <section>
        <Link
            to=".."
            relative="path"
            className="back-button">
            <span>Back to all dogs</span>
        </Link>
    
        <div className="dog-profile-container">
            {dog ? (
                {dogPic}
            ) : <h2>Loading...</h2>}
        </div>
        </section>
             
    )


}