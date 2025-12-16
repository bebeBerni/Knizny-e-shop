import { defineStore } from 'pinia'

import book1984 from '@/assets/1984.jpg'
import malyPrinc from '@/assets/maly_princ.jpg'
import pride from '@/assets/pride.jpg'
import itBook from '@/assets/itBook.jpg'
import hp1 from '@/assets/hp1.jpg'
import lotr1 from '@/assets/lotr1.jpg'
import zlocinTrest from '@/assets/zlocinTrest.jpeg'

export const useBooksStore = defineStore('books', {
    state: () => ({
    books: [
    { id: 1, title: '1984', author: 'George Orwell', price: 12.9, image: book1984, genre: 'Dystopia' },
    { id: 2, title: 'Malý princ', author: 'Antoine de Saint-Exupéry', price: 8.5, image: malyPrinc, genre: 'Poveda' },
    { id: 3, title: 'Pýcha a predsudok', author: 'Jane Austen', price: 10.0, image: pride, genre: 'Román' },
    { id: 4, title: 'To', author: 'Stephen King', price: 14.5, image: itBook, genre: 'Horor' },
    { id: 5, title: 'Harry Potter a Kameň mudrcov', author: 'J. K. Rowling', price: 11.9, image: hp1, genre: 'Fantasy' },
    { id: 6, title: 'Pán prsteňov: Spoločenstvo prsteňa', author: 'J. R. R. Tolkien', price: 15.9, image: lotr1, genre: 'Fantasy' },
    { id: 7, title: 'Zločin a trest', author: 'Fiodor Michajlovič Dostojevskij', price: 13.4, image: zlocinTrest, genre: 'Klasika' }
]

}),
getters: {
    getBookById: (state) => {
        return (id) => state.books.find(b => b.id === id)
    }
}
})