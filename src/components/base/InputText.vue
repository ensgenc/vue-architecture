<template>
  <input class="input-text" :value="modelValue" @input="onInput" />
</template>

<script>
export default {
  name: "InputText",
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
