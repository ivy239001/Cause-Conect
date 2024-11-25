<script setup>
import { ref, watch } from 'vue';  // ref と watch をインポート
import { useRoute } from 'vue-router';  // useRouteをインポート

// 依頼リストと検索クエリを保持
const route = useRoute();
const searchQuery = ref(route.query.search || '');  // URLから検索クエリを取得
const requests = ref([  // 仮の依頼データ
  { id: 1, name: '地域清掃活動', location: '東京' },
  { id: 2, name: '公園整備', location: '大阪' },
  { id: 3, name: '海岸清掃', location: '沖縄' },
  { id: 4, name: '街路樹の植え替え', location: '北海道' },
]);
const filteredRequests = ref(requests.value);  // フィルタリングされた依頼リスト

// クエリパラメータの変更を監視して依頼をフィルタリング
watch(() => route.query.search, (newSearch) => {
  searchQuery.value = newSearch || '';  // 新しい検索クエリを取得
  filterRequests();  // フィルタリングを実行
});

// 検索結果をフィルタリングするメソッド
const filterRequests = () => {
  if (searchQuery.value.trim() === '') {
    filteredRequests.value = requests.value;  // 検索クエリが空の場合、全件表示
  } else {
    filteredRequests.value = requests.value.filter(request =>
      request.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      request.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
};

// 初期表示時にもフィルタリングを実行
filterRequests();
</script>

<template>
  <div class="list-page">
    <h2>依頼一覧</h2>
    
    <!-- 検索バー -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="依頼を検索"
        @input="filterRequests"
      />
      <button @click="filterRequests">検索</button>
    </div>

    <!-- 検索結果表示 -->
    <div v-if="filteredRequests.length > 0" class="request-items">
      <ul>
        <li v-for="request in filteredRequests" :key="request.id">
          {{ request.name }} - {{ request.location }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>検索結果がありません。</p>
    </div>
  </div>
</template>

<style scoped>
.list-page {
  padding: 20px;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 80%;
}

.search-bar button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.request-items ul {
  list-style: none;
  padding: 0;
}

.request-items li {
  background-color: #f8f9fa;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.request-items li:hover {
  background-color: #e9ecef;
}
</style>
