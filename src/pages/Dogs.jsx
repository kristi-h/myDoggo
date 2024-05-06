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
                <p>{dog.pics.map((item, index) => {
                        return(
                            <>
                            <p key={item[index]}>{item? `Type: ${item}`:null}</p> </>)}
                           
                        )}</p>
            </>
        )
      })

    {/*
    const doggos = Object.entries(dogs)
    const pics = Object.values(dogs)
    const eachBreed = doggos.map(breed =>
     
            <h3 key={breed.nanoid}>{breed}</h3>
            breed.pics.map(pic, index => 
                <p>{index}</p>
                <p>{pic}</p>
            )
        )
        */}

    return(
        <div className="dog-list-container">
            <div className="dog-list">
                {dogEl}
            
                {/*{
                    dogs.length > 0 ? (
                        <section>
                            
                             {dogEle(dogs, v => v.map(pic => pic))} 
                        </section>
                    ) : (
                            <h2>Loading...</h2>
                        )
                }*/} 
            </div>
        </div>
    )
}


