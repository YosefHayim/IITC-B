import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { templateTitle } from "../DOM/storage-elements-dom.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";

const popularMoviesOfDay = async (count) => {
  let defaultPage = 1;

  try {
    const data = await getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${count ? count : defaultPage}&api_key=${apiKey}`);

    if (!data) {
      redirectToErrorPage();
      return;
    }

    displayMovies('Todays must watch popular movies page',data)
    templateTitle.textContent = `${data.total_results} Movies Of Today's must watch: ${data.page}/${data.total_pages}`;
    console.log(`popularMoviesOfDay - Total Pages: ${data.total_pages}`);

  } catch (error) {
    console.error('Error fetching popular movies of the day:', error);
    redirectToErrorPage();
  }
};

export { popularMoviesOfDay };
