// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
  getDatabase,
  set,
  ref,
  update,
  connectDatabaseEmulator, // Import for emulator connection
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  connectAuthEmulator, // Import for emulator connection
  // Add other auth functions like signOut if you implement logout later
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your NEW web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc4K2P1cGq-fguv4hk5k1kfpp2LG1G2Bk",
  authDomain: "notesscholar-5a251.firebaseapp.com",
  databaseURL: "https://notesscholar-5a251-default-rtdb.firebaseio.com/",
  projectId: "notesscholar-5a251",
  storageBucket: "notesscholar-5a251.firebasestorage.app",
  messagingSenderId: "22586978361",
  appId: "1:22586978361:web:f97b1be164d78174a0dde8",
  measurementId: "G-Q1XZXEZ6RZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional
const database = getDatabase(app); // If using Realtime DB
const auth = getAuth(app); // Correct: pass app

// --- Connect to Emulators if running locally ---
// This block tells the SDK to use your local emulators instead of the live Firebase services
// It checks if the page is loaded from localhost or 127.0.0.1
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  console.log("Connecting to Firebase Emulators...");
  try {
    // Connect to Auth Emulator (default port 9099)
    connectAuthEmulator(auth, "http://localhost:9099");
    // Connect to Realtime Database Emulator (default port 9000, but use 9001 if you changed it)
    connectDatabaseEmulator(database, "localhost", 9001); // <-- Using port 9001 as per previous message
    console.log("Connected to Auth and Database Emulators.");
  } catch (error) {
    console.error("Error connecting to Firebase Emulators:", error);
    alert(
      "Could not connect to Firebase Emulators. Make sure they are running."
    );
  }
}
// --- End Emulator Connect Block ---

// --- Get the login button element ---
const loginButton = document.getElementById("loginWithGoogle");

// --- Add the event listener for the button click ---
// Check if the button actually exists on the page before adding the listener
if (loginButton) {
  loginButton.addEventListener("click", (e) => {
    const provider = new GoogleAuthProvider(); // Create a Google Auth provider instance

    console.log("Sign in with Google button clicked. Starting popup..."); // Debug log

    // Start the Google Sign-In process via a popup window
    signInWithPopup(auth, provider)
      .then((result) => {
        // This block runs if the sign-in popup is successful
        console.log("signInWithPopup successful:", result); // Log success details
        const user = result.user; // Get user information
        const dt = new Date(); // Get current date/time

        // Prepare user data object to save/update in the database
        const userData = {
          username: user.displayName,
          email: user.email,
          last_login: dt.toISOString(), // Use standard ISO format for date/time
        };

        console.log("Attempting to save user data to database..."); // Log before DB write
        // Save user data to Realtime Database under 'userswithemail/{user-id}'
        set(ref(database, "userswithemail/" + user.uid), userData)
          .then(() => {
            // This block runs if the database write is successful
            console.log("User data saved successfully."); // Log DB success
            // alert("User login successful"); // Commented out - prevents redirect until clicked
            console.log("Attempting redirect to mainpage.html..."); // Log before redirect
            window.location.href = "mainpage.html"; // Redirect to the main application page
          })
          .catch((dbError) => {
            // This block runs if the database write fails
            console.error("Error saving user data:", dbError); // Log the database error
            alert(
              "Login successful, but failed to save user data. Proceeding anyway."
            );
            console.log(
              "Attempting redirect to mainpage.html after DB error..."
            ); // Log before redirect
            window.location.href = "mainpage.html"; // Still redirect even if DB write failed
          });
      })
      .catch((error) => {
        // This block runs if the signInWithPopup fails (e.g., user closes popup, network error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // Try to get a cleaner error message from Firebase errors
        const cleanError = errorMessage.includes("Firebase:")
          ? errorMessage.split("Firebase:")[1].trim()
          : errorMessage;

        console.error("Google Sign-In Error:", errorCode, cleanError); // Log the sign-in error
        alert(`Login Failed: ${cleanError}`); // Show error to the user
        // No redirect here because the login itself failed
      });
  });
} else {
  // Log an error if the button wasn't found - helps catch HTML typos
  console.error(
    "Error: Login button with ID 'loginWithGoogle' was not found on the page!"
  );
}

// --- You can add other code like a logout function below if needed ---
// Example Logout (add a button with id="logoutButton" to your HTML):
/*
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
            alert("Signed out successfully!");
            window.location.href = "index.html"; // Redirect back to login page
        }).catch((error) => {
            console.error("Sign-out error:", error);
            alert("Error signing out: " + error.message);
        });
    });
}
*/
