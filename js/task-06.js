const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const isBelowRequiredLength = inputLength < requiredLength;
  const isAboveRequiredLength = inputLength > requiredLength;

  validationInput.classList.toggle("valid", !isBelowRequiredLength && !isAboveRequiredLength);
  validationInput.classList.toggle("invalid", isBelowRequiredLength || isAboveRequiredLength);
});