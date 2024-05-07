import React from "react"
import { Link, useParams } from "react-router-dom"
import { nanoid } from 'nanoid'

export default function DogProfile() {
    
    const [dog, setDog] = React.useState([])
    const { type } = useParams()
    
    React.useEffect(() => {
        const url = `https://dog.ceo/api/breed/${type}/images`
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setDog(data.message)})
            
    }, [])
    console.log(dog)

    const dogPic = dog.map(url  => {
        return (
            <div key={nanoid()} className= "dogPics">
                <img id= "pic" src={url} />
            </div>
            
        )
    })

    return (
        <section>

        <h1 className="title">{type[0].toUpperCase()+type.slice(1).toLowerCase()}s</h1>
    
        <div className="dog-profile-container">
            {dog[0] ? (
                dogPic
            ) : <h2>Loading...</h2>}
        </div>
        
        </section>
             
    )


}