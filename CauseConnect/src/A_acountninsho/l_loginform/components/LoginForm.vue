<template>
    <div class="login-form">
      <h1>ログイン</h1>
      <form @submit.prevent="submitLogin">
        <!-- メールアドレス入力 -->
        <InputField
          v-model="email"
          label="メールアドレス"
          type="email"
          placeholder="例: user@example.com"
        />
        <!-- パスワード入力 -->
        <InputField
          v-model="password"
          label="パスワード"
          type="password"
          placeholder="パスワードを入力"
        />
        <!-- ログインボタン -->
        <button type="submit">ログイン</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import InputField from "./InputField.vue"; // 入力フィールドコンポーネントをインポート
  import { login } from "../services/api"; // API通信関数をインポート
  
  export default {
    components: {
      InputField,
    },
    data() {
      return {
        email: "", // メールアドレスの入力内容
        password: "", // パスワードの入力内容
        errorMessage: null, // エラーメッセージ
      };
    },
    methods: {
      async submitLogin() {
        try {
          const response = await login(this.email, this.password);
          console.log("ログイン成功:", response);
          this.errorMessage = null;
          // ログイン成功時の処理（例: トークン保存、画面遷移）
        } catch (error) {
          this.errorMessage = "ログインに失敗しました。メールアドレスまたはパスワードをご確認ください。";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  