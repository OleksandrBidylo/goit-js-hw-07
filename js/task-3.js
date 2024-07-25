document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

  function updateGreeting() {
    nameOutput.textContent = nameInput.value.trim() || "Anonymous";
  }

  nameInput.addEventListener("input", updateGreeting);
});
