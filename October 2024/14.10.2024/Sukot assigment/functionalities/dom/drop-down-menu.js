import { dropDownMenu } from "./domEls.js";
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";

// Determines whether to fetch movies of the day or week based on user selection
const isDayOrWeek = () => {
  dropDownMenu.addEventListener('click', (ev) => {
    ev.preventDefault();

    const pageClicked = ev.target.closest('a').textContent;

    if (pageClicked === 'Popular of the Day') {
      popularMoviesOfDay();
    } else {
      popularMoviesOfWeek();
    }
  });
};

export { isDayOrWeek };
