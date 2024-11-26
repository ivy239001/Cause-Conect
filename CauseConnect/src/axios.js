import axios from 'axios';

// ベースURLの設定（Laravelバックエンドが http://localhost:8000 で動作している場合）
axios.defaults.baseURL = 'http://localhost:8000';  // ここをバックエンドのURLに変更

// ヘッダー設定（必要な場合）
axios.defaults.headers.common['Content-Type'] = 'application/json';  // JSONデータを送る場合

export default axios;
