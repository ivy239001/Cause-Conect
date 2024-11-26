<script setup>
import { onMounted } from "vue";
import axios from "axios";

// ログイン状態通知用
const emit = defineEmits(["login-status-checked"]);

const checkLoginStatus = async () => {
  try {
    const response = await axios.get("/api/check-login"); // サーバーでログイン状態を確認
    emit("login-status-checked", response.data.isLoggedIn); // ログイン状態を親に通知
  } catch (error) {
    console.error("ログイン状態確認エラー:", error);
    emit("login-status-checked", false); // デフォルトで未ログインとみなす
  }
};

onMounted(() => {
  checkLoginStatus();
});
</script>

<template>
  <!-- 表示は不要。バックグラウンドで動作 -->
  <div></div>
</template>
