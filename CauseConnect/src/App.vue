<template>
  <div id="app">
    <!-- ナビゲーションバー（常に表示） -->
    <Navi />

    <!-- ここにページ遷移によって切り替わるコンテンツを表示 -->
    <router-view /> <!-- 遷移先のコンテンツが表示されます -->
  </div>
</template>

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

  /* 必要に応じてスタイルを追加 */
  </style>

