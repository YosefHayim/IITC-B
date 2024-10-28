const jokes = [
  { id: 1, text: "Why did the coffee file a police report? It got mugged." },
  { id: 2, text: "I told my computer I needed a break, and now it won’t stop sending me on vacation ads!" },
  { id: 3, text: "Parallel lines have so much in common… it’s a shame they’ll never meet." }
];

const products = [
  { id: 1, name: "Wireless Earbuds", price: 29.99, category: "Electronics" },
  { id: 2, name: "Yoga Mat", price: 19.99, category: "Sports" },
  { id: 3, name: "Stainless Steel Water Bottle", price: 15.99, category: "Accessories" }
];

const usernames = [
  { id: 1, username: "cool_cat42", email: "cat42@example.com" },
  { id: 2, username: "jane_doe91", email: "jane91@example.com" },
  { id: 3, username: "tech_guru21", email: "guru21@example.com" }
];

const randomJoke = jokes[Math.floor(Math.random()) * jokes.length].text
const randomProducts = products[Math.floor(Math.random()) * products.length].name
const randomUsername = usernames[Math.floor(Math.random()) * usernames.length].username

export {randomJoke,randomProducts,randomUsername}