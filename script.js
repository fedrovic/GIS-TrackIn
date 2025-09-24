// ---------- CONFIG ----------
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmVkcmktMjU2IiwiYSI6ImNtZnJ6dTg2MzBjM2QyanF5cDJ0cDlwZGMifQ.Ttb_MrE99t7YjMFORnEg1g';
mapboxgl.accessToken = MAPBOX_TOKEN;

const firebaseConfig = {
  apiKey: "AIzaSyCygRKrnhEecPrhRMJZUm1sVKVrZYUbWLY",
  authDomain: "fredportfolio-7a53c.firebaseapp.com",
  projectId: "fredportfolio-7a53c",
  storageBucket: "fredportfolio-7a53c.firebasestorage.app",
  messagingSenderId: "586695046110",
  appId: "1:586695046110:web:b16ad1db078b359c3fe34f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// ---------- MAP ----------
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [32.58, 0.3476],
  zoom: 12
});

let myMarker = null;
let watchId = null;
let otherMarkers = {}; // yellow demo phones

// ---------- UI ----------
const toggle = document.getElementById('shareToggle');
const signinBtn = document.getElementById('signin');
const stopBtn = document.getElementById('stop');
const status = document.getElementById('status');
const simulateBtn = document.getElementById('simulate');

// ---------- AUTH ----------
signinBtn.onclick = async () => {
  const email = prompt('Email:'); if(!email) return;
  const pw = prompt('Password:'); if(!pw) return;
  try { await auth.signInWithEmailAndPassword(email,pw); alert('Signed in'); }
  catch(err){
    if(err.code === 'auth/user-not-found'){
      try { await auth.createUserWithEmailAndPassword(email,pw); alert('Account created'); }
      catch(e){ alert('Signup error: '+e.message); }
    } else alert('Sign-in error: '+err.message);
  }
};

auth.onAuthStateChanged(u => {
  if(u){ signinBtn.disabled = true; signinBtn.textContent = 'Signed in'; }
  else { signinBtn.disabled = false; signinBtn.textContent = 'Sign In / Sign Up'; }
});

// ---------- SHARE LOCATION ----------
toggle.addEventListener('change', () => {
  if (!toggle.checked) { stopSharing(); return; }
  if (!auth.currentUser) { alert('Sign in first'); toggle.checked=false; return; }
  if (!('geolocation' in navigator)) { alert('Geolocation not supported'); toggle.checked=false; return; }

  status.textContent = 'Requesting location permission...';
  watchId = navigator.geolocation.watchPosition(pos => {
    const lat = pos.coords.latitude, lon = pos.coords.longitude;
    const payload = { uid: auth.currentUser.uid, email: auth.currentUser.email, lat, lon, ts: Date.now() };
    db.ref('locations/' + auth.currentUser.uid).set(payload).catch(console.error);

    if (!myMarker) {
      myMarker = new mapboxgl.Marker({color:'#3333ff'}) // blue for user
        .setLngLat([lon,lat])
        .addTo(map);
      map.easeTo({center:[lon,lat],zoom:14});
    } else {
      myMarker.setLngLat([lon,lat]);
    }

    status.textContent = `Sharing: ${lat.toFixed(5)}, ${lon.toFixed(5)}`;
    stopBtn.disabled = false;
  }, err => {
    status.textContent = 'Geolocation error: ' + err.message;
    toggle.checked = false;
  }, { enableHighAccuracy:true, maximumAge:2000, timeout:10000 });
});

function stopSharing(){
  if (watchId !== null) { navigator.geolocation.clearWatch(watchId); watchId=null; }
  if (auth.currentUser) db.ref('locations/' + auth.currentUser.uid).remove().catch(console.error);
  if (myMarker) { myMarker.remove(); myMarker=null; }
  status.textContent = 'Not sharing';
  stopBtn.disabled = true;
  toggle.checked = false;
}

stopBtn.addEventListener('click', stopSharing);

// ---------- SIMULATE OTHER PHONES ----------
simulateBtn.addEventListener('click', async () => {
  const paths = [
    [[32.5825,0.3476],[32.5840,0.3490],[32.5855,0.3510],[32.5870,0.3530]],
    [[32.5800,0.3480],[32.5820,0.3500],[32.5840,0.3520],[32.5860,0.3540]],
    [[32.5830,0.3460],[32.5850,0.3485],[32.5870,0.3510],[32.5890,0.3535]]
  ];

  for(let step=0; step<paths[0].length; step++){
    paths.forEach((path, index) => {
      const [lon, lat] = path[step];
      const uid = 'demo'+index;
      const payload = { uid, lat, lon, ts: Date.now() };
      db.ref('locations/' + uid).set(payload);

      if(otherMarkers[uid]){
        otherMarkers[uid].setLngLat([lon,lat]);
      } else {
        otherMarkers[uid] = new mapboxgl.Marker({color:'#ffcc00'}) // yellow for demo phones
          .setLngLat([lon,lat])
          .setPopup(new mapboxgl.Popup({offset:25})
          .setHTML(`<b>Demo Phone ${index+1}</b><br>Last update: ${new Date().toLocaleTimeString()}`))
          .addTo(map);
      }
    });
    await new Promise(r=>setTimeout(r,700));
  }
  status.textContent = 'Simulation finished';
});

// Remove user marker on page close
window.addEventListener('beforeunload', ()=>{ if(auth.currentUser) db.ref('locations/' + auth.currentUser.uid).remove(); });
