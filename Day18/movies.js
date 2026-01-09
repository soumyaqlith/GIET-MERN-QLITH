let moviesContainer = document.getElementById("movies-container");
let API_KEY = "8a515b2b"
let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");
let movieModal = document.getElementById("movie-modal");
let movieContent = document.getElementById("modal-content");

function displayMovies(movies) {
    moviesContainer.innerHTMl = "";

    movies.map((movie) => {
        moviesContainer.innerHTML += `
        <div class="rounded bg-white shadow hover:scale-105 transition cursor-pointer"
         onclick="getMoviesDetails('${movie.imdbID}')"
        >
           <img 
             src="${movie.Poster}"
             class="rounded h-64 w-full object-cover"
           />
            <div class="p-3">
              <h3 class="font-bold text-sm">${movie.Title}</h3>
              <p class="text-xs text-gray-500">${movie.Year}</p>
            </div>
        </div>
        `;
    })
}

async function loadDefaultMovies() {

    try {
        // moviesContainer.innerHTML = "<p>Loading ... </p>"
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=all`);
        let data = await res.json();
        if (data.Response === "False") {
            moviesContainer.innerHTML = "<p class='text-red-500'>No movies found ...</p>"
        }

        displayMovies(data.Search)
    } catch (error) {
        console.log("something went wrong")
    }
}

window.addEventListener("load", () => {
    loadDefaultMovies()
})

async function moviesBasedOnSearch() {
    let search = searchInput.value.trim();

    moviesContainer.innerHTML = ""

    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        let data = await res.json();
        if (data.Response === "False") {
            moviesContainer.innerHTML = "<p class='text-red-500'>No movies found ...</p>"
        }

        displayMovies(data.Search)

    } catch (error) {
        console.log("Some thing went wrong")
    }
}

searchBtn.addEventListener("click", () => {
    moviesBasedOnSearch()
})

async function getMoviesDetails(id) {
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        let data = await res.json()
        movieContent.innerHTML = `
        <img src="${data.Poster}" alt="" class="w-full h-64 object-cever rounded mb-4">
        <h2 class="text-xl font-bold mb-2">${data.Title}</h2>
        <p class="text-sm mb-2">${data.Year}</p>
        <p class="text-sm mb-2">${data.Genre}</p>
        <p class="text-sm mb-2">${data.imdbRating}</p>
        <p class="text-sm text-gray-600">${data.Plot}</p>
        `

        movieModal.classList.remove("hidden");
        movieModal.classList.add("flex");
    } catch (error) {
        console.log("Something went wrong")
    }
}


function closeModal(){
    movieModal.classList.add("hidden");
    movieModal.classList.remove("flex")
}