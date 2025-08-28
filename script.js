
// Part 1: Variable Declarations & Conditionals

let number = 7;
let isEven;

if (number % 2 === 0) {
  isEven = true;
  console.log(number + " is even.");
} else {
  isEven = false;
  console.log(number + " is odd.");
}


// Part 2: Custom Functions


// Function 1: Simple greeting
function sayHello() {
  alert("Hello there! Hope you're having a great day!");
}

// Function 2: Personalized greeting
function customGreeting(name) {
  return "Hi " + name + "! Welcome to the project.";
}


// Part 3: Loops Examples


// Loop 1: For loop - populate a list of numbers
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number: " + i;
  numberList.appendChild(li);
}

// Loop 2: While loop - count down from 3 in console
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}


// Part 4: DOM Interactions


// DOM Interaction 1: Change text when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = "You clicked the button! 🎉";
  sayHello();
});

// DOM Interaction 2: Get value from input & display greeting
document.getElementById("nameBtn").addEventListener("click", function() {
  let userName = document.getElementById("nameInput").value;
  document.getElementById("customGreeting").textContent = customGreeting(userName);
});

// DOM Interaction 3: Change style dynamically
document.getElementById("customGreeting").style.color = "green";
