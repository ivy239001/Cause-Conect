<script>
export default {
  data() {
    return {
      selectedPrefecture: "",
      selectedArea: "",
      selectedStatus: "",
      prefectures: [
        "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
        "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
        "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
        "岐阜県", "静岡県", "愛知県", "三重県",
        "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
        "鳥取県", "島根県", "岡山県", "広島県", "山口県",
        "徳島県", "香川県", "愛媛県", "高知県",
        "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
      ],
      areas: ["道路", "山", "川", "海", "公園", "その他"]
    };
  },
  methods: {
    handleSearch() {
      console.log("検索条件:");
      console.log("都道府県:", this.selectedPrefecture);
      console.log("活動エリア:", this.selectedArea);
      console.log("募集状況:", this.selectedStatus);
    }
  }
};
</script>

<template>
  <div class="search-container">
    <div class="search-row">
      <div class="search-item">
        <select id="prefecture" v-model="selectedPrefecture">
          <option value="" disabled selected hidden>都道府県▼</option>
          <option v-for="(pref, index) in prefectures" :key="index" :value="pref">
            {{ pref }}
          </option>
        </select>
      </div>
      <div class="search-item">
        <select id="area" v-model="selectedArea">
          <option value="" disabled selected hidden>活動エリア▼</option>
          <option v-for="(area, index) in areas" :key="index" :value="area">
            {{ area }}
          </option>
        </select>
      </div>
      <div class="search-item">
        <select id="status" v-model="selectedStatus">
          <option value="" disabled selected hidden>募集状況▼</option>
          <option value="募集中">募集中</option>
          <option value="募集終了">募集終了</option>
          <option value="すべて">すべて</option>
        </select>
      </div>
      <div class="search-item">
        <button @click="handleSearch">検索</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.search-container h2 {
  margin-bottom: 20px;
}

.search-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.search-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-item select {
  width: 150px;
  padding: 0.5rem;
  background-color: #f7a400; /* プルダウン内の背景をオレンジ色に設定 */
  border: 1px solid #ccc;
  border-radius: 4px;
  color: rgb(255, 255, 255); /* テキスト色を白にする */
  font-weight: bold;
  appearance: none; /* ブラウザのデフォルトスタイルを無効化 */
}

.search-item select option {
  background-color: #f7dfb0f3; /* プルダウン項目の背景をオレンジ色に設定 */
  color: rgb(61, 61, 61); /* 項目のテキスト色を白にする */
}

.search-item button {
  width: 150px;
  padding: 0.75rem;
  background-color: #f7a400;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.search-item button:hover {
  background-color: #ff8c00;
}
</style>
