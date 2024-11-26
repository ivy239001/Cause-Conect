import axios from 'axios';

<<<<<<< HEAD
// バックエンドのIPアドレスとポートを指定
axios.defaults.baseURL = 'http://172.16.3.136:8000';  // Laravelのバックエンド
=======
// ベースURLの設定（Laravelバックエンドが http://localhost:8000 で動作している場合）
axios.defaults.baseURL = 'http://172.16.3.136:8000';  // ここをバックエンドのURLに変更

// ヘッダー設定（必要な場合）
axios.defaults.headers.common['Content-Type'] = 'application/json';  // JSONデータを送る場合
>>>>>>> 2021b71783c121a4f25565e3b34eeead8309902a

export default axios;
