import firebase from "firebase";
import { onUnmounted, ref } from "vue";

var firebaseConfig = {
  apiKey: "AIzaSyARku14J6PNzA-srEGnsmawI8ybfKbRbdE",
  authDomain: "la-maison-b568d.firebaseapp.com",
  projectId: "la-maison-b568d",
  storageBucket: "la-maison-b568d.appspot.com",
  messagingSenderId: "753010852622",
  appId: "1:753010852622:web:4d4f4a1543887a04e90d5f",
  measurementId: "G-J10KEYMXTZ",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const devicesCollection = db.collection("Devices");

export const createDevice = (device) => {
  return devicesCollection.add(device);
};

export const getDevice = async (id) => {
  const device = await devicesCollection.doc(id).get();
  return device.exists ? device.data() : null;
};

export const updateDevice = (id, device) => {
  return devicesCollection
    .doc(id)
    .update(device)
    .then(() => console.log("device successfully updated!"));
};

export const deleteDevice = (id) => {
  return devicesCollection.doc(id).delete();
};

export const useLoadDevices = () => {
  const devices = ref([]);
  devicesCollection.onSnapshot((snapshot) => {
    devices.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return devices;
};
