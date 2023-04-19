//your JS code here. If required.
let firstnum=prompt("Enter first number");
let secondnum=prompt("Enter second number");

if(!isNaN(firstnum) && !isNaN(secondnum)){
	let sum=Number(firstnum)+Number(secondnum);
	aler('The sum of ${firstnum} and ${secondnum} is ${sum}');
}
elseif(!isNaN(firstnum) || !isNaN(secondnum))
{
	alert('Invalid input. Please enter a valid number.');
}
else{
	alert('Invalid input. Please enter a valid number.');
}
