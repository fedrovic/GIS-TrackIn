// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCygRKrnhEecPrhRMJZUm1sVKVrZYUbWLY",
  authDomain: "fredportfolio-7a53c.firebaseapp.com",
  databaseURL: "https://fredportfolio-7a53c-default-rtdb.firebaseio.com",
  projectId: "fredportfolio-7a53c",
  storageBucket: "fredportfolio-7a53c.firebasestorage.app",
  messagingSenderId: "586695046110",
  appId: "1:586695046110:web:b16ad1db078b359c3fe34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Mapbox setup
mapboxgl.accessToken = "pk.eyJ1IjoiZmVkcmktMjU2IiwiYSI6ImNtZnkxN3psZzA2azQya3MzYWo2NjEwdG4ifQ.-tyKAt2LloHxdUYDYfiZMw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [30.0, -1.0], // Default (Uganda area)
  zoom: 6,
});

// ✅ Markers
let userMarker = null;
let phoneMarker = null;

// 📌 Save user location
function saveUserLocation(user) {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      set(ref(db, "locations/" + user.uid), {
        lat,
        lng,
        email: user.email
      });

      // Show user marker (blue)
      if (userMarker) userMarker.remove();
      userMarker = new mapboxgl.Marker({ color: "blue" })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setText("You are here"))
        .addTo(map);

      map.setCenter([lng, lat]);
    });
  }
}

// 📌 Track another phone (yellow marker)
function trackPhones(user) {
  const locRef = ref(db, "locations");
  onValue(locRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      Object.keys(data).forEach((uid) => {
        if (uid !== user.uid) {
          const phone = data[uid];
          if (phoneMarker) phoneMarker.remove();
          phoneMarker = new mapboxgl.Marker({ color: "yellow" })
            .setLngLat([phone.lng, phone.lat])
            .setPopup(new mapboxgl.Popup().setText("Tracked phone: " + phone.email))
            .addTo(map);
        }
      });
    }
  });
}

// ✅ Auth buttons
document.getElementById("signinBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider).catch((err) => alert(err.message));
});

document.getElementById("signoutBtn").addEventListener("click", () => {
  signOut(auth);
});

// ✅ Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("signinBtn").style.display = "none";
    document.getElementById("signoutBtn").style.display = "inline-block";

    saveUserLocation(user);
    trackPhones(user);
  } else {
    document.getElementById("signinBtn").style.display = "inline-block";
    document.getElementById("signoutBtn").style.display = "none";
  }
});
