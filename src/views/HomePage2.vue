<template>
  <ion-page>
    <ion-content class="home-page">
      <div class="main_content_div">

        <!--Search Bar-->

        <ion-header
          translucent="true"
          style="position: fixed; top: 0; left: 0; right: 0"
          ><br />
          <ion-toolbar>
            <ion-searchbar
              animated="true"
              placeholder="Cari Toekang"
            ></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        <div class="user_div"></div>
        <div class="top-radius" />
        <div class="content_div">
          <div class="card-heading ion-padding"></div>
          <ion-grid>
            <br /><br /><br />
            <ion-row style="justify-content: space-between">

              <!-- Menu Atas -->

              <!--Tukang bangunan-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('dasarpenjumlahan')"
                >
                  <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/office.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Bangunan <br />
                  </h6>
                </div>
              </ion-col>

              <!--Tukang mengajar-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('dasarprima')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/desk1.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Mengajar <br />
                  </h6>
                </div>
              </ion-col>

              <!--Tukang ketik-->

              <ion-col>
                <div class="item-menu" @click.prevent="toNavigate('dasarrata')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/desk.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Ketik<br />
                  </h6>
                </div>
              </ion-col>

              <!--Tukang sampah-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('daftarhadir')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/garbage-truck.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Sampah<br />
                  </h6>
                </div>
              </ion-col>
            </ion-row>

          <!--Baris 2-->
          <ion-row style="justify-content: space-between">

            <!--Tukang jahit-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('dasarpenjumlahan')"
                >
                  <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/scissors.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Jahit <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>

              <!--Tukang kebun-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('dasarprima')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/lawn-care.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Kebun <br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>

              <!--Tukang kayu-->

              <ion-col>
                <div class="item-menu" @click.prevent="toNavigate('dasarrata')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/woodworker.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Tukang Kayu<br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>

              <!--Lihat lainnya-->

              <ion-col>
                <div
                  class="item-menu"
                  @click.prevent="toNavigate('daftarhadir')"
                >
                <div class="circle-bg">
                    <img
                      alt="project"
                      src="../assets/icons/more.png"
                      style="width: 30px; height: 30px"
                    />
                  </div>
                  <h6 class="item-text">
                    Lihat Semua<br /><span style="opacity: 0">s</span>
                  </h6>
                </div>
              </ion-col>
            </ion-row>

            <!--Label-->

            <ion-card-subtitle style="margin-left: 15px"
              >Cari Tukang</ion-card-subtitle
            >

            <!--Tukang rekomendasi-->

            <!--Card 1-->

            <!--Modal 2-->
             
            <ion-card @click="openModal2()"
            >
            <ion-modal
            :is-open="isModalOpen2"
              @ionModalDidDismiss="dismissModal2"
            >
              <ion-header>
                <ion-toolbar>
                  <ion-title>{{
                    "Detail Tukang"
                  }}</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismissModal2">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <br />
                <center>
                <img
                  alt="Silhouette of mountains"
                  src="../../a.png"
                  style="height: 100px; width: 100px"
                />
              </center>
                <br />
                <h1>Joni Setiawan</h1>
                <p>
                  Joni Setiawan adalah seorang tukang bangunan berpengalaman 
                  dengan dedikasi yang luar biasa terhadap profesinya. Sejak usia muda, 
                  Joni telah menunjukkan bakat alaminya dalam konstruksi, membangun reputasi 
                  sebagai salah satu yang terbaik di bidangnya. Dengan lebih dari 15 tahun 
                  pengalaman, ia telah terlibat dalam berbagai proyek, mulai dari renovasi 
                  rumah kecil hingga pembangunan gedung bertingkat.
                  </p>
                  <br />
                  <!--Toolbar-->
                  <ion-footer>
                  <ion-toolbar>
                    <center>
                      <ion-button expand="block">Pesan</ion-button>
                    </center>
                  </ion-toolbar>
                </ion-footer>
              </ion-content>
            </ion-modal>

              <div style="display: flex; align-items: center">
                <img
                  alt="Silhouette of mountains"
                  src="../../a.png"
                  style="height: 100px; width: 100px"
                />
                <ion-card-header>
                  <ion-card-title style="margin-left: 10px; margin-bottom: 5px"
                    >Gibran</ion-card-title
                  >

                  <ion-card-subtitle style="margin-left: 10px"
                    >Tukang Bangunan</ion-card-subtitle
                  >
                  <p style="margin-left: 10px">
                    Pekerjaan Harian dan Borongan.
                  </p>

                  <div
                    style="
                      display: flex;
                      align-items: center;
                      margin-left: 10px;
                    "
                  >
                    <ion-badge>Rp.150.000</ion-badge>
                    <ion-badge style="margin-left: 5px"> * 4.5 </ion-badge>
                  </div>
                </ion-card-header>
              </div>
            </ion-card>

            <!--Card 2-->
            
            <!--Modal 3-->

            <ion-card @click="openModal3()"
            >
            <ion-modal
            :is-open="isModalOpen3"
              @ionModalDidDismiss="dismissModal3"
            >
              <ion-header>
                <ion-toolbar>
                  <ion-title>{{
                    "Detail Tukang"
                  }}</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismissModal3">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <br />
                <img
                  alt="Silhouette of mountains"
                  src="../../b.png"
                  style="height: 100px; width: 100px"
                />
              <br />
                <h1>Dinda Arini</h1>
                <p>
                  Dinda Arini adalah seorang tukang ketik profesional yang telah mengabdikan diri 
                  dalam dunia pengetikan selama lebih dari satu dekade. Dengan kecepatan dan ketelitian yang luar biasa, 
                  Dinda telah membantu ratusan klien dalam menyalin, menyusun, dan menyempurnakan berbagai dokumen penting.
                  </p>
              </ion-content>
            </ion-modal>

              <div style="display: flex; align-items: center">
                <img
                  alt="Silhouette of mountains"
                  src="../../b.png"
                  style="height: 100px; width: 100px"
                />
                <ion-card-header>
                  <ion-card-title style="margin-left: 10px; margin-bottom: 5px"
                    >Dindi</ion-card-title
                  >

                  <ion-card-subtitle style="margin-left: 10px"
                    >Tukang Ketik</ion-card-subtitle
                  >
                  <p style="margin-left: 10px">Pekerjaan PerHalaman.</p>

                  <div
                    style="
                      display: flex;
                      align-items: center;
                      margin-left: 10px;
                    "
                  >
                    <ion-badge>Rp.10.000</ion-badge>
                    <ion-badge style="margin-left: 5px"> * 4.5 </ion-badge>
                  </div>
                </ion-card-header>
              </div>
            </ion-card>

            <!--Card 3-->

            <!--Modal 4-->
            <ion-card @click="openModal4()"
            >
            <ion-modal
            :is-open="isModalOpen4"
              @ionModalDidDismiss="dismissModal4"
            >
              <ion-header>
                <ion-toolbar>
                  <ion-title>{{
                    "Detail Tukang"
                  }}</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismissModal4">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <br />
                <img
                  alt="Silhouette of mountains"
                  src="../../a.png"
                  style="height: 100px; width: 100px"
                />
                <br />
                <h1>Dilan Ramadhan</h1>
                <p>
                  Dilan Ramadhan adalah seorang fotografer profesional yang telah menekuni 
                  dunia fotografi selama lebih dari 12 tahun. Dengan mata yang tajam untuk 
                  detail dan bakat alami dalam menangkap momen-momen berharga, Dilan telah 
                  menjadi pilihan utama bagi banyak klien yang mencari hasil foto yang memukau 
                  dan penuh makna.
                  </p>
              </ion-content>
            </ion-modal>

              <div style="display: flex; align-items: center">
                <img
                  alt="Silhouette of mountains"
                  src="../../a.png"
                  style="height: 100px; width: 100px"
                />
                <ion-card-header>
                  <ion-card-title style="margin-left: 10px; margin-bottom: 5px"
                    >Abang. Dilan</ion-card-title
                  >

                  <ion-card-subtitle style="margin-left: 10px"
                    >Tukang Foto</ion-card-subtitle
                  >
                  <p style="margin-left: 10px">Perpaket.</p>

                  <div
                    style="
                      display: flex;
                      align-items: center;
                      margin-left: 10px;
                    "
                  >
                    <ion-badge>Rp.300.000</ion-badge>
                    <ion-badge style="margin-left: 5px"> * 4.5 </ion-badge>
                  </div>
                </ion-card-header>
              </div>
            </ion-card>

            <!--Tips dan trik-->

          </ion-grid>
          <ion-card-subtitle style="margin-left: 15px"
            >Tips dan Trik</ion-card-subtitle
          >
          <ion-card
            v-for="(resep, key) in dasarmatematika"
            :key="key"
            @click="openModal(resep)"
          >

          <!--Modal 1-->
          
            <ion-modal
              :is-open="isModalOpen"
              @ionModalDidDismiss="dismissModal"
            >
              <ion-header>
                <ion-toolbar>
                  <ion-title>{{
                    selectedResep ? selectedResep.tittle : ""
                  }}</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="dismissModal">Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <br /><br /><br />
                <h1>{{ selectedResep ? selectedResep.tittle : "" }}</h1>
                <img :src="resep.imageURL" alt="Resep Image" />

                <p>
                  {{ selectedResep ? selectedResep.content : "" }}
                </p>
                <br />

                <center>
                  <h1>Penjelasan Dengan Video</h1>
                  <iframe :src="resep.videoURL" frameborder="100"></iframe>
                </center>
              </ion-content>
            </ion-modal>
            <img :src="resep.imageURL" alt="Resep Image" />
            <ion-card-header>
              <ion-card-title>{{ resep.tittle }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              {{ selectedResep ? selectedResep.tittle : "" }}
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted } from "vue";
import {
  IonCardSubtitle,
  IonBadge,
  IonSearchbar,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonCardTitle,
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
} from "@ionic/vue";
// Import AdMob directly
import { AdMob } from "@capacitor-community/admob";
// import { ConvertFullDate } from "../composables/composables";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getDatabase, ref as dbRef, get, child } from "firebase/database";
import { firebaseApp } from "../views/firebase.js";

