const eyeToggle = document.getElementById("eyeToggle");
const passwordInput = document.getElementById("passwordInput");

  eyeToggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";   
    } else {
        passwordInput.type = "password"; 
    }
  });
