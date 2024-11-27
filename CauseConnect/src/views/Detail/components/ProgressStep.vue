<script setup>
import Chat from './P1_chat.vue';
import Hokoku from './P2_Hokoku.vue'; // 'Hokoku' コンポーネントを正しくインポート
import Shonin from './P3_shonin.vue'; // 'Hokoku' コンポーネントを正しくインポート

</script>

<template>
  <div class="participants-info">
    <h2>進行度1</h2>
    <p>ここに進行度1の内容を配置します。</p>
    <Chat/> <!-- 進行度1に関連するChatコンポーネントを表示 -->

    <h2>進行度2</h2>
    <p>ここに進行度2の内容を配置します。</p>
    <Hokoku/> <!-- 進行度2に関連するHokokuコンポーネントを表示 -->
    <h2>進行度3</h2>
    <p>ここに進行度3の内容を配置します。</p>
    <Shonin/> <!-- 進行度2に関連するHokokuコンポーネントを表示 -->

  </div>
</template>

<style scoped>
.participants-info {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}
</style>
