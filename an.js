let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:")

num1 = parseFloat(num1);
num2 = parseFloat(num2)
let sum = num1 + num2

alert(`The sum of ${num1} and ${num2} is ${sum}`)

let userName = prompt("Enter your name:");

let purchaseAmount = prompt("Enter the total purchase amount:")

purchaseAmount = parseFloat(purchaseAmount)

let discount = 10

let discountAmount = (purchaseAmount * discount) / 100

let finalAmount = purchaseAmount - discountAmount

alert(`${userName}, after a 10% discount, the final amount to pay is $${finalAmount.toFixed(2)}`)

let favoriteAnimal = prompt("What is your favorite animal?")

if (favoriteAnimal.toLowerCase() === "cat") {
  
    alert("Wow, cats are amazing creatures!");
} else {
    alert(`Wow, ${favoriteAnimal}s are awesome too!`);
}
