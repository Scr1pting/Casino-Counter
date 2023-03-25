let firebaseConfig = {
  apiKey: "AIzaSyDHQsxakmLA3zH9-_8J_eeBkPgMvgu02uQ",
  authDomain: "casino-2d467.firebaseapp.com",
  projectId: "casino-2d467",
  storageBucket: "casino-2d467.appspot.com",
  messagingSenderId: "482439736005",
  appId: "1:482439736005:web:69888954fc3d1cf45c5eac",
};
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();
db.settings({ timestampInSnapshots: true });
