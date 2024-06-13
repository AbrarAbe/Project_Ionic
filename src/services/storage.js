import { Storage, Drivers } from "@ionic/storage";
import * as CordovaSQLiteDriver from "localforage-cordovasqlitedriver";

const storage = new Storage({
  name: "__MITdb",
  driverOrder: [
    CordovaSQLiteDriver._driver,
    Drivers.IndexedDB,
    Drivers.LocalStorage,
  ],
});
storage.defineDriver(CordovaSQLiteDriver);
storage.create();
console.log("Storage connected");
export default {
  async getData(STORAGE_KEY) {
    return (await storage.get(STORAGE_KEY)) || [];
  },
  async addData(STORAGE_KEY, item) {
    const storedData = (await storage.get(STORAGE_KEY)) || [];
    storedData.push(item);
    return storage.set(STORAGE_KEY, storedData);
  },
  async removeData(STORAGE_KEY, index) {
    const storedData = (await storage.get(STORAGE_KEY)) || [];
    storedData.splice(index, 1);
    return storage.set(STORAGE_KEY, storedData);
  },
  async clearData(STORAGE_KEY) {
    return await storage.remove(STORAGE_KEY);
  },
  async addSingleData(STORAGE_KEY, storedData) {
    return storage.set(STORAGE_KEY, storedData);
  },
};
