<script setup>
// 受け取るプロパティを定義
defineProps({
  request: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="request-item">
    <h3>{{ request.name }}</h3>
    <p>{{ request.description }}</p>
    <p><strong>日付:</strong> {{ request.date }}</p>
    <p><strong>場所:</strong> {{ request.location }}</p>
    <!-- 詳細ページへのリンク -->
    <router-link :to="`/details/${request.id}`" class="details-link">詳細を見る</router-link>
  </div>
</template>

<style scoped>
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

.details-link {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.details-link:hover {
  text-decoration: underline;
}
</style>
