<template>
  <div class="search-container">
    <h2>検索</h2>
    
    <!-- 都道府県のプルダウン -->
    <div>
      <label for="prefecture">都道府県</label>
      <select id="prefecture" v-model="selectedPrefecture">
        <option value="">選択してください</option>
        <option v-for="(pref, index) in prefectures" :key="index" :value="pref">{{ pref }}</option>
      </select>
    </div>

    <!-- 活動エリアのプルダウン -->
    <div>
      <label for="area">活動エリア</label>
      <select id="area" v-model="selectedArea">
        <option value="">選択してください</option>
        <option v-for="(area, index) in areas" :key="index" :value="area">{{ area }}</option>
      </select>
    </div>

    <!-- 募集状況のプルダウン -->
    <div>
      <label for="status">募集状況</label>
      <select id="status" v-model="selectedStatus">
        <option value="">選択してください</option>
        <option value="募集中">募集中</option>
        <option value="募集終了">募集終了</option>
        <option value="すべて">すべて</option>
      </select>
    </div>

    <!-- 検索ボタン -->
    <div>
      <button @click="handleSearch">検索</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPrefecture: "",  // 都道府県の選択された値
      selectedArea: "",        // 活動エリアの選択された値
      selectedStatus: "",      // 募集状況の選択された値
      prefectures: ["東京都", "大阪府", "愛知県", "北海道", "福岡県"],  // 都道府県のリスト
      areas: ["道路", "山", "川", "海", "公園", "その他"]  // 活動エリアのリスト
    };
  },
  methods: {
    handleSearch() {
      // 検索ボタンが押されたときに実行されるメソッド
      console.log("検索条件:");
      console.log("都道府県:", this.selectedPrefecture || "未選択");
      console.log("活動エリア:", this.selectedArea || "未選択");
      console.log("募集状況:", this.selectedStatus || "未選択");

      // API呼び出しなどの検索処理を追加することができます
      // 例えば:
      // this.$http.get('/search', { params: { prefecture: this.selectedPrefecture, area: this.selectedArea, status: this.selectedStatus } })
      //   .then(response => {
      //     console.log('検索結果:', response.data);
      //   });
    }
  }
};
</script>

<style scoped>
.search-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9; /* 背景色を変更して視認性を向上 */
}

.search-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.search-container label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
}

.search-container select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem; /* フォントサイズを少し大きく */
}

.search-container button {
  width: 100%;
  padding: 0.75rem;
  background-color: #f7a400;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
}

.search-container button:hover {
  background-color: #ff8c00;
}

.search-container button:active {
  background-color: #e57e00; /* クリック時の色を少し暗く */
}

.search-container select, .search-container button {
  transition: all 0.3s ease;
}
</style>
