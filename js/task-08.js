const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Zapobiega odświeżaniu strony po wysłaniu formularza.

    const formData = new FormData(loginForm);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    if (!formObject.email || !formObject.password) {
      alert("Wszystkie pola muszą być wypełnione.");
    } else {
      console.log("Dane z formularza:", formObject);
      loginForm.reset(); // Czyści wartości pól formularza.
    }
  });
