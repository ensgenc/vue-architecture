<template>
  <slot></slot>
</template>

<script>
export default {
  name: "TabPanel",
  props: {
    header: {
      type: String,
      default: "Tab",
    },
  },
};
</script>

<style scoped></style>
