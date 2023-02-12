import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";

import Button from "@/components/base/Button.vue";
import Card from "@/components/base/Card.vue";
import InputText from "@/components/base/InputText.vue";
import TabView from "@/components/base/TabView.vue";
import TabPanel from "@/components/base/TabPanel.vue";

// import translations
import en from "./locales/en.json";
import tr from "./locales/tr.json";

// configure i18n
const i18n = createI18n({
  locale: "tr",
  fallbackLocale: "tr",
  messages: { tr, en },
});

const app = createApp(App);

app.use(i18n);

app.component("PButton", Button);
app.component("PCard", Card);
app.component("PInputText", InputText);
app.component("PTabView", TabView);
app.component("PTabPanel", TabPanel);

app.use(store).use(router).mount("#app");
