export async function getDogsImg() {
        const url = "https://dog.ceo/api/breeds/list/all"
        const resp = await fetch(url)
        if (!resp.ok) {
            throw {
                message: "Failed to fetch dogs",
                statusText: resp.statusText,
                status: resp.status
            }
        }
        const data = await resp.json()
        return data.message
  