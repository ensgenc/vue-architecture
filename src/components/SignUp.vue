<template>
  <div class="form-group">
    <p-input-text id="username" type="text" required />
    <label>Adınız Soyadınız</label>
  </div>
  <div class="form-group">
    <p-input-text id="email" type="text" required />
    <label>E-Mail Adresiniz</label>
  </div>
  <div class="form-group">
    <p-input-text id="password" type="password" required />
    <label>Parolanız</label>
  </div>
  <p-button label="Üye Ol" class="btn-danger w-100" />
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped></style>
