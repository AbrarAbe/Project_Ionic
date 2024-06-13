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
            <h2>Email<span>*</span>:</h2>
          </div>
          <div class="input ion-activatable ripple-parent">
            <ion-icon class="start" :icon="mail" color="primary" />
            <ion-input class="email" type="text" placeholder="   ex : user@gmail.com" v-model="email" />
            <ion-ripple-effect mode="ios" />
          </div>
          <div class="label">
            <h2>Password<span>*</span>:</h2>
          </div>
          <div class="input ion-activatable ripple-parent">
            <ion-icon class="start" :icon="lockClosed" color="primary" />
            <ion-input class="password" @keyup.enter="Login" :type="typePass" placeholder="ex : password123*"
              v-model="password" />
            <ion-ripple-effect mode="ios" />
            <ion-icon class="end" v-if="typePass == 'password'" color="primary" :icon="eyeOutline"
              @click.prevent="showPass('text')" />
            <ion-icon class="end" v-else color="primary" :icon="eyeOffOutline" @click.prevent="showPass('password')" />
          </div>
        </div>
        <h5 class="ion-text-center" style="margin: 0; color: var(--ion-color-danger)" v-if="errored == 'true'">
          {{ errMsg }}
        </h5>
        <ion-button mode="ios" class="login" @click.prevent="Login" expand="block">
          <span style="font-size: 1.2rem"> Login</span>
        </ion-button>
      </div>
      </div>
      <!-- <div style="margin-top: 30px" id="header">
        <h1>Welcome Back!</h1>
        <p style="margin: 0">Please Log in to your account</p>
        <img src="../assets/img/MIT.png" alt="" />
      </div>
      <div class="input-group" style="margin-top: 0px">
        <div class="input ion-activatable ripple-parent">
          <ion-icon class="start" :icon="mail" color="primary" />
          <ion-input
            class="email"
            style="text-align: center"
            type="text"
            placeholder="Email"
            v-model="email"
          />
          <ion-ripple-effect mode="ios" />
          <ion-icon class="hidden" :icon="eyeOutline" />
        </div>
        <div class="input ion-activatable ripple-parent">
          <ion-icon class="start" :icon="lockClosed" color="primary" />
          <ion-input
            class="password"
            style="text-align: center"
            @keyup.enter="Login"
            :type="typePass"
            placeholder="Password"
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
      <ion-text color="danger" v-if="errored == 'true'">
        <h5>{{ errMsg }}</h5>
      </ion-text>
      <ion-button
        mode="ios"
        class="login"
        @click.prevent="Login"
        expand="block"
      >
        <span style="font-size: 1.5rem"> Log in</span>
      </ion-button> -->
      <ion-loading mode="ios" :is-open="loading" message="Please Wait..." spinner="crescent" />
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
  // IonText,
  IonButton,
  IonLoading,
  useBackButton,
} from "@ionic/vue";
import { ref } from "vue";
import { mail, lockClosed, eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import AlertMssg from "../composables/alert";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../views/firebase.js";

const loading = ref(false);
const email = ref();
const password = ref();
const typePass = ref("password");
const errMsg = ref();
const errored = ref(false);
const router = useRouter();
console.log(router.currentRoute.value.name);
useBackButton(-1, () => {
  if (router.currentRoute.value.name == "login") {
    AlertMssg.confirmExit();
  }
});

const Login = async () => {
  errored.value = "false";
  if (email.value == null || email.value == "") {
    errored.value = "true";
    errMsg.value = "Email tidak boleh kosong";
  } else {
    loading.value = true;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      loading.value = true;
      errored.value = "false";
      typePass.value = "password";
      router.push({ name: "splash" });
      setTimeout(() => {
        email.value = "";
        password.value = "";
      }, 1000);
    } catch (error) {
      console.log(error);
      loading.value = false;
      errored.value = "true";
      errMsg.value = "Email atau password tidak valid";
    }
  }
};
const showPass = async (type) => {
  typePass.value = type;
};
</script>
