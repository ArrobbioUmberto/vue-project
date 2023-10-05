import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import './assets/style.css'
const app = createApp(App); // Crea un'istanza principale dell'app con il componente App
app.use(router); // Usa il router nella tua app

app.mount("#app");
