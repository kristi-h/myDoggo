import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function DogProfile() {
    
    const [dog, setDog] = React.useState([])
    
    const searchParams = useSearchParams()
    const [breed, setBreed] = useState
    (searchParams.get("type"))
    
    React.useEffect(() => {
        setBreed(breed)
        const url = 'https://dog.ceo/api/breed/{breed}/images'
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setDog(data.message)})
            
    }, [breed])

    const dogPic = dog.map(url  => {
        return (
            <div key={breed}>
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