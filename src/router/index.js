import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import Homepage2 from "@/views/HomePage2.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
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
        path: "",
        redirect: "/page/home",
      },

      // home

      {
        path: "/page/home",
        name: "home",
        component: () => import("@/views/HomePage2.vue"),
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
        path: "/page/home/homepage2",
        name: "homepage2",
        component: Homepage2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
