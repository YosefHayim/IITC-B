import { allInputsContainers } from "../../DOM/storage-elements-dom.js";
import { searchMovieById } from "../../get-api-calls/get-movie-id-by-id.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";

const handleMovieSearchByIdOrName = () => {
  allInputsContainers.forEach(form => {

    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      const inputValue = form.querySelector('input').value.trim();
      // Redirect to error page if input is empty
      if (!inputValue) {
        displayAlertMessage('input-error',inputValue)
        redirectToErrorPage()
        return;
      }

      let params = new URLSearchParams(window.location.search);
      params.set('query', inputValue);
      window.history.replaceState({}, '', `${window.location.pathname}?${params}`);

      // Check if input is a name (letters only)
      if (/^[a-zA-Z]+$/.test(inputValue)) {
        searchMovieByName(inputValue);
        return;

      // Check if input is an ID (numbers only)
      } else if (/^[0-9]+$/.test(inputValue)) {
        searchMovieById(inputValue);
        return;

      // Redirect to error page if input is invalid
      } else {
        displayAlertMessage('input-error',inputValue)
        return;
      }
    });
  });
};

export { handleMovieSearchByIdOrName };
