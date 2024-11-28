<script>
// Refine.vueをインポート
import Refine from "./components/Refine.vue";

export default {
  components: {
    Refine,
  },
  data() {
    return {
      loading: false, // ローディング状態を管理
      requests: [
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
      ],
      filters: {
        keyword: "",
        location: "",
        date: "",
      },
    };
  },
  computed: {
    filteredRequests() {
      return this.requests.filter((request) => {
        const matchesKeyword = request.name.includes(this.filters.keyword);
        const matchesLocation = this.filters.location
          ? request.location.includes(this.filters.location)
          : true;
        const matchesDate = this.filters.date
          ? request.date === this.filters.date
          : true;

        return matchesKeyword && matchesLocation && matchesDate;
      });
    },
  },
  methods: {
    // Refineコンポーネントからフィルター条件を受け取り
    applyFilters(filters) {
      this.loading = true;
      setTimeout(() => {
        this.filters = filters;
        this.loading = false; // データ取得完了
      }, 500); // ローディングを模した遅延
    },
    // フィルターのリセット
    resetFilters() {
      this.filters = {
        keyword: "",
        location: "",
        date: "",
      };
    },
  },
};
</script>


<template>
  <div class="list-page">
    <div class="list-container">
      <!-- 左側のRefineコンポーネント -->
      <div class="refine-sidebar">
        <Refine @apply-filters="applyFilters" />
        <button class="reset-button" @click="resetFilters">条件をリセット</button>
      </div>

      <!-- 右側のリスト -->
      <div class="list-content">
        <h1>依頼一覧</h1>

        <!-- ローディングスピナー -->
        <div v-if="loading" class="loading-spinner">
          <p>ロード中...</p>
        </div>

        <!-- フィルタリング結果がない場合のメッセージ -->
        <p v-if="!loading && filteredRequests.length === 0" class="no-results">
          条件に一致する依頼が見つかりません。
        </p>

        <!-- 依頼リスト -->
        <ul v-else>
          <li v-for="request in filteredRequests" :key="request.id" class="request-item">
            <h3>{{ request.name }}</h3>
            <p>{{ request.description }}</p>
            <p><strong>日付:</strong> {{ request.date }}</p>
            <p><strong>場所:</strong> {{ request.location }}</p>
            <!-- 詳細ページへのリンク -->
            <router-link :to="`/details/${request.id}`">詳細を見る</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.refine-sidebar {
  width: 300px;
  flex-shrink: 0;
  border-right: 1px solid #ccc;
}

.reset-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #f7a400;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reset-button:hover {
  background-color: #ff8c00;
}

.list-content {
  flex-grow: 1;
  padding-left: 20px;
}

h1 {
  font-size: 24px;
}

.loading-spinner {
  font-size: 18px;
  color: #999;
  text-align: center;
  margin: 20px 0;
}

.no-results {
  font-size: 16px;
  color: #999;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

.request-item {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.request-item h3 {
  margin: 0 0 10px;
  font-size: 20px;
}

.request-item p {
  margin: 5px 0;
  font-size: 14px;
}

router-link {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
