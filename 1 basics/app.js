const app = Vue.createApp({
    // data, functions
    // template : '<h2>I am the template</h2> '
    data() { // shorthand function inside an object
        return {
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,

            url: 'https://eligiobautista.site',

            books: [
                { title: "name of the wind", author: 'patrick rothfuss', img: './assets/1.jpg', isFav: true },
                { title: "the way of the kings", author: 'brandon sanderson', img: './assets/2.jpg', isFav: false },
                { title: "the final empire", author: 'brandon sanderson', img: './assets/3.jpg', isFav: true },
            ]
            // x: 0,
            // y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },

        /* 
        Challenge - Add to Favs
        - attach a click event to each li tag (for each book)
        - when a user clicks an li, toggle the 'isFav' property of that book
        */

        toggleFav(book) {
            book.isFav = !book.isFav;
        },

        // handleEvent(event, data) {
        //     console.log(
        //     `Event Type        : ${event.type}`);
        //     if (data) {
        //         console.log(data);
        //     }
        // },

        // handleMouseMove(event) {
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;

        // }

        // changeTitle (newTitle) {
        //     this.title = newTitle
        // }
    },
    // Computed Properties
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app')