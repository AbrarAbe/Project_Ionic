<template>
  <ion-app>
    <router-view />
  </ion-app>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/views/firebase.js';
import { useRouter } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';

export default {
  setup() {
    const router = useRouter();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const role = userData.role;
            if (role === 'murid') {
              router.push('/page/menuujian');
            } else if (role === 'guru') {
              router.push('/page/menuinputujian');
            } else {
              console.error('Role tidak diketahui');
              // jika role tidak diketahui
              router.push('/login');
            }
          } else {
            console.error('No such document!');
            // jika user tidak ditemukan
            router.push('/login');
          }
        } catch (error) {
          console.error('Error getting user document:', error);
          // jika error
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    });
  },
};
</script>
