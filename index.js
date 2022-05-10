async function getMovies() {
    const url = "https://www.omdbapi.com/?s=star%20wars&plot=short&apikey=2a4831ba"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}