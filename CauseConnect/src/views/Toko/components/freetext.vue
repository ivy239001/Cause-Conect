<template>
    <div class="freetext-container">
      <label for="freetext-input" class="freetext-label">
        {{ label }}
      </label>
      <textarea
        id="freetext-input"
        class="freetext-input"
        v-model="text"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        @input="onInput"
      ></textarea>
    </div>
</template>
  
<script>
  export default {
    name: "FreeText",
    props: {
      label: {
        type: String,
        default: "Enter your text:",
      },
      placeholder: {
        type: String,
        default: "Type here...",
      },
      rows: {
        type: Number,
        default: 5,
      },
      cols: {
        type: Number,
        default: 30,
      },
    },
    emits: ["update:text"],
    data() {
      return {
        text: "",
      };
    },
    methods: {
      onInput() {
        this.$emit("update:text", this.text);
      },
    },
  };
</script>
  
<style scoped>
  .freetext-container {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  
  .freetext-label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .freetext-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
</style>
  