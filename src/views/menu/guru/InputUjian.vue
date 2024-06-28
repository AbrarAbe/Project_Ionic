<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Input Soal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Pertanyaan</ion-label>
          <ion-input v-model="pertanyaan" placeholder="Masukkan pertanyaan"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Jawaban A</ion-label>
          <ion-input v-model="pilihanA" placeholder="Masukkan jawaban A"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Jawaban B</ion-label>
          <ion-input v-model="pilihanB" placeholder="Masukkan jawaban B"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Jawaban C</ion-label>
          <ion-input v-model="pilihanC" placeholder="Masukkan jawaban C"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Jawaban D</ion-label>
          <ion-input v-model="pilihanD" placeholder="Masukkan jawaban D"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Jawaban Benar</ion-label>
          <ion-select v-model="jawabanBenar">
            <ion-select-option value="A">A</ion-select-option>
            <ion-select-option value="B">B</ion-select-option>
            <ion-select-option value="C">C</ion-select-option>
            <ion-select-option value="D">D</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="submitSoal">Submit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/views/firebase.js';

const pertanyaan = ref('');
const pilihanA = ref('');
const pilihanB = ref('');
const pilihanC = ref('');
const pilihanD = ref('');
const jawabanBenar = ref('');

const submitSoal = async () => {
  if (pertanyaan.value && pilihanA.value && pilihanB.value && pilihanC.value && pilihanD.value && jawabanBenar.value) {
    try {
      await addDoc(collection(db, 'soal'), {
        pertanyaan: pertanyaan.value,
        answers: {
          A: pilihanA.value,
          B: pilihanB.value,
          C: pilihanC.value,
          D: pilihanD.value,
        },
        jawabanBenar: jawabanBenar.value,
      });
      alert('Soal berhasil disimpan');
      pertanyaan.value = '';
      pilihanA.value = '';
      pilihanB.value = '';
      pilihanC.value = '';
      pilihanD.value = '';
      jawabanBenar.value = '';
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  } else {
    alert('Semua field harus diisi');
  }
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
