/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const tipos = ["♥", "♠", "♣", "♦"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
function numeroAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function tarjetaAleatoria() {
  const tipo = numeroAleatorio(tipos);
  const valor = numeroAleatorio(valores);
  const color =
    tipo === ":corazones:" || tipo === ":diamantes:" ? "red" : "black";
  document.getElementById("top-tipo").innerHTML = tipo;
  document.getElementById("card-value").textContent = valor;
  document.getElementById("bottom-tipo").innerHTML = tipo;
  document.getElementById("top-tipo").style.color = color;
  document.getElementById("bottom-tipo").style.color = color;
}
document.addEventListener("DOMContentLoaded", tarjetaAleatoria());

const boton = document.querySelector(".boton");
if (boton) {
  boton.addEventListener("click", tarjetaAleatoria);
}
