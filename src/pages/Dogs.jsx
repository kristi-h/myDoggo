import React from "react"
import { 
    useLoaderData, 
    Link, 
    useParams
} from "react-router-dom"
import { getAllBreeds } from "../api"

export function loader() {
    return getAllBreeds()
}
export default function Dogs(){
    const dogs {
        breed: "";
        subbreed: [];
    } = useLoaderData()
    
    const { type } = useParams()
    
    const dogEl = dogs.map(dog => {
        return (
            <>
                <Link className="dog-type" 
                to={`${dog.breed}`}
                >
                    <h2 key={dog.breed}>{dog.breed}</h2> 
                </Link>
                
                <p>{
                    dog.subbreed.map((item, index) => {
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


