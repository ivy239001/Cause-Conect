<script setup>
import { ref } from "vue";
import RequestItem from "./RequestItem.vue"; // RequestItemコンポーネントをインポート

// ダミーデータの依頼リスト
const requests = ref([
  {
    id: 1,
    name: "地域美化活動",
    description: "地域の公園を掃除する活動です。",
    date: "2024-12-01",
    location: "東京都渋谷区",
  },
  {
    id: 2,
    name: "川の清掃",
    description: "河川敷のゴミ拾い活動を行います。",
    date: "2024-12-15",
    location: "神奈川県横浜市",
  },
  {
    id: 3,
    name: "山のトレイル整備",
    description: "登山道の整備活動です。",
    date: "2024-12-20",
    location: "長野県松本市",
  },
]);
</script>

<template>
  <div class="request-list">
    <h1>依頼リスト</h1>
    <!-- 依頼リストを表示 -->
    <div>
      <RequestItem
        v-for="request in requests"
        :key="request.id"
        :request="request"
      />
    </div>
  </div>
</template>

<style scoped>
.request-list {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
