<template>
    <div class="signup-container">
      <h1>メールアドレスで登録</h1>
      <form @submit.prevent="submitSignup">
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="メールアドレスを入力"
            required
          />
        </div>
        <button type="submit" :disabled="isSubmitting">送信</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        isSubmitting: false, // 送信中の状態を管理
      };
    },
    methods: {
      async submitSignup() {
        this.isSubmitting = true;
        try {
          // 送信処理（API呼び出しの例）
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: this.email }),
          });
  
          if (!response.ok) {
            throw new Error('サインアップに失敗しました');
          }
  
          alert('サインアップが成功しました！');
        } catch (error) {
          console.error(error);
          alert('エラーが発生しました。もう一度お試しください。');
        } finally {
          this.isSubmitting = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  </style>
  