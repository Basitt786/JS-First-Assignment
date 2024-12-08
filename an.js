
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let sum = num1 + num2;
alert("The sum of ${num1} and ${num2} is ${sum}.");




let userName = prompt("Enter your name:");
let purchaseAmount = parseFloat(prompt("Enter the total purchase amount:"));
let discount = 10; 
let discountAmount = (purchaseAmount * discount) / 100;
let finalAmount = purchaseAmount - discountAmount;
alert("Hello ${userName}, your final amount after a 10% discount is ${finalAmount.toFixed(2)}.");




let favoriteAnimal = prompt("What is your favorite animal?");
alert("Wow, ${favoriteAnimal}s are amazing creatures!");