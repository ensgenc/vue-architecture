import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "@/components/base/Button.vue";
import Card from "@/components/base/Card.vue";
import InputText from "@/components/base/InputText.vue";

const app = createApp(App);
app.component("PButton", Button);
app.component("PCard", Card);
app.component("PInputText", InputText);

app.use(store).use(router).mount("#app");
