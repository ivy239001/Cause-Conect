import axios from 'axios';

// バックエンドのIPアドレスとポートを指定
axios.defaults.baseURL = 'http://172.16.3.136:8000';  // Laravelのバックエンド

export default axios;
