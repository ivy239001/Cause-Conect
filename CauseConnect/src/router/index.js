import { createRouter, createWebHistory } from 'vue-router';

// ページコンポーネントのインポート
import App from '@/App.vue'; // App.vue をインポート
import FAQ from '@/views/FAQ/FAQ.vue'; // FAQ ページのインポート
import LoginView from '@/views/LoginForm/LoginView.vue'; // ログインページのインポート

// ルート定義
const routes = [
  {
    path: '/',
    name: 'App',
    component: App, // トップページ
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ, // FAQページ
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView, // ログインページ
  },
];

// Vue Routerのインスタンスを作成
const router = createRouter({
  history: createWebHistory(), // HTML5 Historyモード
  routes,
});

export default router;
