<template>
  <ion-app>
    <router-view />
  </ion-app>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/views/firebase.js';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    onAuthStateChanged(auth, user => {
      if (user) {
        router.push('/page/home');
      } else {
        router.push('/login');
      }
    });
  }
};
</script>
