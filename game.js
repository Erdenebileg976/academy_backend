import { rockpaper } from "./games/rockpaper.js";
import { number } from "./games/number.js";
import { word } from "./games/word.js";
import { dice } from "./games/dice.js";

// Тоглоомын функцуудыг агуулсан объект
const games = {
  rockpaper,
  word,
  dice,
  number,
};

// Тоглоомын үр дүнг хадгалах массив
let resultArray = [];

// Одоогоор тоглогдож буй тоглоомын нэр
let currentGame = "";

const playGame = () => {
  // Тоглоомын үр дүн хадгалах хувьсагч
  let gameResult = {};

  if (currentGame) {
    gameResult = games[currentGame]();
  } else {
    currentGame = window.prompt("Ямар тоглоом тоглох вэ?");
    gameResult = games[currentGame]();
  }

  resultArray.push(gameResult);

  const playAgain = window.prompt(
    "Зогсоох бол 0, өөр тоглоом тоглох бол 1, дахин тоглох бол 2 гэж оруулна уу.",
  );

  if (playAgain === "0") {
    return resultArray;
  } else if (playAgain === "1") {
    currentGame = "";
    return playGame();
  } else if (playAgain === "2") {
    return playGame();
  }
};

playGame();
