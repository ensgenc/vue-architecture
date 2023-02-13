<template>
  <form ref="signUpForm">
    <div class="form-group">
      <div class="field-slot">
        <p-input-text id="username" type="text" required v-model="username" />
        <label>{{ $t("auth.name") }}</label>
      </div>
    </div>
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
    :label="$t('auth.signUp')"
    class="btn-danger w-100 mt-2"
    @click="createUser"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignUp",
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["signUp"]),
    createUser() {
      const { username, email, password } = this;
      // TODO validation should be used; example: https://vuelidate.js.org/
      this.signUp({ username, email, password });
    },
  },
};
</script>

<style scoped></style>
