<template>
  <ion-page>
    <ion-content class="home-page">
      <div class="main_content_div">

        <!--Search Bar-->

        <ion-header
          translucent="true"
          style="position: fixed; top: 0; left: 0; right: 0"
          ><br />
          <ion-toolbar>
            <ion-searchbar
              animated="true"
              placeholder="Cari Ujian"
            ></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        <div class="user_div"></div>
        <div class="top-radius" />
        <div class="content_div">
          <div class="card-heading ion-padding"></div>
          <ion-grid>
            <br /><br /><br />
            <ion-row class="ion-padding" style="justify-content: space-between">

              <!-- Menu Atas -->

              <!--Tukang bangunan-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('ujianmatematika')"
                >
                  <div>
                    <img
                      alt="project"
                      src="../assets/icons/matematika2.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Matematika <br />
                  </h6>
                </div>
              </ion-col>

              <!--Tukang mengajar-->

              <ion-col>
                <div 
                  class="item-menu"
                  @click.prevent="toNavigate('ujianbahasa')"
                >
                <div>
                    <img
                      alt="project"
                      src="../assets/icons/indonesia.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Bahasa Indonesia <br />
                  </h6>
                </div>
              </ion-col>
            </ion-row>

          <!--Baris 2-->
          <ion-row class="ion-padding" style="justify-content: space-between">

            <!--Tukang jahit-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('ujianfisika')"
                >
                  <div>
                    <img
                      alt="project"
                      src="../assets/icons/fisika2.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Fisika <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>

              <!--Tukang kebun-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('ujianbiologi')"
                >
                <div>
                    <img
                      alt="project"
                      src="../assets/icons/biologi2.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Biologi <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>
            </ion-row>

            <!--Baris 3-->
          <ion-row class="ion-padding" style="justify-content: space-between">

            <!--Tukang jahit-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('ujiankimia')"
                >
                  <div>
                    <img
                      alt="project"
                      src="../assets/icons/kimia2.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Kimia <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>

              <!--Tukang kebun-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('ujianinggris')"
                >
                <div>
                    <img
                      alt="project"
                      src="../assets/icons/inggris2.png"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <h6 class="item-text">
                    Ujian Bahasa Inggris <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
//import { onMounted } from "vue";
import {
  //IonCardSubtitle,
  //IonBadge,
  IonSearchbar,
  //IonModal,
  IonHeader,
  IonToolbar,
  //IonTitle,
  //IonButton,
  //IonButtons,
  //IonCardTitle,
  IonPage,
  IonContent,
  //IonCard,
  //IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  //IonFooter,
} from "@ionic/vue";
// Import AdMob directly
//import { AdMob } from "@capacitor-community/admob";
// import { ConvertFullDate } from "../composables/composables";
import { useRouter } from "vue-router";
//import { ref } from "vue";
//import { getDatabase, ref as dbRef, get, child } from "firebase/database";
//import { firebaseApp } from "../views/firebase.js";

//const isModalOpen = ref(false);
//const isModalOpen2 = ref(false);
//const isModalOpen3 = ref(false);
//
//// Modal 1
//
//const openModal = () => {
//  isModalOpen2.value = true;
//};
//
//const dismissModal = () => {
//  isModalOpen2.value = false;
//};
//
//// Modal 2
//
//const openModal2 = () => {
//  isModalOpen2.value = true;
//};
//
//const dismissModal2 = () => {
//  isModalOpen2.value = false;
//};
//
//// Modal 2
//
//const openModal3 = () => {
//  isModalOpen3.value = true;
//};
//
//const dismissModal3 = () => {
//  isModalOpen3.value = false;
//};

// const isOpen = ref(false);
// // const setOpen = (open) => (isOpen.value = open);

const router = useRouter();
const toNavigate = async (routeName) => {
  console.log(`Navigating to ${routeName}`);

  // Move to the desired route
  router.push({ name: routeName });
};
</script>

<style scoped>
.admob-banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.admob-banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.item-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.rounded-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px; /* Adjust size as needed */
  height: 90px; /* Adjust size as needed */
  background-color: #DD5746;
  border-radius: 10%;
}

.item-text {
  color: black;
  text-align: center;
  margin-top: 8px; /* Adjust spacing as needed */
}
</style>
