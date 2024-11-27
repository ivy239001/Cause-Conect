import { createApp } from 'vue';
import App from './App.vue'; // App.vue をインポート
import router from './router'; // 作成した router をインポート
import Sarch from '@/components/search.vue'; // 作成した router をインポート
import './styles/button.css'; // グローバルに読み込む
import RealTimeClock from './components/RealTimeClock.vue';

createApp(App)
  .use(router) // router を使用
  .mount('#app'); // #app 要素にマウント
