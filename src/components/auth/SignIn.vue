<template>
  <div class="form-group">
    <div class="field-slot">
      <p-input-text id="email" type="text" required />
      <label>{{ $t("auth.eMail") }}</label>
    </div>
  </div>
  <div class="form-group">
    <div class="field-slot">
      <p-input-text id="password" type="password" required />
      <label>{{ $t("auth.password") }}</label>
    </div>
  </div>
  <p-button :label="$t('auth.signIn')" class="btn-primary w-100 mt-2" />
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped></style>
