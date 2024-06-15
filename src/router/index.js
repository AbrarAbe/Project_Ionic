import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import TabsPage2 from "../views/TabsPage2.vue";
import MenuUjian from "@/views/MenuUjian.vue";
import MenuInputUjian from "@/views/MenuInputUjian.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/regster",
    name: "register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/splash",
    name: "splash",
    component: () => import("@/views/SplashScreen.vue"),
  },

  {
    path: "/murid/",
    component: TabsPage,
    children: [

      {
        path: "",
        redirect: "/murid/home",
      },

      {
        path: "/murid/home",
        name: "menuujian",
        component: () => import("@/views/MenuUjian.vue"),
      },

      {
        path: "/murid/home/profile",
        name: "profilemurid",
        component: () => import("@/views/ProfilePage.vue"),
      },

      //settings
      
      {
        path: "/murid/home/settings",
        name: "settingsmurid",
        component: () => import("@/views/SettingsPage.vue"),
      },

      // Tambahkan rute untuk Homepage2
      {
        path: "/murid/home/menuujian",
        name: "menuujian",
        component: MenuUjian,
      },
    ],
  },

  {
    path: "/guru/",
    component: TabsPage2,
    children: [

      {
        path: "",
        redirect: "/guru/home",
      },

      {
        path: "/guru/home",
        name: "menuinputujian",
        component: () => import("@/views/MenuInputUjian.vue"),
      },

      {
        path: "/guru/home/profile",
        name: "profileguru",
        component: () => import("@/views/ProfilePage.vue"),
      },


      //settings
      
      {
        path: "/guru/home/settings",
        name: "settingsguru",
        component: () => import("@/views/SettingsPage.vue"),
      },

      // Tambahkan rute untuk Menu Input Ujian

      {
        path: "/guru/home/menuinputujian",
        name: "menuinputujian",
        component: MenuInputUjian,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
