<template>
  <div class="form-group">
    <p-input-text id="username" type="text" required />
    <label>{{ $t("auth.name") }}</label>
  </div>
  <div class="form-group">
    <p-input-text id="email" type="text" required />
    <label>{{ $t("auth.eMail") }}</label>
  </div>
  <div class="form-group">
    <p-input-text id="password" type="password" required />
    <label>{{ $t("auth.password") }}</label>
  </div>
  <p-button :label="$t('auth.signUp')" class="btn-danger w-100" />
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped></style>
