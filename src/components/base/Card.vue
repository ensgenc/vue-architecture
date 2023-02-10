<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div v-if="$slots.title" class="card-title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.subtitle" class="card-subtitle">
        <slot name="subtitle"></slot>
      </div>
      <div class="card-content">
        <slot name="content"></slot>
      </div>
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCard",
};
</script>

<style scoped></style>
