/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let cardSuits = document.querySelectorAll(".suit");
  let cardNumbers = document.querySelector(".number");

  function getRandomCard() {
    let randomSuitIndex = Math.floor(Math.random() * suits.length);
    let randomNumberIndex = Math.floor(Math.random() * numbers.length);

    const randomSuit = suits[randomSuitIndex];
    const randomNumber = numbers[randomNumberIndex];

    cardSuits.forEach(suitElement => {
      suitElement.textContent = randomSuit;
      if (randomSuit === "♥" || randomSuit === "♦") {
        suitElement.classList.add("red-suit");
      } else {
        suitElement.classList.remove("red-suit");
      }
    });

    cardNumbers.textContent = randomNumber;
  }
  const newCardButton = document.getElementById("newCardButton");

  newCardButton.addEventListener("click", getRandomCard);

  getRandomCard();

  setInterval(getRandomCard, 10000);
};

let contador = 9;
const elementoContador = document.getElementById("contador");

const intervalo = setInterval(() => {
  elementoContador.textContent = contador;
  contador--;

  if (contador < 1) {
    contador = 10; // Reiniciamos el contador a 10
  }
}, 1000);
