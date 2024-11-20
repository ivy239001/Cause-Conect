<template>
    <div class="input-field">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        v-model="inputValue"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true, // ラベルは必須
      },
      type: {
        type: String,
        default: "text", // デフォルトでテキスト入力
      },
      placeholder: {
        type: String,
        default: "",
      },
      modelValue: {
        type: String,
        default: "",
      },
    },
    emits: ["update:modelValue"],
    computed: {
      inputValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  