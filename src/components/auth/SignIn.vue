<template>
  <div class="form-group">
    <p-input-text id="email" type="text" required />
    <label>{{ $t("auth.eMail") }}</label>
  </div>
  <div class="form-group">
    <p-input-text id="password" type="password" required />
    <label>{{ $t("auth.password") }}</label>
  </div>
  <p-button :label="$t('auth.signIn')" class="btn-primary w-100" />
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped></style>
