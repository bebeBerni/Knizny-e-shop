import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BookList from '@/views/BookList.vue'
import BookDetail from '@/views/BookDetail.vue'
import CartPage from '@/views/CartPage.vue'
import NotFound from '@/views/NotFound.vue'
import AboutView from '@/views/AboutView.vue'
import Contact from '@/views/Contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/knihy',
      name: 'book',
      component: BookList,
    },
    {
      path: '/knihy/:id',
      name: 'bookdetail',
      component: BookDetail,
    },
    {
      path: '/kosik',
      name: 'cart',
      component: CartPage,
    },
    { path: '/o-nas',
      name: 'about', 
      component: AboutView 
    },
    { path: '/kontakt',
      name:'contact', 
      component: Contact 
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFound
    }
  ],
})

export default router
