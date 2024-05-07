import React from "react"
import { Link, useParams } from "react-router-dom"


export default function getDogsImg(){
    const headers = {
        'x-api-key' : import.meta.env.VITE_DOGS_API_KEY
    }
    const [dogs, setDogs] = React.useState([{
        breed: "", 
        pics: []
    }])
    const { type } = useParams()

    React.useEffect(() => {
        const url = 'https://dog.ceo/api/breeds/list/all'
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const dogsData = Object.keys(data.message).map(
                    key  => ({ breed: key, pics: data.message[key] }))
                setDogs(dogsData)})
            
    }, [])
    
    console.log(dogs)

    const dogEl = dogs.map(dog => {
        return (
            <>
                <Link className="dog-type" to={`/dogprofile/${dog.breed}`}>
                    <h2 key={dog.breed}>{dog.breed}</h2> 
                </Link>
                
                <p>{
                    dog.pics.map((item, index) => {
                        return(
                            <>
                                <p key={item[index]}>
                                    {item? `Subbreed ${index+1}: ${item[0].toUpperCase()+item.slice(1).toLowerCase()}`:null}
                                </p> 
                            </>
                            )}
                           
                        )
                    }
                </p>
            </>
        )
      })

    return(
        <div className="dog-list-container">
            <div className="dog-list">
                {dogEl}
            </div>
        </div>
    )
}


