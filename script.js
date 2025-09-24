// ==== CONFIGURE FIREBASE ====
const firebaseConfig = {
  apiKey: "AIzaSyCygRKrnhEecPrhRMJZUm1sVKVrZYUbWLY",
  authDomain: "fredportfolio-7a53c.firebaseapp.com",
  databaseURL: "https://fredportfolio-7a53c-default-rtdb.firebaseio.com",
  projectId: "fredportfolio-7a53c",
  storageBucket: "fredportfolio-7a53c.appspot.com",
  messagingSenderId: "586695046110",
  appId: "1:586695046110:web:b16ad1db078b359c3fe34f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// ==== CONFIGURE MAPBOX ====
mapboxgl.accessToken = "pk.eyJ1IjoiZmVkcmktMjU2IiwiYSI6ImNtZnJ6dTg2MzBjM2QyanF5cDJ0cDlwZGMifQ.Ttb_MrE99t7YjMFORnEg1g";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [30.75, -0.6], // Uganda center
  zoom: 6
});

// ==== UI BUTTONS ====
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const shareBtn = document.getElementById("share");
const stopBtn = document.getElementById("stop");
const simulateBtn = document.getElementById("simulate");

let userMarker = null;
let watchId = null;

// ==== AUTH ====
loginBtn.onclick = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

logoutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
    shareBtn.style.display = "inline";
  } else {
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
    shareBtn.style.display = "none";
    stopBtn.style.display = "none";
  }
});

// ==== LOCATION SHARING ====
shareBtn.onclick = () => {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(pos => {
      const { latitude, longitude } = pos.coords;

      // Save to Firebase
      const uid = auth.currentUser.uid;
      db.ref("locations/" + uid).set({ lat: latitude, lng: longitude });

      // Show marker
      if (userMarker) userMarker.remove();
      userMarker = new mapboxgl.Marker({ color: "blue" })
        .setLngLat([longitude, latitude])
        .setPopup(new mapboxgl.Popup().setText("You"))
        .addTo(map);

      map.flyTo({ center: [longitude, latitude], zoom: 14 });
    });

    shareBtn.style.display = "none";
    stopBtn.style.display = "inline";
  }
};

stopBtn.onclick = () => {
  if (watchId) navigator.geolocation.clearWatch(watchId);
  stopBtn.style.display = "none";
  shareBtn.style.display = "inline";
};

// ==== SIMULATE OTHER PHONES ====
let demoMarkers = [];
simulateBtn.onclick = () => {
  // Clear old
  demoMarkers.forEach(m => m.remove());
  demoMarkers = [];

  const phones = [
    { id: "Phone A", coords: [30.75, -0.6] },
    { id: "Phone B", coords: [30.8, -0.62] },
    { id: "Phone C", coords: [30.7, -0.58] }
  ];

  phones.forEach(p => {
    const marker = new mapboxgl.Marker({ color: "yellow" })
      .setLngLat(p.coords)
      .setPopup(new mapboxgl.Popup().setText(p.id))
      .addTo(map);
    demoMarkers.push(marker);

    // Simulate movement
    setInterval(() => {
      p.coords[0] += (Math.random() - 0.5) * 0.01;
      p.coords[1] += (Math.random() - 0.5) * 0.01;
      marker.setLngLat(p.coords);
    }, 3000);
  });
};
