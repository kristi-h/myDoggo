import React from "react"
import { Link } from "react-router-dom"

export default function getDogsImg(){
    const headers = {
        'x-api-key' : import.meta.env.VITE_DOGS_API_KEY
    }
    const [dogs, setDogs] = React.useState([])

    React.useEffect(() => {
        const url = 'https://api.thedogapi.com/v1/images/search?limit=10'
        fetch(url, {headers})
            .then(resp => resp.json())
            .then(data => setDogs(data.dogs))
    }, [])
    
    console.log(dogs)

    const dogEls = dogs.map(dog => (
        <div key={dog.id} className = "dog-tile">
            <Link to={`/dogs/${dog.id}` }>
                <img className= "dog-pic" src={dog.url} />
                <div className= "dog-info">
                    <p>Height: {dog.height}</p>
                    <p>Width: {dog.width}</p>
                </div>
            </Link>
        </div>
    ))

    return(
        <div className="dog-list-container">
            <div className="dog-list">
                {dogEls}
            </div>
        </div>
    )
}


