import { createRouter, createWebHistory } from 'vue-router'

import ContactManager from "@/views/ContactManager";
import AddContact from '@/views/AddContact.vue'
import EditContact from '@/views/EditContact.vue'
import ViewContact from '@/views/ViewContact.vue'
import PageNotFound from '@/views/PageNotFound.vue'


const routes = [
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
