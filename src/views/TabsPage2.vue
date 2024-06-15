<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom" id="app-tab-bar">
        <ion-tab-button tab="home" href="/guru/home/menuinputujian">
          <ion-icon :icon="menu"></ion-icon>
          <ion-label>Menu</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/guru/home/profile">
          <ion-icon :icon="person"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" href="/guru/home/settings">
          <ion-icon :icon="settings"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="logout" href="/guru/home/logout" @click.prevent="logOut()">
          <ion-icon :icon="exit"></ion-icon>
          <ion-label>Exit</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { onMounted } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  alertController,
} from "@ionic/vue";
import { 
  exit, 
  menu, 
  person, 
  settings, 
} from "ionicons/icons";

import { useRouter } from "vue-router";
import { AdMob } from "@capacitor-community/admob";
import { getAuth, signOut } from "firebase/auth";

const router = useRouter();
const auth = getAuth();

const initializeAdMob = async () => {
  await AdMob.initialize({
    appId: "ca-app-pub-5370500978282229~1611991188",
  });
};

onMounted(() => {
  initializeAdMob();
});

const logOut = async () => {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    header: "Confirm!",
    mode: "ios",
    message: "Confirm Logout?",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        id: "cancel-button",
        handler: () => {
          console.log("Confirm Cancel");
          router.push({ name: "home" });
        },
      },
      {
        text: "Logout",
        id: "confirm-button",
        handler: async () => {
          try {
            // Sign out from firebase
            await signOut(auth);
            console.log("User signed out");

            // Show reward ad
            await showRewardAd();

            // Clear local storage
            localStorage.clear();

            // Redirect to login page
            router.push({ name: "login" });
          } catch (error) {
            console.error("Error signing out:", error);
          }
        },
      },
    ],
  });
  alert.present();
};

const showRewardAd = async () => {
  try {
    await AdMob.showRewardAd({
      adId: "ca-app-pub-5370500978282229/1272283671", // Ganti dengan ID iklan reward yang valid
    });
    console.log("Reward Ad shown successfully");
  } catch (error) {
    console.error("Error showing Reward Ad:", error);
  }
};
</script>

<style scoped>
ion-tab-bar {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px;
  --background: #f3f3f3;
}

ion-tab-bar ion-tab-button {
  font-size: 13px;
  --color: white;
  --color-selected: var(--ion-color-primary);
}

ion-tab-bar ion-tab-button ion-icon {
  font-size: 1.5rem;
}
</style>
