let carddoc = document.querySelector(".animation");


// appel à l'api
async function getMovies(searchValue = "jurassic_park") {
    const url = "https://www.omdbapi.com/?s=" + searchValue + "&plot=short&apikey=2a4831ba"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}
// traitement des données de l'api
function generateMoviesList(searchValue) {
    getMovies(searchValue).then(function (movies) {
        console.log(movies)

        movies.forEach(function (movie) {
            // description des cartes
            const card = document.createElement("div")
            card.classList.add("cardapi")

            const img = document.createElement("img")
            img.setAttribute("src", movie.Poster)
            img.classList.add("card-img-top")
            card.appendChild(img)

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
            card.appendChild(cardBody)

            const cardTitle = document.createElement("h5")
            cardTitle.classList.add("card-title")
            cardTitle.textContent = movie.Title
            cardBody.appendChild(cardTitle)

            const cardText = document.createElement("p")
            cardText.classList.add("card-text")
            cardText.textContent = movie.Year
            cardBody.appendChild(cardText)

            const cardButton = document.createElement("a")
            cardButton.classList.add("card-button")
            cardButton.setAttribute('href', "https://www.imdb.com/title/" + movie.imdbID);
            cardButton.setAttribute("target", "_blank")
            cardButton.innerHTML = '<button type="button" class="btn btn-outline-light">Voir plus</button>'
            cardBody.appendChild(cardButton)

            // application résultat
            carddoc.appendChild(card)
        })
    })
}
// modif  alignement des cartes ajouter animation pour chaque carte
// Execution du code au chargement de la page

// Au chargement, on génère la liste par défaut avec recherche star wars
generateMoviesList()

// Au clic sur le bouton, on envoie la recherche tapée à la même fonction
// Après avoir vidé le HTML
document.querySelector("button").addEventListener("click", function () {
    var searchValue = document.getElementById("new").value;

    carddoc.innerHTML = ""
    generateMoviesList(searchValue)
})