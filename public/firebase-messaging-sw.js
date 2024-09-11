importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js"
);

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJWB-hlXDoj9CVctEOf9bv9qMuQqx-MUg",
  authDomain: "push-notif-facee.firebaseapp.com",
  projectId: "push-notif-facee",
  storageBucket: "push-notif-facee.appspot.com",
  messagingSenderId: "870674136614",
  appId: "1:870674136614:web:e37e14835bd74b2618f0e7",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
