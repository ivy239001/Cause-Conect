<template>
  <div class="toko-page">
    <h1 class="page-title">依頼を投稿する</h1>

    <!-- フォーム -->
    <form @submit.prevent="submitRequest">
      <!-- 依頼ポイント -->
      <div class="form-group">
        <label for="request-points">依頼ポイント</label>
        <textarea 
          id="request-points" 
          v-model="requestPoints" 
          placeholder="依頼の詳細を記入してください" 
          required></textarea>
      </div>

      <!-- 依頼名 -->
      <div class="form-group">
        <label for="request-name">依頼名</label>
        <input 
          type="text" 
          id="request-name" 
          v-model="requestName" 
          placeholder="依頼の名前を入力してください" 
          required />
      </div>

      <!-- 募集人数 -->
      <div class="form-group">
        <label for="min-people">募集人数</label>
        <div class="flex">
          <select id="min-people" v-model="minPeople">
            <option v-for="num in 20" :key="'min-' + num" :value="num">{{ num }}</option>
          </select>
          ～ 
          <select id="max-people" v-model="maxPeople">
            <option v-for="num in 20" :key="'max-' + num" :value="num">{{ num }}</option>
          </select>
          人
        </div>
      </div>

      <!-- 活動日 -->
      <div class="form-group">
        <label for="activity-date">活動日</label>
        <input 
          type="date" 
          id="activity-date" 
          v-model="activityDate" 
          required />
      </div>

      <!-- 活動時間 -->
      <div class="form-group">
        <label for="activity-time">活動時間</label>
        <div class="flex">
          <select id="start-time" v-model="startTime">
            <option v-for="hour in hours" :key="'start-' + hour" :value="hour">{{ hour }}時</option>
          </select>
          ～ 
          <select id="end-time" v-model="endTime">
            <option v-for="hour in hours" :key="'end-' + hour" :value="hour">{{ hour }}時</option>
          </select>
        </div>
      </div>

      <!-- 活動場所 -->
      <div class="form-group">
        <label for="activity-location">活動場所</label>
        <div class="flex">
          <!-- 都道府県 -->
          <select id="prefecture" v-model="prefecture" required>
            <option value="" disabled selected>都道府県を選択</option>
            <option v-for="pref in prefectures" :key="pref" :value="pref">{{ pref }}</option>
          </select>
          
          <!-- 住所1 -->
          <input 
            type="text" 
            id="address1" 
            v-model="address1" 
            placeholder="住所1" 
            required />
          
          <!-- 住所2 -->
          <input 
            type="text" 
            id="address2" 
            v-model="address2" 
            placeholder="住所2" />
        </div>
      </div>

      <!-- 送信ボタン -->
      <button type="submit">投稿する</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestPoints: '',
      requestName: '',
      minPeople: 1,
      maxPeople: 5,
      activityDate: '',
      startTime: 9,
      endTime: 17,
      hours: Array.from({ length: 24 }, (_, i) => i),
      prefecture: '',
      address1: '',
      address2: '',
      prefectures: [
        '北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島', '茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
        '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知', '三重', '滋賀', '京都', '大阪', '兵庫', '奈良',
        '和歌山', '鳥取', '島根', '岡山', '広島', '山口', '徳島', '香川', '愛媛', '高知', '福岡', '佐賀', '長崎', '熊本', '大分',
        '宮崎', '鹿児島', '沖縄'
      ]
    };
  },
  methods: {
    submitRequest() {
      // エラーチェックや送信処理
      if (this.minPeople > this.maxPeople) {
        alert('募集人数の最小値は最大値以下に設定してください。');
        return;
      }
      if (this.startTime >= this.endTime) {
        alert('活動開始時間は終了時間より前に設定してください。');
        return;
      }
      
      console.log('依頼内容:', {
        requestPoints: this.requestPoints,
        requestName: this.requestName,
        minPeople: this.minPeople,
        maxPeople: this.maxPeople,
        activityDate: this.activityDate,
        startTime: this.startTime,
        endTime: this.endTime,
        prefecture: this.prefecture,
        address1: this.address1,
        address2: this.address2
      });

      alert('依頼が投稿されました！');
    }
  }
};
</script>

<style scoped>
.toko-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

textarea, input, select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.flex {
  display: flex;
  gap: 10px;
  align-items: center;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
