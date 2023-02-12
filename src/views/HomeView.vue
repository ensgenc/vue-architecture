<template>
  <div class="container py-8">
    <auth-page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthPage from "@/components/auth/Auth.vue";

export default defineComponent({
  name: "HomeView",
  components: { AuthPage },
});
</script>
