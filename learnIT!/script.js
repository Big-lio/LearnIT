document.getElementById("registration-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Αποτρέπει την υποβολή της φόρμας ώστε να ελεγχθούν τα πεδία

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const address = document.getElementById("addr").value;

  const passwordRegex = /^.{5,20}$/;
  const addressRegex = /^[a-zA-Zα-ωΑ-Ω]+ \d+$/; // Κανονική έκφραση για διεύθυνση

  
  const dobInput = document.getElementById("dob");
  const dobValue = dobInput.value;


  // Λειτουργία ελέγχου ημερομηνίας κατά την υποβολή της φόρμας
  if (dobValue) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Θέτουμε την ώρα σε 00:00 για να συγκρίνουμε μόνο την ημερομηνία
    const inputDate = new Date(dobValue);

    // Αν η εισαγόμενη ημερομηνία είναι μεγαλύτερη από την τρέχουσα ημερομηνία
    if (inputDate > today) {
      alert("Η ημερομηνία γέννησης δεν μπορεί να είναι μεγαλύτερη από την τρέχουσα ημερομηνία.");
      return;
    }
  }

  // Έλεγχος αν τα passwords ταιριάζουν
  if (password !== confirmPassword) {
    alert("Τα passwords δεν ταιριάζουν!");
    return; // Σταματάμε την εκτέλεση αν το password δεν ταιριάζει
  }

  // Έλεγχος για το password format
  if (!passwordRegex.test(password)) {
    alert("Το password πρέπει να αποτελείται από 5 ως 20 ψηφία!");
    return;
  }

  // Έλεγχος για τη διεύθυνση
  if (!addressRegex.test(address)) {
    alert("Η διεύθυνση πρέπει να έχει μορφή : Οδός Αριθμός");
    return;
  }

  // Αν όλοι οι έλεγχοι περάσουν, προχωράμε στην ανακατεύθυνση
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";

  // Ανακατεύθυνση μετά από 2 δευτερόλεπτα
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});

// Λειτουργία εμφάνισης/απόκρυψης κωδικού
// Λειτουργία εμφάνισης/απόκρυψης κωδικού για το πεδίο Password
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
const passwordIcon = togglePasswordButton.querySelector("i");

togglePasswordButton.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  passwordIcon.classList.toggle("fa-eye");
  passwordIcon.classList.toggle("fa-eye-slash");
});

// Λειτουργία εμφάνισης/απόκρυψης κωδικού για το πεδίο επιβεβαίωσης κωδικού
const confirmPasswordInput = document.getElementById("confirm-password");
const toggleConfirmPasswordButton = document.getElementById("toggle-confirm-password");
const confirmPasswordIcon = toggleConfirmPasswordButton.querySelector("i");

toggleConfirmPasswordButton.addEventListener("click", () => {
  const isPasswordVisible = confirmPasswordInput.type === "text";
  confirmPasswordInput.type = isPasswordVisible ? "password" : "text";
  confirmPasswordIcon.classList.toggle("fa-eye");
  confirmPasswordIcon.classList.toggle("fa-eye-slash");
});