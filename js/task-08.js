const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formObject = {};

  
  const emailInput = event.target.querySelector('input[name="email"]');
  const passwordInput = event.target.querySelector('input[name="password"]');


  formObject.email = emailInput.value;
  formObject.password = passwordInput.value;

  if (!formObject.email || !formObject.password) {
    alert("Wszystkie pola muszą być wypełnione.");
  } else {
    console.log("Dane z formularza:", formObject);
    loginForm.reset(); 
  }
});
