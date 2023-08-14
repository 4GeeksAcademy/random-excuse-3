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

  var whoVariable = who[Math.floor(Math.random() * who.length)];
  console.log(whoVariable);
  let actionVariable = action[Math.floor(Math.random() * action.length)];
  console.log(actionVariable);
  let whatVariable = what[Math.floor(Math.random() * what.length)];
  console.log(whatVariable);
  let whenVariable = when[Math.floor(Math.random() * when.length)];
  console.log(whenVariable);

  let quote =
    whoVariable +
    " " +
    actionVariable +
    " " +
    whatVariable +
    " " +
    whenVariable;
  document.getElementById("excuse").innerHTML = quote;
};
