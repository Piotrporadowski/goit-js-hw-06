const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const isValid = inputLength >= requiredLength;

  validationInput.classList.toggle("valid", isValid);
  validationInput.classList.toggle("invalid", !isValid);
});