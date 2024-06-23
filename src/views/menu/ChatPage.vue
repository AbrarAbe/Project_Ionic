<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Chat</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="chat-container">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['chat-bubble', message.type]"
        >
          <div class="message-content">
            <div class="message-text">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-item lines="none">
          <ion-textarea
            v-model="newMessage"
            placeholder="Ketik pesan"
            auto-grow="true"
          ></ion-textarea>
          <ion-button @click="sendMessage">Kirim</ion-button>
        </ion-item>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  IonTextarea,
  IonButton,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const messages = ref([
  { text: "Halo!", type: "received" },
  { text: "Hai! Ada yang bisa saya bantu?", type: "sent" },
]);

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim() !== "") {
    messages.value.push({ text: newMessage.value, type: "sent" });
    newMessage.value = "";
    // Simulasi balasan dari sisi lain
    setTimeout(() => {
      messages.value.push({
        text: "Terima kasih atas pesannya!",
        type: "received",
      });
    }, 1000);
  }
};

onMounted(() => {
  console.log("Component mounted");
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 70px; /* Space for input box */
}

.chat-bubble {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
}

.received {
  align-self: flex-start;
  background-color: #e0e0e0;
}

.sent {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
}

.message-content {
  display: flex;
  flex-direction: column;
}

.message-text {
  margin: 0;
}

ion-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}

ion-toolbar {
  --padding-start: 10px;
  --padding-end: 10px;
}

ion-item {
  --inner-padding-end: 0;
  flex: 1;
  display: flex;
  align-items: center;
}

ion-textarea {
  flex: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  resize: none; /* Prevent manual resizing */
}
</style>
