<template>
  <ion-page>
    <ion-content class="splash">
      <div class="container">
        <!-- <img src="../assets/img/New-MIT.png" class="logo" /> -->
        <!-- <h2 class="titleApp">M I T Mobile</h2> -->
        <ion-spinner name="dots" class="loader" />
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup>
//store data local
import ls from "localstorage-slim";
import { onMounted } from "vue";
import { IonContent, IonPage, IonSpinner } from "@ionic/vue";
import alertComposables from "../composables/alert";
import { useRouter } from "vue-router";
import axios from "axios";
import DB from "../services/storage";

const router = useRouter();

onMounted(async () => {
  getUserInformation();
});
const getUserInformation = async () => {
  const token = ls.get("token", { decrypt: true });
  try {
    const res = await axios.get("/Api/General/GetUserInformation", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
      DB.addSingleData("UserInformation", res.data[0]);
      ls.set("EmployeeName", res.data[0].Name, { encrypt: true });
      ls.set("Position", res.data[0].Position, { encrypt: true });
      ls.set("EmployeeCode", res.data[0].Code, { encrypt: true });
      ls.set(
        "role",
        res.data[0].Role == "Administrators" ? "admin" : "employee",
        {
          encrypt: true,
        }
      );
      ls.set("PhotoProfile", res.data[0].Photo);
      setTimeout(() => {
        ls.set("loading-screen", false, { encrypt: true });
        router.push({ path: "/page/home", replace: true });
      }, 2500);
    } else {
      setTimeout(() => {
        alertComposables.toastV("CONNECTION ERROR", "danger");
        localStorage.clear();
        ls.set("loading-screen", false, { encrypt: true });
        router.push({ name: "login" });
        setTimeout(() => {
          router.go();
        }, 1000);
      }, 2500);
    }
  } catch (error) {
    setTimeout(() => {
      alertComposables.toastV(error, "danger");
      localStorage.clear();
      ls.set("loading-screen", false, { encrypt: true });
      router.push({ name: "login" });
      setTimeout(() => {
        router.go();
      }, 1000);
    }, 2500);
  }
};
</script>
<style>
ion-content.splash {
  --background: #f5f5f3;
}
.splash .container {
  margin-top: 60%;
}
.splash .container img.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 5px solid white;
}
.splash h2.titleApp {
  font-weight: 600;
  text-align: center;
  font-size: 2rem;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc, 2px 2px 2px rgba(206, 206, 206, 0);
  color: #444444;
  margin-top: 0;
  /* background: #f5f5f3; */
}
.splash .container .loader {
  margin-top: -50px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.splash ion-spinner.loader {
  transform: scale(1.5);
}
</style>
