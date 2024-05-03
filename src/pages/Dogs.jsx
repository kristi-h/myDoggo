import React from "react"


export default function getDogsImg(){
    const headers = {
        'x-api-key' : 'process.env.DOGS_API_KEY'
    }
    const [dogs, setDogs] = React.useState([])
    React.useEffect(() => {
        const url = "https://api.thedogapi.com/v1/images/search?limit=10"
        fetch(url)
            .then(resp => resp.json())
            .then(data => setDogs(data))
    }, [])
    console.log(dogs)
    
    const dogEls = dogs.map(dog => (
        <div key={dog.id} className = "dog-tile">
            <img className= "dog-pic" src={dog.url} />
            <div className= "dog-info">
                <p>{dog.height}</p>
                <ul>{dog.breed && dog.breed.map(x => (
                    <>
                    <li key={x}>
                        {x}
                    </li>
                    <li key={x}>
                    {x.name}
                    </li>
                    </>
                    ))}
                </ul>
            </div>
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


