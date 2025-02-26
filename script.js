
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyAxnfhW_gZ1HAIJMoFFVEERyAwHrmFHJw8",
    authDomain: "sign-up-login-form-213c0.firebaseapp.com",
    projectId: "sign-up-login-form-213c0",
    storageBucket: "sign-up-login-form-213c0.firebasestorage.app",
    messagingSenderId: "404493636705",
    appId: "1:404493636705:web:e3addd6be5fd878a2dc620",
    measurementId: "G-GFXBBC5QZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();


    let email = document.getElementById("signup-email").value;

    let password = document.getElementById("signup-password").value;
    let num = document.getElementById("signup-number").value;
    // Create user with email and password add names of variables in it
    createUserWithEmailAndPassword(auth, email, password , num)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            alert("Signup successful!");
        })
        .catch((error) => {
            console.error("Error:", error.message);
            alert("Error: " + error.message);
        });
})
