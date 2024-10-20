import { getData } from "./api-functions.js";
import { copyToClipboard } from "../Event-listeners/copy-to-clipboard-el.js";
import { apiKey } from "../global/env.js";

const getMoviesTrailers = (movieId, movieCardDiv) => {

  // Fetch movie details along with videos (trailers)
  getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`, (data) => {

    if (!data) {
      console.log(`Error fetching data`);
      redirectToErrorPage();
      return;
    }

    // Find the first video (trailer) with type "Trailer"
    const video = data.videos?.results?.find(vid => vid.type === "Trailer" && vid.key);

    if (video) {
      const trailerUrl = `https://www.youtube.com/watch?v=${video.key}`;

      // Select elements within the movie card of homepage
      const playButton = movieCardDiv.querySelector('.play-button-btn');      
      const shareButton = movieCardDiv.querySelector('.white-share-trailer-btn');
      const imgTrailerLink = movieCardDiv.querySelector('.img-trailer-link');

      // Set trailer URLs for play, share, and image links if elements exist
      if (playButton && imgTrailerLink && shareButton) {
        playButton.setAttribute('href', trailerUrl);
        shareButton.setAttribute('href', trailerUrl);
        imgTrailerLink.setAttribute('href', trailerUrl);
        copyToClipboard(shareButton, trailerUrl);
        
      } else {
        const favImgBox = movieCardDiv.querySelector('.fav-movie-trailer-url') 
        const favPlayBtn = movieCardDiv.querySelector('.fav-play-button-btn');
        const favShareBtn = movieCardDiv.querySelector('.fav-white-share-trailer-btn');

        if (favPlayBtn && favShareBtn) {
          favPlayBtn.setAttribute('href', trailerUrl);
          favShareBtn.setAttribute('href', trailerUrl);
          favImgBox.setAttribute('href',trailerUrl)
        }
      }
    } else {
      const playButton = movieCardDiv.querySelector('.play-button-img');    
      playButton.src = `/IITC-B/October 2024/14.10.2024/Sukot assigment/images/user-activity/no-trailer-available-img.svg`
    }
  });
};

export { getMoviesTrailers };
