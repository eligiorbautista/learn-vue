const app = Vue.createApp({
    // data, functions
    // template : '<h2>I am the template</h2> '
    data() { // shorthand function inside an object
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },

        handleEvent(event) {
            console.log(event);
        }

        // changeTitle (newTitle) {
        //     this.title = newTitle
        // }
    }
});

app.mount('#app')