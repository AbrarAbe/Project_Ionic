<template>
    <ion-page>
      <ion-content class="register" scroll-y="true">
        <div class="header-register">
          <div class="logo ion-padding">
            <H1 style="color:white">Aplikasi Ujian<br/><H6 style="color:white">Ujian dimana saja dan kapan saja.</H6></H1>
            <!--<img src="../assets/img/LogoWE1.png" alt="" />-->
          </div>
        </div>
        <div class="ion-header">
        <div class=" content-register" style="padding: 20px">
          <h1 style="margin: 0; margin-bottom: 5px">Selamat Datang!</h1>
          <p style="margin: 0">Silahkan register terlebih dahulu</p>
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
          <div class="label">
              <h2>Role</h2>
            </div>
            <div class="input ion-activatable ripple-parent">
              <ion-select v-model="role">
                <ion-select-option value="murid">Murid</ion-select-option>
                <ion-select-option value="guru">Guru</ion-select-option>
              </ion-select>
              <ion-ripple-effect mode="ios" />
            </div>
            <ion-button
            mode="ios"
            class="login"
            @click.prevent="Register"
            expand="block"
          >
            <span style="font-size: 1.2rem">Register</span>
          </ion-button>
          
          <div class="label">
            <center><h2>Sudah punya akun? Silahkan login</h2></center>
          </div>

          <ion-button
          mode="ios"
          class="register"
          @click.prevent="toNavigate('login')"
          expand="block"
        >
          <span style="font-size: 1.2rem">Login</span>
        </ion-button>
        </div>
        <ion-loading
          mode="ios"
          :is-open="loading"
          message="Please Wait..."
          spinner="crescent"
        />
          </div>
          <h5
            class="ion-text-center"
            style="margin: 0; color: var(--ion-color-danger)"
            v-if="errored == true"
          >
            {{ errMsg }}
          </h5>
          
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonPage,
    IonContent,
    IonIcon,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonRippleEffect,
    IonButton,
    IonLoading,
  } from "@ionic/vue";
  import { ref } from "vue";
  import { mail, lockClosed, eyeOffOutline, eyeOutline } from "ionicons/icons";
  import { useRouter } from "vue-router";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { setDoc, doc } from "firebase/firestore";
  import { auth, db } from "../views/firebase.js";
  
  const loading = ref(false);
  const email = ref();
  const password = ref();
  const role = ref("murid");
  const typePass = ref("password");
  const errMsg = ref();
  const errored = ref(false);
  const router = useRouter();
  
  const Register = async () => {
    errored.value = false;
    if (email.value == null || email.value === "" || password.value == null || password.value === "") {
      errored.value = true;
      errMsg.value = "Email dan Password tidak boleh kosong";
    } else {
      loading.value = true;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        // Simpan role ke Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: email.value,
          role: role.value,
        });
        loading.value = false;
        errored.value = false;
        router.push({ name: role.value === "murid" ? "homepagemurid" : "homepageguru" });
      } catch (error) {
        console.log(error);
        loading.value = false;
        errored.value = true;
        errMsg.value = error.message;
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
  