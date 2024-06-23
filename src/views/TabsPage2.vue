<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom" id="app-tab-bar">
        <ion-tab-button tab="home" href="/murid/home/homepageguru">
          <ion-icon :icon="menu"></ion-icon>
          <ion-label>Menu</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/murid/home/profile">
          <ion-icon :icon="person"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" href="/murid/home/settings">
          <ion-icon :icon="settings"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="logout" href="/murid/home/logout" @click.prevent="logOut()">
          <ion-icon :icon="exit"></ion-icon>
          <ion-label>Exit</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
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
import { getAuth, signOut } from "firebase/auth";

const router = useRouter();
const auth = getAuth();

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
          router.push({ name: "/murid/home" });
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
  --color: #555555;
  --color-selected: var(--ion-color-primary);
}

ion-tab-bar ion-tab-button ion-icon {
  font-size: 1.5rem;
}
</style>
