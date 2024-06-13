import { alertController, toastController } from "@ionic/vue";
import { App } from "@capacitor/app";

async function alertV(text, mssg) {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    mode: "ios",
    header: text,
    message: mssg,
    buttons: ["OK"],
  });
  await alert.present();
}
async function toastV(text, color) {
  const toast = await toastController.create({
    message: text,
    duration: 2000,
    color: color,
    position: "top",
  });
  toast.present();
}

export async function confirmExit() {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    header: "Confirm!",
    message: "<strong>Confirm to Exit App??</strong>",
    mode: "ios",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        id: "cancel-button",
        handler: () => {
          console.log("Confirm Cancel");
        },
      },
      {
        text: "Confirm",
        id: "confirm-button",
        handler: async () => {
          App.exitApp();
        },
      },
    ],
  });
  alert.present();
}

export default { alertV, toastV, confirmExit };