const dasarmatematika = ref([]);
const selectedResep = ref(null);
const isModalOpen = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
const isModalOpen4 = ref(false);

const fetchData = async () => {
  const db = getDatabase(firebaseApp);
  const resepRef = dbRef(db, "dasarmatematika");

  try {
    const snapshot = await get(child(resepRef, "/"));
    if (snapshot.exists()) {
      dasarmatematika.value = Object.values(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});

// Modal 1 tips & trik

const openModal = (resep) => {
  selectedResep.value = resep;
  isModalOpen.value = true;
};

const dismissModal = () => {
  selectedResep.value = null;
  isModalOpen.value = false;
};

// Modal 2

const openModal2 = () => {
  isModalOpen2.value = true;
};

const dismissModal2 = () => {
  isModalOpen2.value = false;
};

// Modal 3

const openModal3 = () => {
  isModalOpen3.value = true;
};

const dismissModal3 = () => {
  isModalOpen3.value = false;
};

// Modal 4

const openModal4 = () => {
  isModalOpen4.value = true;
};

const dismissModal4 = () => {
  isModalOpen4.value = false;
};

// const isOpen = ref(false);
// // const setOpen = (open) => (isOpen.value = open);

const router = useRouter();
const initializeAdMob = async () => {
  await AdMob.initialize({
    appId: "ca-app-pub-5370500978282229~1611991188",
  });
};

// Call initializeAdMob when the component is mounted
onMounted(() => {
  initializeAdMob();
  showAdMobBanner();
});

const showAdMobBanner = async () => {
  // Get the container reference
  const admobBannerContainer = document.getElementById(
    "admob-banner-container"
  );

  // Show the banner ad
  await AdMob.showBanner({
    adId: "ca-app-pub-5370500978282229/2695641013",
    container: admobBannerContainer,
    position: "TOP_CENTER",
    size: "SMART_BANNER",
    overlap: false,
  });
};

const showInterstitialAd = async () => {
  try {
    const options = {
      adId: "ca-app-pub-5370500978282229/7477194404",
      isTesting: false,
    };

    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  } catch (error) {
    console.error("Error showing Interstitial Ad:", error);
  }
};

const toNavigate = async (routeName) => {
  console.log(`Navigating to ${routeName}`);

  // Show the interstitial ad before moving to the next route
  await showInterstitialAd();

  // Move to the desired route
  router.push({ name: routeName });
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
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
  background-color: #729d39;
  border-radius: 50%;
}

.item-text {
  color: black;
  text-align: center;
  margin-top: 8px; /* Adjust spacing as needed */
}
</style>
