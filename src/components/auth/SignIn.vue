<template>
  <form ref="signInForm">
    <div class="form-group">
      <div class="field-slot">
        <p-input-text id="email" type="text" required v-model="email" />
        <label>{{ $t("auth.eMail") }}</label>
      </div>
    </div>
    <div class="form-group">
      <div class="field-slot">
        <p-input-text
          id="password"
          type="password"
          required
          v-model="password"
        />
        <label>{{ $t("auth.password") }}</label>
      </div>
    </div>
  </form>
  <p-button
    :label="$t('auth.signIn')"
    class="btn-primary w-100 mt-2"
    @click="login"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["signIn"]),
    login() {
      const { email, password } = this;
      // TODO validation should be used; example: https://vuelidate.js.org/
      this.signIn({ email, password });
    },
  },
};
</script>

<style scoped></style>
