// console.log(navigator.appVersion);

function Book(title, author){
    this.title = title;
    this.author = author;
    this.getSummary = () => {
        return `${this.title} was written by ${this.author}.`;
    }
}
const book1 = new Book('Harry Potter and The Deathly Hollows', 'J.K. Rowling');
// console.log(book1.getSummary());
console.log(book1);

Book.prototype.getTitle = () => {
    return `${this.title}`;
}

console.log(book1);