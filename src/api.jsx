export async function getAllBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch dogs list", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    const dogsData = await Object.keys(data.message).map(key  => ({ breed: key, subbreed: data.message[key] }))
    return dogsData
}
export async function getSubBreeds(type) {
    const url = `https://dog.ceo/api/breed/${type}/images`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch dog type", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.message
}


export async function getRandomImgs() {
    const url = "https://dog.ceo/api/breeds/image/random/4"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to load dog images", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    console.log(data.message)
    return data.message
}