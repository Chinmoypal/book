// app.js
// Import the array of Book instances
const books = require('./books');

// Use Array.prototype.map to create an array of summaries
const bookSummaries = books.map(book => book.getSummary());

// Log the array of book summaries to the console
console.log(bookSummaries);