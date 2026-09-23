// Site configuration. These values are safe to publish: Firebase web config is not a secret
// (access is controlled by firestore.rules), and the Claude API key lives only in the Worker.
window.APDR_CONFIG = {
  // Firebase console → Project settings → General → Your apps → Web app → "firebaseConfig"
  firebase: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  },
  // This website's address (the Claude version links here).
  siteUrl: "https://singiadvik73.github.io/ap-drill-room/",
  // The Claude version of the app (people use it with their own Claude usage). Share it publicly from claude.ai.
  claudeAppUrl: "https://claude.ai/artifact/KfQcApv2EqBpZiVFK9RpJW",
  // Optional: URL of your deployed Claude relay (see worker/). Leave "" to hide the API-key option.
  aiEndpoint: ""
};
