<script setup>
import Search from '@/components/search.vue';

</script>


<template>
    <Search/>
  <div>
    <h1>ホームページ</h1>
    <p>ここにはホームページのコンテンツが表示されます。</p>

    <!-- 検索フォームコンポーネントを表示 -->
    <div class="search">
        <p>ここにはComponentが表示されます。</p>

      <sch /> <!-- コンポーネント名を大文字で使用 -->
    </div>
  </div> <!-- ルート要素は1つにまとめます -->
</template>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
