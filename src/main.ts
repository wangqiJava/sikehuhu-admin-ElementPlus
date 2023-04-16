import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus).mount("#app");
