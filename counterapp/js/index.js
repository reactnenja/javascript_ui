const counterValue = document.querySelector(".number");
const btnIncrement = document.querySelector(".btn-increment");
const btnDencrement = document.querySelector(".btn-dencrement");
let counter = 0;
btnIncrement.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

btnDencrement.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});
