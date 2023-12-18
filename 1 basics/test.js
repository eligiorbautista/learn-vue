books = [
    { name: "First Book", author: "Eli Bautista", isEli: true },
    { name: "Second Book", author: "Trina Sambas", isEli: false },
    { name: "Third Book", author: "Eli Bautista", isEli: true },
]


function displayBooks () {
    return books.filter((book) => book.isEli);
}

console.log(books.filter((book) => book.isEli));