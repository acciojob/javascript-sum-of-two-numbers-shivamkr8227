//your JS code here. If required.
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

// Check if both inputs are numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  let sum = Number(firstNumber) + Number(secondNumber);
  alert(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
} 
// Check if only one input is a number
else if (!isNaN(firstNumber) || !isNaN(secondNumber)) {
  alert("Invalid input. Please enter a valid number.");
}
// Handle invalid input (non-numerical values)
else {
  alert("Invalid input. Please enter a valid number.");
}
// let firstnum=prompt("Enter first number");
// let secondnum=prompt("Enter second number");

// if(!isNaN(firstnum) && !isNaN(secondnum)){
// 	let sum=Number(firstnum)+Number(secondnum);
// 	aler('The sum of ${firstnum} and ${secondnum} is ${sum}');
// }
// elseif(!isNaN(firstnum) || !isNaN(secondnum))
// {
// 	alert('Invalid input. Please enter a valid number.');
// }
// else{
// 	alert('Invalid input. Please enter a valid number.');
// }
