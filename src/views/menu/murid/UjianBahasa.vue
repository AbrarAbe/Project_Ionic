<template>
  <ion-page>
    <ion-content class="home-page">
      <div class="main_content_div">
        <ion-header mode="ios">
          <ion-toolbar>
            <ion-title>Bahasa Indonesia</ion-title>
            <ion-back-button slot="start" default-href="/" />
          </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" :scrollEvents="true">
          <ion-content class="ion-padding">
            <!-- Soal Matematika -->
            <h3>1. Manakah di antara kata-kata berikut yang termasuk dalam kategori kata benda abstrak?
            </h3>
            <ion-radio-group v-model="jawaban1">
              <ion-list>
                <ion-item>
                  <ion-label>A. Meja
                  </ion-label>
                  <ion-radio slot="start" value="20"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>B. Cinta</ion-label>
                  <ion-radio slot="start" value="25"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>C. Buku </ion-label>
                  <ion-radio slot="start" value="30"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>D. Pohon</ion-label>
                  <ion-radio slot="start" value="30"></ion-radio>
                </ion-item>
              </ion-list>
            </ion-radio-group>

            <ion-button @click="cekJawaban">Cek Jawaban</ion-button>

            <ion-item>
              <ion-label>Hasil:</ion-label>
              <ion-text>{{ hasil }}</ion-text>
            </ion-item>
          </ion-content>
        </ion-content>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
//import { onMounted } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonContent,
} from "@ionic/vue";
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

.circle-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  /* Adjust size as needed */
  height: 50px;
  /* Adjust size as needed */
  background-color: #729d39;
  border-radius: 50%;
}

.item-text {
  color: black;
  text-align: center;
  margin-top: 8px;
  /* Adjust spacing as needed */
}
</style>
