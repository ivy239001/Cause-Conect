<<<<<<< HEAD
=======

>>>>>>> 549d95cd8d0b6c285ea6cebbbca3862f36e17f50
<script setup>
import Navi from './components/Nav.vue'; // ナビゲーションバーコンポーネントをインポート
</script>

<template>

    <div id="app">
      <!-- ナビゲーションバー（常に表示） -->
      <Navi />

      <!-- ここにページ遷移によって切り替わるコンテンツを表示 -->
      <router-view/> <!-- 遷移先のコンテンツが表示されます -->
    </div>
  </template>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

  /* 必要に応じてスタイルを追加 */
  </style>

