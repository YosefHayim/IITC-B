import { homepageMainDiv } from "./storage-elements-dom.js";
// Homepage images effect for toggle.
const homepageContainerButtons = () => {
  homepageMainDiv.addEventListener('click', (ev) => {
    const img = ev.target.closest('img');

    if (img) {
      img.classList.toggle('grayscale');
    }
  });
  
};

export { homepageContainerButtons };