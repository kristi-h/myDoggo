import React from "react"
import { useParams, Link } from "react-router-dom"

export default function DogProfile() {
    const params = useParams()
    const [dog, setDog] = React.useState(null)

    const headers = {
        'x-api-key' : import.meta.env.VITE_DOGS_API_KEY
    }

    React.useEffect(() => {
        const url = 'https://api.thedogapi.com/v1/images/search?limit=10&${params.id}'
        fetch(url, {headers})
            .then(resp => resp.json())
            .then(data => setDog(data.dog))
    }, [params.id])

    return (
        <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all dogs</span>
        </Link>

        
        <div className="dog-profile-container">
            {dog ? (
                <div className="dog-profile">
                    <img src={dog.url} />
                    <h2>{dog.id}</h2>
                    <button className="link-button">Save to favorites</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
        </section>
             
    )


}