// Site configuration. These values are safe to publish: Firebase web config is not a secret
// (access is controlled by firestore.rules), and the Claude API key lives only in the Worker.
window.APDR_CONFIG = {
  // Firebase console → Project settings → General → Your apps → Web app → "firebaseConfig"
  firebase: {
    apiKey: "AIzaSyAWvbVcMgYqQxoYmPMbV7ZA7fJ4vQsb1_s",
    authDomain: "ap-drill-room.firebaseapp.com",
    projectId: "ap-drill-room",
    storageBucket: "ap-drill-room.firebasestorage.app",
    messagingSenderId: "465372216125",
    appId: "1:465372216125:web:c98a68196594901f492354"
  },
  // This website's address (the Claude version links here).
  siteUrl: "https://singiadvik73.github.io/ap-drill-room/",
  // Optional: URL of your deployed Claude relay (see worker/). Leave "" to hide the API-key option.
  aiEndpoint: "https://ap-drill-room-claude.ap-drill-room-claude.workers.dev"
};
