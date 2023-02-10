import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "@/components/base/Button.vue";

const app = createApp(App);
app.component("PButton", Button);

app.use(store).use(router).mount("#app");
