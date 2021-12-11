// Q1
var age = 15;
alert("I am " + age + " years old");

//Q2
var visitTrack = 14;
alert("You have visited this site " + visitTrack + " times");

// Q3
var birthYear = 1997;
document.write(
  "My birth year is " +
    birthYear +
    "<br />Data type of my declared variable is number<br />"
);
document.write(
  `my birth year is ${birthYear} <br />Data type of my declared variable is number`
);

// Q4
document.write("<br /><br />Welcome to Sajid Cloth store<br />");
var userName = prompt("Type your name", "Sajid");
document.write("<br />Your name is " + userName);
var variety = prompt("Type your product name", "Perfume");
document.write("<br />Your product is " + variety);
var qty = +prompt("Type your quantity", 2);
var price = 300;
document.write("<br />Your quantity is " + qty);
document.write("<br /><br />Your total bill is " + qty * price);

// Q5
