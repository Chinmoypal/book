// Book.js
// Book constructor function
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // Adding getSummary method to Book's prototype
    getSummary() {
        return `${this.title} by ${this.author} published in ${this.year}`;
    }
}


// Export Book constructor function
module.exports = Book;
