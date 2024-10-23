// Redirects the user to the homepage (index.html) with the search query, either by ID or name.
const redirectToHome = (params) => {
  window.location.href = `index.html?${params.toString()}`;
};

export { redirectToHome };
