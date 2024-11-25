<script setup>
import { ref } from 'vue';  // refをインポート
import { useRouter } from 'vue-router';  // vue-routerをインポート
import Search from '@/components/search.vue';
import Japan from '@/components/japan.vue';
import ImageSlide from '@/components/ImageSlide.vue';

// 検索クエリを保持するためのref
const searchQuery = ref('');
const router = useRouter();

// 検索ボタンがクリックされたときに呼ばれる関数
const searchRequests = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/list', query: { search: searchQuery.value } });
  }
};
</script>

<template>
  <div>
    <!-- Searchコンポーネントの使用 -->
    <Search v-model:searchQuery="searchQuery" @search="searchRequests" />
    <ImageSlide/>
    <Japan/>
    
    <div>
      <h1>ホームページ</h1>
      <p>ここにはホームページのコンテンツが表示されます。</p>
    </div>
  </div>
</template>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
