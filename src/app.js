/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var word1 = who[Math.floor(Math.random() * who.length)];
  console.log(word1);
  let word2 = action[Math.floor(Math.random() * action.length)];
  console.log(word2);
  let word3 = what[Math.floor(Math.random() * what.length)];
  console.log(word3);
  let word4 = when[Math.floor(Math.random() * when.length)];
  console.log(word4);

  let quote = word1 + " " + word2 + " " + word3 + " " + word4;
  document.getElementById("excuse").innerHTML = quote;
};
