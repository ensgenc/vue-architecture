import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "@/components/base/Button.vue";
import Card from "@/components/base/Card.vue";

const app = createApp(App);
app.component("PButton", Button);
app.component("PCard", Card);

app.use(store).use(router).mount("#app");
