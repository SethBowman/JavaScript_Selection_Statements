console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favNumber = 10;

let userInput = window.prompt("Guess my favorite number");

if (userInput < favNumber) 
{
    console.log("Too low");
}
else if (userInput > favNumber) 
{
    console.log("Too high");
}
else 
{
    console.log("Congrats! You guessed my favorite number!");
}

// Exercise 2
let correctNumber = 4;

let userInput2 = window.prompt("Pick a number between 1 and 10");

switch (userInput2 == correctNumber) 
{
    case userInput2 == 1:
        console.log("warmer");
        break;
    case userInput2 == 2:
        console.log("warmer");
        break;
    case userInput2 == 5:
        console.log("warmer");
        break;
    case userInput2 == 6:
        console.log("warmer");
        break;
    case userInput2 == 7:
        console.log("colder");
        break;
    case userInput2 == 8:
        console.log("colder");
        break;
    case userInput2 == 9:
        console.log("cold as can be");
        break;
    case userInput2 == 10: 
        console.log("cold as can be");
        break;
    case userInput2 == 4:
        console.log("HOT! That's the one!");
    default:
        console.log("Not a number between 1 and 10");
        break;

}
    
