import { createRouter, createWebHistory } from 'vue-router';

// ページコンポーネントのインポート
import App from '';
import FAQ from '';
import Login from '';

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
    component: Login, // ログインページ
  },
];

// Vue Routerのインスタンスを作成
const router = createRouter({
  history: createWebHistory(), // HTML5 Historyモード
  routes,
});

export default router;
