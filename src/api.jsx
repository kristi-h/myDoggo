export async function getAllBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch dogs", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    const dogsData = await Object.keys(data.message).map(key  => ({ breed: key, subbreed: data.message[key] }))
    return dogsData
}
   