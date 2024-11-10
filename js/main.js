let emailInput = document.getElementById("email");

document.querySelector(".box .change").addEventListener("click", () => {
  emailInput.removeAttribute("disabled");
  emailInput.focus();
});

emailInput.addEventListener("blur", () => {
  emailInput.setAttribute("disabled", "true");
});
