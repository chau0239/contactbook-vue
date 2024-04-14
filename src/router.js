import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import AddNewContact from './components/AddNewContact.vue';
import ContactDetails from './components/ContactDetails.vue';
import EditContact from './components/EditContact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-new-contact', component: AddNewContact },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/edit/:id', component: EditContact }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;
