<template>
    <div class="login-form">
      <h2>ログイン</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">メールアドレス</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="password">パスワード</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">ログイン</button>
      </form>
      <button @click="handleGoogleLogin">Googleでログイン</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('/api/login', {
            email: this.email,
            password: this.password,
          });
          console.log('ログイン成功:', response.data);
        } catch (error) {
          console.error('ログイン失敗:', error.response.data);
        }
      },
      async handleGoogleLogin() {
        // Googleログイン処理（例：OAuth URLを開く、ポップアップのハンドリング）
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
  }
  </style>
  