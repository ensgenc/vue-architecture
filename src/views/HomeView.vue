<template>
  <div class="container">
    <p-card class="w-25">
      <template #content>
        <p-tab-view id="login-tab-view">
          <p-tab-panel header="Giriş Yap">
            <div class="form-group">
              <p-input-text id="username" type="text" required />
              <label>Adınız Soyadınız</label>
            </div>
            <p-button label="Giriş Yap" class="btn-primary w-100" />
          </p-tab-panel>
          <p-tab-panel header="Üye Ol">
            <div class="form-group">
              <p-input-text id="username" type="text" required />
              <label>E-Mail Adresiniz</label>
            </div>
            <p-button label="Üye Ol" class="btn-danger w-100" />
          </p-tab-panel>
        </p-tab-view>
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
