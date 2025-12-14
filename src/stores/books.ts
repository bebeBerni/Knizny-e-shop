import { defineStore } from 'pinia'

import book1984 from '@/assets/1984.jpg'
import malyPrinc from '@/assets/maly_princ.jpg'
import pride from '@/assets/pride.jpg'

export const useBooksStore = defineStore('books', {
    state: () => ({
    books: [
        { id: 1, title: '1984', author: 'George Orwell', price: 12.9, image: book1984, genre: 'Dystopia' },
        { id: 2, title: 'Malý princ', author: 'Antoine de Saint-Exupéry', price: 8.5, image: malyPrinc, genre: 'Poveda' },
        { id: 3, title: 'Pýcha a predsudok', author: 'Jane Austen', price: 10.0, image: pride, genre: 'Román' }
    ]
}),
getters: {
    getBookById: (state) => {
        return (id) => state.books.find(b => b.id === id)
    }
}
})