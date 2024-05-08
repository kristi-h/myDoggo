import React from "react"
import { 
    Link, 
    useLoaderData,
    useParams
} from "react-router-dom"
import { nanoid } from 'nanoid'
import { getSubBreeds } from "../api"

export async function loader ({params}) {
    const type = params.type
    return await getSubBreeds(type)
}
export default function DogProfile() {
    const { type } = useParams()
    const dog = useLoaderData()

    const dogPic = dog.map(url  => {
        return (
            <div key={nanoid()} className= "dog-pics">
                <img id= "pic" src={url} />
            </div>
            
        )
    })
    
    return (
        <section>
        <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all dogs</span>
        </Link>

        <h1 className="title">{type[0].toUpperCase()+type.slice(1).toLowerCase()}s</h1>
    
        <div className="dog-profile-container">
            {dog[0] ? (
                dogPic
            ) : <h2>Loading...</h2>}
        </div>

        </section>
             
    )


}