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
    headerClass: null,
  },
};
</script>

<style scoped></style>
