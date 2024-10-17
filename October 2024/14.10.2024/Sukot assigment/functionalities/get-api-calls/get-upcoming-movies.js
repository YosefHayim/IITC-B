import { getData } from "../api-functions.js";
import { createMovieCard } from "../dom/dom-movies-cards.js";
import { upComingMoviesContainer, currentPage } from "../dom/domEls.js";

let countPage = 1;

const upComingMovies = (pageNumber = 1) => {
  upComingMoviesContainer.innerHTML = "";

  getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`, (data) => {
    if (data && data.results) {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        upComingMoviesContainer.appendChild(movieCard);
      });
      currentPage.style.display = `block`;
      currentPage.textContent = `${pageNumber} / ${data.total_pages - pageNumber} PAGES`;
    } else {
      console.error("No data received from the API.");
    }
  });
};

export { upComingMovies };
