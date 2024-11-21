<script lang="ts">
import {ref} from "vue"

const inputTextarea = ref("テキストエリアへの入力文字。/n改行も加えてみる。")
const memberType = ref(1)
const memberTypeSelect = ref(1)
const isAgreed = ref(false)
const isAgreed01 = ref(0)
const selectedOS = ref([])
const selectedOSSelect = ref([])
</script>

<template>
  <textarea v-model="inputTextarea"></textarea>
  <br>
  <section>
    <label><input type="radio" name="memberType" value="1" v-model="memberType">依頼者</label>
    <label><input type="radio" name="memberType" value="2" v-model="memberType">出資者</label>
    <label><input type="radio" name="memberType" value="3" v-model="memberType">実行者</label>
    <br>
    <p>選択されたラジオボタン:{{ memberType }}</p>
  </section>
  <br>
  <section>
    <select v-model="memberTypeSelect">
      <option value="1">依頼者</option>
      <option value="2">出資者</option>
      <option value="3">実行者</option>
    </select>
    <br>
    <p>選択されたリスト:{{ memberTypeSelect }}</p>
  </section>
  <br>
  <section>
    <label><input type="checkbox" v-model="isAgreed">同意する</label>
    <p>同意の結果:{{ isAgreed }}</p>
  </section>
  <section>
    <label><input type="checkbox" v-model="isAgreed1" true-value="1" false-value="0">同意する</label>
    <p>同意の結果:{{ isAgreed01 }}</p>
  </section>
  <section>
    <label><input type="checkbox" v-model="selectedOS" value="1">macOS</label>
    <label><input type="checkbox" v-model="selectedOS" value="2">win</label>
    <label><input type="checkbox" v-model="selectedOS" value="3">lin</label>
    <label><input type="checkbox" v-model="selectedOS" value="4">ios</label>
    <label><input type="checkbox" v-model="selectedOS" value="5">and</label>
    <p>選択されたOS:{{ selectedOS }}</p>
  </section>
  <section>
    <select v-model="selectedOSSelect" multiple>
      <option value="1">macOS</option>
      <option value="2">win</option>
      <option value="3">lin</option>
      <option value="4">ios</option>
      <option value="5">and</option>
    </select>
    <p>選択されたOS:{{ selectedOSSelect }}</p>
  </section>

</template>
