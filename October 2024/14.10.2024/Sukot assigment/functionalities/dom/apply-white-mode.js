import { toggleIconImage } from "./storage-elements-dom.js";
// This function is applying dark mode styles to the browser.
const applyWhiteMode = () => {
  // The reason I am holding the elements here and not calling them from the storage-El is because 
  //they are DOM and It need to be waited for the dom to load which will might cause an 
  //overload on the browser and effect the performance so I choose this way.
  const movieImgs = document.querySelectorAll('.movie-img');
  const whiteModeEls = document.querySelectorAll('.template-title-container, .search-results-container-title, .feedback-me-container-title, .about-us-container-title, .favorite-movies-container-title, .popular-movies-container-title, .trending-movies-container-title, .upcoming-movies-container-title, .currently-movies-in-theatres-container-title');
  const mobileNavTop = document.querySelector('.navbar-mobile')
  const footer = document.querySelector('footer')
  const mainEl = document.querySelector('main')

  toggleIconImage.src = '../images/user-activity/white-circle.svg';

  mainEl.style.cssText = `
  background: #f4f4f4;
  color: black;
  `

  footer.style.cssText = `
  background: black;
  `

  mobileNavTop.style.cssText = `
  background: black;
  `

  movieImgs.forEach((img) => {
    img.style.cssText = `
    opacity: 1 ;
    `;
  });

  whiteModeEls.forEach((titleContainer) => {
    titleContainer.style.cssText = `
      background: black;
      border-style: none;
    `;
  });
};

export { applyWhiteMode };
