// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithRedirect,
//   getRedirectResult,
//   signOut,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAN0hpBzLuF5OZw774RKaYlRQQRWbWd5Gs",
//   authDomain: "notesscholar-bde47.firebaseapp.com",
//   databaseURL:
//     "https://notesscholar-bde47-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "notesscholar-bde47",
//   storageBucket: "notesscholar-bde47.appspot.com",
//   messagingSenderId: "943037655635",
//   appId: "1:943037655635:web:4d6dce11aedd1fde0974a6",
//   measurementId: "G-T35MTVQCZZ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider(app);
// const database = getDatabase(app);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// loginwithgoogle.addEventListener(
//   "click",
//   (e) => {
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // Signed in with Google
//         const user = result.user;
//         const dt = new Date();
//         set(ref(database, "users/" + user.uid), {
//           username: user.displayName,
//           email: user.email,
//           last_login: dt,
//         });
//         // alert("user login successful");
//         Swal.fire({
//           title: "AptiTest",
//           text: "User login successfull",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         window.location.href = "index.html";
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         var error = errorMessage.split("Firebase:")[1].trim();
//         // alert(errorMessage);
//         Swal.fire({
//           title: "AptiTest",
//           text: error,
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   },
//   { remember: "local" }
// );

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAN0hpBzLuF5OZw774RKaYlRQQRWbWd5Gs",
  authDomain: "notesscholar-bde47.firebaseapp.com",
  databaseURL:
    "https://notesscholar-bde47-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notesscholar-bde47",
  storageBucket: "notesscholar-bde47.appspot.com",
  messagingSenderId: "943037655635",
  appId: "1:943037655635:web:4d6dce11aedd1fde0974a6",
  measurementId: "G-T35MTVQCZZ",
};
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

// firebase.auth.Auth.Persistence.LOCAL;
const login = document.getElementById("loginWithGoogle");
login.addEventListener(
  "click",
  (e) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;
        const dt = new Date();
        4;

        set(ref(database, "userswithemail/" + user.uid), {
          username: user.displayName,
          email: user.email,
          last_login: dt,
        });
        alert("user login successful");

        window.location.href = "mainpage.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        var error = errorMessage.split("Firebase:")[1].trim();
        alert(errorMessage);
      });
  },
  { remember: "local" }
);

// login.addEventListener("click", (e) => {
//   alert("HIIIIIIIIIIIIIIII");
// });

// logout.addEventListener("click", (e) => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       alert("signout successfull");
//     })
//     .catch((error) => {
//       // An error happened.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// });

// const user1 = auth.currentUser;

// if (user1 !== null) {
//   user1.providerData.forEach((profile) => {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
