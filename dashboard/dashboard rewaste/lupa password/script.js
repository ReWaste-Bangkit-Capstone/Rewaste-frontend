function validateForm(event) {
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  // Validasi email menggunakan regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Format email tidak valid");
    return;
  }

  // Kirim permintaan pemulihan password
  // untuk api
  alert("Permintaan pemulihan password telah dikirim");
  document.getElementById("forgotPasswordForm").reset();
}