<template>
  <div class="container">
    <p-card class="w-25">
      <template #content>
        <div class="form-group">
          <p-input-text id="username" type="text" required />
          <label>Adınız Soyadınız</label>
        </div>
        <p-button label="Giriş Yap" class="btn-primary w-100" />
      </template>
    </p-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
