import { getData } from "./api-functions.js";
import { theatresContainer, currentTheaterPage } from "../DOM/storage-elements-dom.js";
import { createMovieCard } from "../DOM/dom-movies-cards.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";

const currentlyInTheaters = (pageNumber = 1) => {
  // Clear container for new data
  theatresContainer.innerHTML = "";

  // Fetch data for the current page
  getData(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`, (data) => {
    
    if (!data) {
      redirectToErrorPage();
      return;
    }

    if (data.results) {
      data.results.forEach(movie => {
        const movieCard = createMovieCard(movie);
        theatresContainer.appendChild(movieCard);
      });

      currentTheaterPage.style.display = "block";
      currentTheaterPage.textContent = `Page: ${pageNumber} / ${data.total_pages}`;
    } else {
      console.error("No valid data received from the API.");
    }
  });
};

export { currentlyInTheaters };
