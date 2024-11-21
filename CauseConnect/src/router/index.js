import { createRouter, createWebHistory } from 'vue-router';

// ページコンポーネントのインポート
import App from './App.vue';
import FAQ from '../views/FAQ.vue';
import Login from '../views/LoginView.vue';

// ルート定義
const routes = [
  {
    path: '/',
    name: 'App',
    component: App, // トップページ
  },
  {
    path: '/qanda',
    name: 'FAQ',
    component: FAQ, // FAQページ
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, // ログインページ
  },
];

// Vue Routerのインスタンスを作成
const router = createRouter({
  history: createWebHistory(), // HTML5 Historyモード
  routes,
});

export default router;
