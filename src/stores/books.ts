import { defineStore } from 'pinia'


export const useBooksStore = defineStore('books', {
    state: () => ({
    books: [
        { id: 1, title: '1984', author: 'George Orwell', price: 12.9, image: '/images/1984.jpg', genre: 'Dystopia' },
        { id: 2, title: 'Malý princ', author: 'Antoine de Saint-Exupéry', price: 8.5, image: '/images/maly-princ.jpg', genre: 'Poveda' },
        { id: 3, title: 'Pýcha a predsudok', author: 'Jane Austen', price: 10.0, image: '/images/pride.jpg', genre: 'Román' }
    ]
}),
getters: {
    getBookById: (state) => {
        return (id) => state.books.find(b => b.id === id)
    }
}
})