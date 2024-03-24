#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to the most difficult game");

const answer = await inquirer.prompt([
  { message: "Please guess a number between 1-10: ",
    name: "guessedNumber",
    type: "number", 
  },
]);

if(answer.guessedNumber === randomNumber) {
    console.log("Congratulation! You guessed the right number");
}else{
    console.log("You guessed the wrong number");   
}