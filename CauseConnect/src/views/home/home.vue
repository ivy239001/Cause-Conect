<script>
import Search from '@/components/search.vue'; // エイリアスを使ってインポート
</script>

<template>
  <div>
    <h1>ホームページ</h1>
    <p>ここにはホームページのコンテンツが表示されます。</p>

    <!-- 検索フォームコンポーネントを表示 -->
    <div class="search">
        <p>ここにはComponentが表示されます。</p>

      <Search /> <!-- コンポーネント名を大文字で使用 -->
    </div>
  </div> <!-- ルート要素は1つにまとめます -->
</template>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
