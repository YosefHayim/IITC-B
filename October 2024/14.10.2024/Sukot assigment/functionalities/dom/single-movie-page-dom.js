import { singlePageMovieData } from "./storage-elements-dom.js";
import { isImageNull } from "./is-image-null-dom.js";
import { isNameToLong } from "./is-movie-title-long-dom.js";
import { getStarRatingImage } from "./rating-movie-stars-img-dom.js";
import { createDomEl } from "./create-div-dom.js";
import { displayAlertMessage } from "./alert-message-dom.js";
import { getReleaseStatus } from "./is-release-date-dom.js";
import { displayMovieGenres } from "./creating-movie-genres-dom.js";
import { roundMovieRating } from "./round-rating-movie-dom.js";


const renderSingleMoviePage = (singleMovieData,creditsData,videoUrl) => {
  
  const image = isImageNull(singleMovieData.poster_path);
  const isReleased = getReleaseStatus(singleMovieData.release_date)
  const resultRatingImg = getStarRatingImage(singleMovieData.vote_average)
  const movieGenres = displayMovieGenres(singleMovieData.genres)
  const roundRatingFloat = roundMovieRating(singleMovieData.vote_average)
  const movieName = singleMovieData.original_title
  const urlWeb = singleMovieData.homepage
  const overviewMovie = singleMovieData.overview
  
  let buttonText = 'Watch the trailer'
  displayAlertMessage('success-received-movie-data',movieName)

  if (!videoUrl) {
    buttonText = 'No trailer available.'
    displayAlertMessage('no-youtube-video-available',movieName)
  }
  

  singlePageMovieData.innerHTML = `
  <div class="single-img-container">
  <h1 class="title-single-movie">${movieName}</h1>
  <div class="rating-container">
  <img src="${resultRatingImg}" alt="rating-img" class="rating-img">
  <h2 class="rating-number-txt">${roundRatingFloat}</h2>
  </div>
  <img src="${image}" alt="movie-img" class="single-movie-img">
  <h2 class="movie-release">Movie release: ${isReleased}</h2>
  <h2 class"movie-genre">Movie genres: ${movieGenres}</h2>
  <h3 class="summary-title">Summary</h3>
  <p class="movie-details">${overviewMovie}</p>
  <button class="movie-link">
  <a href="${urlWeb}" target="_blank" class="website-link">Website Movie</a>
  </button>
  <div class="video-container">
  <button class="button-trailer">
  <a href="https://www.youtube.com/watch?v=${videoUrl}" class="link-trailer">${buttonText}</a></button>
  </div>
  </div>
  `;
  
  const videoContainer = document.querySelector('.video-container')

  const castContainer = createDomEl()
  const castContainerTitle = createDomEl()
  castContainerTitle.innerHTML = `
  <h1 class="actors-title">Actors of the <span class="movie-name">movie</span>: ${movieName}</h1>`
  videoContainer.insertAdjacentElement('afterend',castContainerTitle)

  castContainer.classList.add('cast-container');
  singlePageMovieData.appendChild(castContainer);

  if (!creditsData.cast || creditsData.cast.length === 0) {
    castContainer.textContent = `This movie doesn't have actors yet, oh baba...`
    castContainer.style.fontSize = `3em`
  }

  creditsData.cast.slice(0, 10).forEach(actor => {
    const actorDiv = createDomEl()
  
    actorDiv.classList.add('actor');
    const actorName = isNameToLong(actor.name)
    const image = isImageNull(actor.profile_path)        
    
    actorDiv.innerHTML = `
      <div class="img-name-container">
      <img src="${image}" alt="${actorName}" class="actor-img">
      <p class="actor-name">${actorName}</p>
      </div>
    `;

    castContainer.appendChild(actorDiv);
  }
  )
}

export {renderSingleMoviePage}