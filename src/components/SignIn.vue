<template>
  <div class="form-group">
    <p-input-text id="email" type="text" required />
    <label>E-Mail Adresiniz</label>
  </div>
  <div class="form-group">
    <p-input-text id="password" type="password" required />
    <label>Parolanız</label>
  </div>
  <p-button label="Giriş Yap" class="btn-primary w-100" />
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped></style>
