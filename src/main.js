import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from "@ionic/vue";
import "@capacitor-community/admob";
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";
import "./theme/variables.css";
import "./theme/core.css";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// Impor Firebase
import { initializeApp } from "firebase/app";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1xoewEO7OGNOY3Ki1hMDKYeflGQTn3jk",
  authDomain: "project-5f6a4.firebaseapp.com",
  projectId: "project-5f6a4",
  storageBucket: "project-5f6a4.appspot.com",
  messagingSenderId: "549967688611",
  appId: "1:549967688611:web:92f00396ce79e404a06016",
  measurementId: "G-JZF25JQ84E"
};

// Inisialisasi Firebase
const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)
  .component("swiper", Swiper)
  .component("swiper-slide", SwiperSlide)
  .use(IonicVue, {
    mode: "ios",
  })
  .use(router);

// Menetapkan firebaseApp ke objek app Vue
app.config.globalProperties.$firebase = firebaseApp;

router.isReady().then(() => {
  app.mount("#app");
});
