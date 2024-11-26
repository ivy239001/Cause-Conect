<script>
import apiClient from './api'
import ItemList from './components/ItemList.vue'
import ItemForm from './components/ItemForm.vue'
import Navber from './components/Navber.vue'

export default {
  components: {
    ItemList,
    ItemForm,
    Navber,
  },
  data() {
    return {
      items: [], // アイテム一覧
      selectedItem: null, // 編集対象のアイテム
    }
  },
  methods: {
    // アイテム一覧を取得
    fetchItems() {
      apiClient.get('/items').then((response) => {
        this.items = response.data
      })
    },
    // 編集時の処理
    editItem(item) {
      this.selectedItem = item // 編集対象を選択
    },
    // 削除処理
    deleteItem(id) {
      apiClient.delete(`/items/${id}`).then(() => {
        this.fetchItems() // 再取得
      })
    },
  },
  mounted() {
    this.fetchItems() // 初期データ取得
  },
}
</script>

<template>
  <div>
    <Navber />
  </div>
  <div class="container flex">
    <h1>CROUD_test</h1>
    <ItemForm @item-saved="fetchItems" :edit-item="selectedItem" />
    <ItemList :items="items" @edit="editItem" @delete="deleteItem" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Zen+Maru+Gothic&display=swap');

.container {
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
</style>
