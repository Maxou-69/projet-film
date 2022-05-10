async function getMovies() {
    const url = "api link delete for securitie"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}
