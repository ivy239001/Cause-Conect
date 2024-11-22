<template>
  <div class="toko-page">
    <h1>依頼を投稿</h1>

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

      <!-- freetext コンポーネント -->
      <div class="form-group">
        <freetext />
      </div>

      <!-- 送信ボタン -->
      <button type="submit">投稿する</button>
    </form>
  </div>
</template>

<script>
import freetext from './components/freetext.vue'; // freetext コンポーネントのインポート

export default {
  name: 'Toko',
  components: {
    freetext, // freetext を登録
  },
  data() {
    return {
      requestPoints: '', // 依頼ポイント
      requestName: '', // 依頼名
      minPeople: 1, // 募集人数の最小値
      maxPeople: 5, // 募集人数の最大値
      activityDate: '', // 活動日
      startTime: 9, // 活動開始時間
      endTime: 17, // 活動終了時間
      hours: Array.from({ length: 24 }, (_, i) => i), // 時間リスト
    };
  },
  methods: {
    submitRequest() {
      // 入力エラーチェック
      if (this.minPeople > this.maxPeople) {
        alert('募集人数の最小値は最大値以下に設定してください。');
        return;
      }
      if (this.startTime >= this.endTime) {
        alert('活動開始時間は終了時間より前に設定してください。');
        return;
      }
      
      // 入力内容をコンソールに表示（デバッグ用）
      console.log('依頼内容:', {
        requestPoints: this.requestPoints,
        requestName: this.requestName,
        minPeople: this.minPeople,
        maxPeople: this.maxPeople,
        activityDate: this.activityDate,
        startTime: this.startTime,
        endTime: this.endTime,
      });
      
      alert('依頼が投稿されました！');
    },
  },
};
</script>

<style scoped>
.toko-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

textarea,
input,
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.flex {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
