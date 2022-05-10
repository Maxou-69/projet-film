async function getMovies() {
    const url = "https://www.omdbapi.com/?s=star%20wars&plot=short&apikey=2a4831ba"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}


const data = getMovies().then(function (movies) {


    console.log(movies)
    movies.forEach(function (movie) {
        console.log(movie.Title)
    })

    movies.forEach(function (movie) {
        console.log(movie.Year)
    })

    movies.forEach(function (movie) {
        const divMovieTitle = document.createElement("div")
        divMovieTitle.textContent = movie.Title
        document.body.appendChild(divMovieTitle)
    })

    movies.forEach(function (movie) {
        const divMovieYear = document.createElement("div")
        divMovieYear.textContent = movie.Year
        document.body.appendChild(divMovieYear)
    })

    movies.forEach(function (movie) {
        const img = document.createElement("img")
        img.setAttribute("src", movie.Poster)
        document.body.appendChild(img)
    })
}) 