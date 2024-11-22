import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import FAQ from '@/views/FAQ/FAQ.vue';
import Login from '@/views/LoginForm/LoginView.vue';
import Info from '@/views/Info/Info.vue'; // Infoページ
import Toko from '@/views/Toko/Toko.vue'; // Tokoページ

const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/FAQ', name: 'FAQ', component: FAQ },
  { path: '/login', name: 'Login', component: Login },
  { path: '/info', name: 'Info', component: Info },
  { path: '/Toko', name: 'Toko', component: Toko }, // Tokoルート
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
