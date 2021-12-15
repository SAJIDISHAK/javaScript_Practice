// Q1
var cityName = prompt("Enter city name", "Karachi").toLowerCase();
if (cityName === "karachi") {
  document.write("Welcome to city of lights");
} else {
  document.write("Change City");
}

// Q2
var gender = prompt("Type your gender").toLowerCase();
if (gender === "male") {
  document.write("Hello Sir");
} else if (gender === "female"){
    document.write("Hello Ma'am");
}else {
    document.write("Type correct gender")
}

// Q3
var signalColor = prompt("Type Signal color").toLowerCase();
if (signalColor === "red") {
  document.write("Must Stop");
} else if (signalColor === "yellow") {
  document.write("Ready To Move");
} else if (signalColor === "green") {
  document.write("Move now");
} else {
  document.write("You type wrong color");
}

// Q4
var remainingFuel = +prompt("Type remaining fuel", 0.25);
if (remainingFuel <= 0.25) {
  document.write("Please refill the fuel in your car");
} else {
  document.write("Your car is running");
}

// Q5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

var condition = prompt("Type true or false").toLowerCase();
if (condition === "true") {
  alert("True");
} else {
  alert("False");
}

// Q6
document.write("<h1>Mark Sheet</h1>");
var totalMarks = 300;
document.write("<br /><br />Total marks : " + totalMarks);
var obtainedMarks = +prompt("Type your obtained marks");
document.write("<br />Obtained makrs : " + obtainedMarks);
var percentage = (obtainedMarks * 100) / totalMarks;
document.write("<br />Percentage : " + percentage.toFixed(2) + "%");
if (percentage >= 80) {
  document.write("<br />Grade : A-one");
  document.write("<br />Remarks : Excellent");
} else if (percentage >= 61) {
  document.write("<br />Grade : A");
  document.write("<br />Remarks : Good");
} else if (percentage >= 60) {
  document.write("<br />Grade : B");
  document.write("<br />Remarks : You need to improve");
} else {
  document.write("<br />Fail");
  document.write("<br />Sorry")
}

// Q7
var secretNumber = 6;
var userNumber = prompt("Type secret number");
if (secretNumber == userNumber) {
  document.write("<h1>“Bingo! Correctanswer”</h1>");
} else if (userNumber == 5 || userNumber == 7) {
  document.write("“Close enough to the correct answer”");
} else {
  document.write("<h1>Better Luck Next Time</h1><br />Try Again");
}

// Q8
// Solution 1
var userInput = prompt("Type any number");
var devide = userInput % 3;
if (devide == 0) {
  document.write("Your value is devide by 3");
} else{
    document.write("Your value is not devide by 3");
}
// Solution 2
var userInput = prompt("Type any number");
if (userInput % 3) {
  document.write("Your value is not devisible by 3");
} else {
  document.write("Your value is devide by 3");
}

// Q9
// Solution 1
var userNumber = prompt("Type any number");
var checkEvenOrOdd = userNumber % 2;
if (userNumber == 0) {
  document.write("You type prime number");
} else if (checkEvenOrOdd == 1) {
  document.write("You type odd number");
} else {
  document.write("You type even number");
}
// Solution 2
var number = prompt("Enter a number to check you input odd number or even number");
if (number % 2 == 0){
    document.write('"WOW" you input Even number')
}
else {
    document.write('"WOW" you input Odd number')
};

// Q10
var temperature = prompt("Type temperature value");
if (temperature >= 40) {
  document.write("It is too hot outside");
} else if (temperature >= 30) {
  document.write("The Weather today is Normal");
} else if (temperature >= 20) {
  document.write("Today’s Weather is cool");
} else {
  document.write("OMG! Today’s weather is so Cool");
}

// Q11
var firstValue = +prompt("Type first value");
var operator = prompt("Type operator");
var secondValue = +prompt("Type second value");
if (operator == "-") {
  var total = firstValue - secondValue;
  document.write(total);
} else if (operator == "*") {
  var total = firstValue * secondValue;
  document.write(total);
} else if (operator == "+") {
  var total = firstValue + secondValue;
  document.write(total);
} else if (operator == "%") {
  var total = firstValue % secondValue;
  document.write(total);
} else if (operator == "/") {
  var total = firstValue / secondValue;
  document.write(total);
} else {
  document.write("You type wrong operator <br />" + operator + " This is not operator");
}