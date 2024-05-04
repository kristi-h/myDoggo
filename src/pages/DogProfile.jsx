import React from "react"
import { useParams } from "react-router-dom"

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
        <div className="dog-profile-container">
            {dog ? (
                <div className="dog-profile">
                    <img src={dog.url} />
                    <i className={`dog-height ${dog.height} selected`}></i>
                    <h2>{dog.name}</h2>
                    <p className="dog-width"><span>${dog.width}</span>/day</p>
                    <button className="link-button">Save to favorites</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )


}