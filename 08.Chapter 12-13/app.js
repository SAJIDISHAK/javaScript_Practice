// Q1
var numberValue = prompt("Put any number");
var characterValue = numberValue.charCodeAt(0);
document.write(characterValue + "<br />" + "<br />");

if (characterValue >= 65 && characterValue <= 90) {
  document.write("You type is Uppercase Letter");
} else if (characterValue >= 97 && characterValue <= 122) {
  document.write("You type is Lowercase Letter");
} else {
  document.write("You type is number or special Chracter");
}

// Q2
var firstValue = +prompt("Type 1st value in number", 5);
var secondValue = +prompt("Type 2nd value in number", 10);
if (firstValue > secondValue) {
  document.write("Your 1st value is bigger than 2nd");
} else if (secondValue > firstValue) {
  document.write("Your 2nd value is bigger than 1st");
} else {
  document.write("Your both values are same");
}

// Q3
var value = +prompt("Type 0 to false & other character to true", 1);
if (value == 0) {
  document.write("False");
} else {
  document.write("True");
}

// Q4
var numberValue = prompt("Put any number");
var characterValue = numberValue.charCodeAt(0);
document.write(characterValue + "<br />" + "<br />");

if (
  (characterValue >= 65 && characterValue <= 90) ||
  (characterValue >= 97 && characterValue <= 122)
) {
  document.write("True" + "<br />");
  document.write("You type is Letter");
} else {
  document.write("False" + "<br />");
  document.write("You type is number or special Chracter");
}

// Q5
var password = "Attar26";
var checkPassword = prompt("Enter his/her password");
if (checkPassword === "" || checkPassword === null) {
  document.write("Please enter your password");
} else if (password === checkPassword) {
  document.write(
    "“Correct! The password you entered matches the original password”"
  );
} else {
  document.write("Incorrect Password");
}

// Q6
var greeting;
var hour = 19;
if (hour < 18) {
  document.write((greeting = "Good day"));
} else {
  document.write((greeting = "Good evening"));
}

// Q7
var time = +prompt("Please enter time in 0000 to 2400 this format", 1900);

if (time >= 0000 && time <= 1200) {
  document.write("Good Morning");
} else if (time >= 1201 && time <= 1700) {
  document.write("Good Afternoon");
} else if (time >= 1701 && time <= 2100) {
  document.write("Good Evening");
} else {
  document.write("Good Night");
}
