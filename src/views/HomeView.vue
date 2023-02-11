<template>
  <div class="container">
    <p-card class="w-25">
      <template #content>
        <p-tab-view id="login-tab-view">
          <p-tab-panel header="Giriş Yap">
            <sign-in />
          </p-tab-panel>
          <p-tab-panel header="Üye Ol">
            <sign-up />
          </p-tab-panel>
        </p-tab-view>
      </template>
    </p-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

export default defineComponent({
  name: "HomeView",
  components: { SignUp, SignIn },
});
</script>
