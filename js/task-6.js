function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  const boxSize = 30;

  boxesContainer.innerHTML = "";

  Array.from({ length: amount }, (_, i) => {
    const box = document.createElement("div");
    const size = boxSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    return box;
  }).forEach((box) => boxesContainer.appendChild(box));
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("button[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = "";
});

document
  .querySelector("button[data-destroy]")
  .addEventListener("click", destroyBoxes);
