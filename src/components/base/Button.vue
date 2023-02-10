<template>
  <button class="button" type="button" :aria-label="label">
    <slot>
      <span class="label">{{ label }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "PButton",
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped></style>
