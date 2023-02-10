<template>
  <button class="btn" type="button" :aria-label="label">
    <slot>
      <span class="btn__label">{{ label }}</span>
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
