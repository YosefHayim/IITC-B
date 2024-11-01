import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";
import { singlePageMovieData } from "../../dom/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";

const singleMoviePageListener = (totalPeopleVote, ratingScore) => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");

  ["click", "mouseover", "mouseout"].forEach((event) => {
    singlePageMovieData.addEventListener(event, (ev) => {
      ev.preventDefault();

      const favoriteBtn = ev.target.closest(".fav-button-movie-single-page");
      const ratingNumber = ev.target.closest(".rating-number-txt");

      if (favoriteBtn) {
        const isAdded = isMovieAddedFav(movieId);
        if (!isAdded) {
          displayAlertMessage("success-added-single-movie-to-fav-list");
          addfavoriteMovieToList(movieId);
        } else {
          favoriteBtn.textContent = `Movie already in favorite list.`;
        }
      }

      if (ratingNumber && event === "mouseover") {
        ratingNumber.textContent = `Total people vote: ${totalPeopleVote}`;
      } else {
        ratingNumber.textContent = `${ratingScore}`;
      }
    });
  });
};

export { singleMoviePageListener };
