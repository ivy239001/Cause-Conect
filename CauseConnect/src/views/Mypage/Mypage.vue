<template>
    <div class="mypage-container">
      <h1>マイページ</h1>
      <form @submit.prevent="updateUser">
        <!-- ユーザー情報フォーム -->
        <div v-for="(value, key) in userForm" :key="key" class="form-group">
          <label :for="key">{{ labels[key] }}</label>
          <input
            v-if="key !== 'icon'"
            :type="key === 'password' ? 'password' : 'text'"
            :id="key"
            v-model="userForm[key]"
            :placeholder="labels[key]"
          />
          <!-- アイコンアップロード -->
          <input v-else type="file" id="icon" @change="handleIconUpload" />
        </div>
  
        <!-- 更新ボタン -->
        <button type="submit">更新</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  // データとラベル定義
  const userForm = reactive({
    nickname: '',
    name: '',
    kana: '',
    birth: '',
    sex: '',
    tel: '',
    email: '',
    intro: '',
    icon: null, // ファイル
  });
  const labels = {
    nickname: 'ニックネーム',
    name: '名前',
    kana: 'カナ',
    birth: '生年月日',
    sex: '性別',
    tel: '電話番号',
    email: 'メールアドレス',
    intro: '自己紹介',
    icon: '写真',
  };
  
  // フィードバック用メッセージ
  const message = ref('');
  
  // アイコンアップロード処理
  const handleIconUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      userForm.icon = file;
    }
  };
  
  // ユーザー情報を取得
  const fetchUser = async (id) => {
    try {
      const response = await axios.get(`/user/${id}`);
      Object.assign(userForm, response.data); // データを反映
    } catch (error) {
      console.error('ユーザー情報の取得に失敗しました', error);
    }
  };
  
  // ユーザー情報を更新
  const updateUser = async () => {
    try {
      const formData = new FormData();
      Object.entries(userForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      const response = await axios.post('/user/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      message.value = response.data.message;
    } catch (error) {
      console.error('更新に失敗しました', error);
      message.value = '更新に失敗しました';
    }
  };
  
  // 初期化処理
  onMounted(() => {
    const userId = 1; // 仮のユーザーID
    fetchUser(userId);
  });
  </script>
  
  <style scoped>
  .mypage-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #ffcb60;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #feb626;
  }
  
  .message {
    margin-top: 15px;
    color: green;
    text-align: center;
  }
  </style>
  