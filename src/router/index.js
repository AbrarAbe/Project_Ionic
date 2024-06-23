import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import TabsPage2 from "../views/TabsPage2.vue";
import HomePageMurid from "@/views/HomePageMurid.vue";
import HomePageGuru from "@/views/HomePageGuru.vue";

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
        name: "homepagemurid",
        component: () => import("@/views/HomePageMurid.vue"),
      },

      {
        path: "/murid/home/profile",
        name: "profilemurid",
        component: () => import("@/views/ProfilePage.vue"),
      },

      {
        path: "/murid/home/settings",
        name: "settingsmurid",
        component: () => import("@/views/SettingsPage.vue"),
      },

      // Menu ujian

      {
        path: "/murid/home/ujianmatematika",
        name: "ujianmatematika",
        component: () => import("@/views/menu/murid/UjianMatematika.vue"),
      },
      
      {
        path: "/murid/home/ujianbahasa",
        name: "ujianbahasa",
        component: () => import("@/views/menu/murid/UjianBahasa.vue"),
      },

      {
        path: "/murid/home/ujianfisika",
        name: "ujianfisika",
        component: () => import("@/views/menu/murid/UjianFisika.vue"),
      },

      {
        path: "/murid/home/ujianbiologi",
        name: "ujianbiologi",
        component: () => import("@/views/menu/murid/UjianBiologi.vue"),
      },

      {
        path: "/murid/home/ujiankimia",
        name: "ujiankimia",
        component: () => import("@/views/menu/murid/UjianKimia.vue"),
      },

      {
        path: "/murid/home/ujianinggris",
        name: "ujianinggris",
        component: () => import("@/views/menu/murid/UjianInggris.vue"),
      },

      // Tambahkan rute untuk Homepage2
      {
        path: "/murid/home/homepagemurid",
        name: "HomePageMurid",
        component: HomePageMurid,
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
        name: "homepageguru",
        component: () => import("@/views/HomePageGuru.vue"),
      },

      {
        path: "/guru/home/profile",
        name: "profileguru",
        component: () => import("@/views/ProfilePage.vue"),
      },
      
      {
        path: "/guru/home/settings",
        name: "settingsguru",
        component: () => import("@/views/SettingsPage.vue"),
      },

      {
        path: "/murid/home/inputujian",
        name: "inputujian",
        component: () => import("@/views/menu/guru/InputUjian.vue"),
      },

      // Tambahkan rute untuk Menu Input Ujian

      {
        path: "/guru/home/homepageguru",
        name: "HomePageGuru",
        component: HomePageGuru,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
