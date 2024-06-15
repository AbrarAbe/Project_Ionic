<template>
  <ion-page>
    <ion-content class="home-page">
      <div class="main_content_div">
        <ion-header mode="ios">
          <ion-toolbar>
            <ion-title>Menu Ujian</ion-title>
            <ion-back-button slot="start" default-href="/" />
          </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" :scrollEvents="true">
          <ion-content class="ion-padding">
            <!-- Soal Matematika -->
            <h2>1. Apa hasil dari 15 + 10?</h2>
            <ion-radio-group v-model="jawaban1">
              <ion-list>
                <ion-item>
                  <ion-label>20</ion-label>
                  <ion-radio slot="start" value="20"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>25</ion-label>
                  <ion-radio slot="start" value="25"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>30</ion-label>
                  <ion-radio slot="start" value="30"></ion-radio>
                </ion-item>
              </ion-list>
            </ion-radio-group>

            <h2>2. Apa hasil dari 50 - 15?</h2>
            <ion-radio-group v-model="jawaban2">
              <ion-list>
                <ion-item>
                  <ion-label>30</ion-label>
                  <ion-radio slot="start" value="30"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>35</ion-label>
                  <ion-radio slot="start" value="35"></ion-radio>
                </ion-item>
                <ion-item>
                  <ion-label>40</ion-label>
                  <ion-radio slot="start" value="40"></ion-radio>
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
