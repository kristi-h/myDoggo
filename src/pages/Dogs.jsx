import React from "react"
import { Link, useParams} from "react-router-dom"
import { getAllBreeds } from "../api"

export default function Dogs(){
    const [dogs, setDogs] = React.useState([{
        breed: "", 
        pics: []
    }])
    const { type } = useParams()

    React.useEffect(() => {
        async function loadBreeds() {
            const data = await getAllBreeds()
            const dogsData = await Object.keys(data.message).map(
                key  => ({ breed: key, pics: data.message[key] }))
            setDogs(dogsData)
        }
        loadBreeds() 
    }, [])
    
    console.log(dogs)

    const dogEl = dogs.map(dog => {
        return (
            <>
                <Link className="dog-type" 
                to={`${dog.breed}`}
                >
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


