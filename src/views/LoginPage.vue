<template>
  <ion-page>
    <ion-content class="login" scroll-y="true">
      <div class="header-login">
        <div class="logo ion-padding">
          <H1 style="color:white">Aplikasi Toekang<br/><H6 style="color:white">Butuh tukang? Kami ada!</H6></H1>
          <img src="../assets/img/LogoWE1.png" alt="" />
        </div>
      </div>
      <div class="ion-header">
      <div class=" content-login" style="padding: 20px">
        <h1 style="margin: 0; margin-bottom: 5px">Selamat Datang!</h1>
        <p style="margin: 0">Silahkan login terlebih dahulu</p>
        <div class="input-group">
          <div class="label">
            <h2>Email</h2>
            <span>*</span>
          </div>
          <div class="input ion-activatable ripple-parent">
            <ion-icon class="start" :icon="mail" color="primary" />
            <ion-input
              class="email"
              type="text"
              placeholder="ex : user@gmail.com"
              v-model="email"
            />
            <ion-ripple-effect mode="ios" />
          </div>
          <div class="label">
            <h2>Password</h2>
            <span>*</span>
          </div>
          <div class="input ion-activatable ripple-parent">
            <ion-icon class="start" :icon="lockClosed" color="primary" />
            <ion-input
              class="password"
              @keyup.enter="Login"
              :type="typePass"
              placeholder="ex : password123*"
              v-model="password"
            />
            <ion-ripple-effect mode="ios" />
            <ion-icon
              class="end"
              v-if="typePass == 'password'"
              color="primary"
              :icon="eyeOutline"
              @click.prevent="showPass('text')"
            />
            <ion-icon
              class="end"
              v-else
              color="primary"
              :icon="eyeOffOutline"
              @click.prevent="showPass('password')"
            />
          </div>
        </div>
        <h5
          class="ion-text-center"
          style="margin: 0; color: var(--ion-color-danger)"
          v-if="errored == true"
        >
          {{ errMsg }}
        </h5>
        <ion-button
          mode="ios"
          class="login"
          @click.prevent="Login"
          expand="block"
        >
          <span style="font-size: 1.2rem">Login</span>
        </ion-button>

        <div class="label">
            <center><h2>Sudah punya akun? Silahkan login</h2></center>
        </div>
        
        <ion-button
          mode="ios"
          class="register"
          @click.prevent="toNavigate('register')"
          expand="block"
        >
          <span style="font-size: 1.2rem">Register</span>
        </ion-button>
      </div>
      <ion-loading
        mode="ios"
        :is-open="loading"
        message="Please Wait..."
        spinner="crescent"
      />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonRippleEffect,
  IonButton,
  IonLoading,
  useBackButton,
} from "@ionic/vue";
import { ref } from "vue";
import { mail, lockClosed, eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../views/firebase.js";

const loading = ref(false);
const email = ref();
const password = ref();
const typePass = ref("password");
const errMsg = ref();
const errored = ref(false);
const router = useRouter();

useBackButton(-1, () => {
  if (router.currentRoute.value.name === "login") {
    // Implement your own alert message here
  }
});

const Login = async () => {
  errored.value = false;
  if (email.value == null || email.value === "" || password.value == null || password.value === "") {
    errored.value = true;
    errMsg.value = "Email dan Password tidak boleh kosong";
  } else {
    loading.value = true;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
      // Ambil role dari Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;
        loading.value = false;
        errored.value = false;
        router.push({ name: role === "murid" ? "homeMurid" : "homeGuru" });
      } else {
        throw new Error("User role tidak ditemukan");
      }
    } catch (error) {
      console.log(error);
      loading.value = false;
      errored.value = true;
      errMsg.value = "IEmail atau password tidak valid";
    }
  }
};

const showPass = async (type) => {
  typePass.value = type;
};
const toNavigate = async (routeName) => {
  console.log(`Navigating to ${routeName}`);

  // Move to the desired route
  router.push({ name: routeName });
};
</script>
