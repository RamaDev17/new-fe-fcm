// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJWB-hlXDoj9CVctEOf9bv9qMuQqx-MUg",
    authDomain: "push-notif-facee.firebaseapp.com",
    projectId: "push-notif-facee",
    storageBucket: "push-notif-facee.appspot.com",
    messagingSenderId: "870674136614",
    appId: "1:870674136614:web:e37e14835bd74b2618f0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log(permission);

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: `BPqSA8O3SLLQxtFiHgry7qeYu_EGUGJRA5SRzF4L5vqQdWraseEQoHjybfzafP8JK9YhBrp-eR6R84OChJOgsS8`,
      });
      return token;
    } else {
      console.log("Permission Denied");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// export const requestPermission = async () => {
//   console.log("Requesting User Permission......");
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       console.log("Notification User Permission Granted.");
//       const currentToken = await getToken(messaging, {
//         vapidKey: `BMdVv9p5ypo6L83obg0y2Zrl5P7rkHD2yzdLztaqWHB94D1bO4AHL6Nu8n7kBkRmOk_9xrV_JYuuovO8f9XXUcI`,
//       });
//       if (currentToken) {
//         console.log("Client Token: ", currentToken);
//         localStorage.setItem("device_token", currentToken);
//       } else {
//         console.log("Failed to generate the app registration token.");
//       }
//     } else {
//       console.log("User Permission Denied.");
//     }
//   } catch (err) {
//     console.log("An error occurred when requesting permission:", err);
//   }
// };
