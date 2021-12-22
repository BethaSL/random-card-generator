/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = () => {
    let number = [
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
    let number_index = Math.floor(Math.random() * number.length);
    return number[number_index];
  };
  document.querySelector(".number").innerHTML = randomNumber();

  let randomSuit = () => {
    let suit_top = ["♦", "♥", "♠", "♣"];
    let suit_bottom = ["♦", "♥", "♠", "♣"];
    let suit_index = Math.floor(Math.random() * suit_top.length);
    return suit_top[suit_index], suit_bottom[suit_index];
  };
  document.querySelector(".suit_top").innerHTML = randomSuit();
  document.querySelector(".suit_bottom").innerHTML = randomSuit();
};
