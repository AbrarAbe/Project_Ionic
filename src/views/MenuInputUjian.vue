<template>
  <ion-page>
    <ion-content class="home-page">
      <div class="main_content_div">
        <ion-header mode="ios">
          <ion-toolbar>
            <ion-back-button slot="start" default-href="/" />
            <ion-title>Menu Input Ujian</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" :fullscreen="true" :scrollEvents="true">
          <!-- Form untuk menambahkan siswa -->
          <ion-item>
            <ion-label>Soal :</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan soal ujian"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>a.</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan pilihan ganda"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>b.</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan pilihan ganda"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>c.</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan pilihan ganda"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>d.</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan pilihan ganda"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>e.</ion-label>
            <ion-input v-model="namaSiswa" placeholder="Masukkan pilihan ganda"></ion-input>
          </ion-item>
          <ion-button @click="tambahSiswa">Tambah Ujian</ion-button>
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
