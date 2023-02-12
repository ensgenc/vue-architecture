<template>
  <p-card>
    <template #content>
      <p-tab-view id="login-tab-view">
        <p-tab-panel :header="$t('auth.signIn')" headerClass="primary">
          <sign-in />
        </p-tab-panel>
        <p-tab-panel :header="$t('auth.signUp')" headerClass="danger">
          <sign-up />
        </p-tab-panel>
      </p-tab-view>
    </template>
  </p-card>
</template>

<script>
import SignUp from "@/components/auth/SignUp.vue";
import SignIn from "@/components/auth/SignIn.vue";

export default {
  name: "AuthPage",
  components: { SignUp, SignIn },
};
</script>

<style scoped></style>
