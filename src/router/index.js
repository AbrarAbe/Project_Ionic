import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import MenuUjian from "@/views/MenuUjian.vue";

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
    path: "/page/",
    component: TabsPage,
    children: [

      {
        path: "/page/menuujian",
        name: "menuujian",
        component: () => import("@/views/MenuUjian.vue"),
      },

      // home

      {
        path: "/page/menuinputujian",
        name: "menuinputujian",
        component: () => import("@/views/MenuInputUjian.vue"),
      },

      //profile

      {
        path: "/page/chat",
        name: "chat",
        component: () => import("@/views/Dasar/ChatPage.vue"),
      },

      //settings
      
      {
        path: "/page/chat",
        name: "settings",
        component: () => import("@/views/SettingsPage.vue"),
      },

      // Tambahkan rute untuk Homepage2
      {
        path: "/page/home/menuujian",
        name: "menuujian",
        component: MenuUjian,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
