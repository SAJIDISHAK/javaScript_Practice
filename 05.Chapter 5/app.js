// Q1
var firstNum = +prompt("Type 1st number", "5");
var secondNum = +prompt("Type 2nd number", "10");
var value = firstNum + secondNum;
document.write("Sum of " + firstNum + " and " + secondNum + " is " + value);

// Q2
// Subtraction
var firstNum = +prompt("Type 1st number", "5");
var secondNum = +prompt("Type 2nd number", "10");
var value = firstNum - secondNum;
document.write("<br /> Subtraction of " + firstNum + " and " + secondNum + " is " + value);
// Multiplication
var firstNum = +prompt("Type 1st number", "5");
var secondNum = +prompt("Type 2nd number", "10");
var value = firstNum * secondNum;
document.write("<br /> Subtraction of " + firstNum + " and " + secondNum + " is " + value);
// Devision
var firstNum = +prompt("Type 1st number", "5");
var secondNum = +prompt("Type 2nd number", "10");
var value = firstNum / secondNum;
document.write("<br /> Subtraction of " + firstNum + " and " + secondNum + " is " + value);
// Modules
var firstNum = +prompt("Type 1st number", "5");
var secondNum = +prompt("Type 2nd number", "10");
var value = firstNum % secondNum;
document.write("<br /> Subtraction of " + firstNum + " and " + secondNum + " is " + value);

// Q3
var mathematicExpression = +prompt("Assign Any Value");
document.write("Value after variable declaration is ");
document.write(mathematicExpression && mathematicExpression || !mathematicExpression && "undefined");
document.write("<br />Initial value is  "+ mathematicExpression);
document.write("<br />Value after increment is: "+(++mathematicExpression));
mathematicExpression = mathematicExpression+7;
document.write("<br />Value after addition is: "+(mathematicExpression));
document.write("<br />Value after decrement is: "+ (--mathematicExpression));
mathematicExpression =  mathematicExpression % 3
document.write("<br />The reminder is: "+mathematicExpression)

// Q4
var cost = 500;
var buy = prompt("Quantity of ticket");
var totalAmount = cost*buy;
document.write("Total cost to buy "+buy+" tickets to a movie is "+totalAmount+ " PKR");

// Q5
var numberOfTable = prompt("Type number of table", 4);
document.write("Table of " + numberOfTable);
document.write("<br /><br />" + numberOfTable + " x 1 = " + numberOfTable * 1);
document.write("<br />" + numberOfTable + " x 2 = " + numberOfTable * 2);
document.write("<br />" + numberOfTable + " x 3 = " + numberOfTable * 3);
document.write("<br />" + numberOfTable + " x 4 = " + numberOfTable * 4);
document.write("<br />" + numberOfTable + " x 5 = " + numberOfTable * 5);
document.write("<br />" + numberOfTable + " x 6 = " + numberOfTable * 6);
document.write("<br />" + numberOfTable + " x 7 = " + numberOfTable * 7);
document.write("<br />" + numberOfTable + " x 8 = " + numberOfTable * 8);
document.write("<br />" + numberOfTable + " x 9 = " + numberOfTable * 9);
document.write("<br />" + numberOfTable + " x 10 = " + numberOfTable * 10);

// Q6
var ctemperature = +prompt("Please enter a Celsius temperature value", 25);
var fahrenheit_temperature = (ctemperature * 9) / 5 + 32;
document.write("Temperature in Fahrenheit " +ctemperature+" °C is = "+fahrenheit_temperature+" °F" +"</br>");

var ftemperature = +prompt("Please enter a Fahrenheit temperature value", 70);
var celsius_temperature = ((ftemperature - 32) * 5) / 9;
document.write("Temperature in Celsius "+ftemperature+" °F is = "+celsius_temperature+" °C");

// Q7
document.write("<h1>Shopping Cart</h1>");
var item_1 = 650;
document.write("<br /><br />Price of item 1 is [" + item_1 + "]");
var qty_item_1 = prompt("Item 1 quantity", 1);
document.write("<br />quantity of item 1 is (" + qty_item_1 + ")");

var item_2 = 100;
document.write("<br /><br />Price of item 2 is [" + item_2 + "]");
var qty_item_2 = prompt("Item 2 quantity", 1);
document.write("<br />quantity of item 2 is (" + qty_item_2 + ")");
var shipping_charges = 100;
document.write("<br />Shipping Charges " + shipping_charges);

var item_1_total = item_1 * qty_item_1;
var item_2_total = item_2 * qty_item_2;
var total = item_1_total + item_2_total;
var plus_shipping_charges = total + shipping_charges;
document.write("<br /><br />Total cost of your order is " + plus_shipping_charges);

// Q8
document.write("<h1>Marks Sheet<h1/>");
var total_marks = 980;
document.write("<br /><br />Total marks: " + total_marks);
var obtained_marks = prompt("Type Obtained marks", "804");
document.write("<br />Marks obtained: " + obtained_marks);
var percentage = (obtained_marks * 100) / total_marks;
document.write("<br />" + percentage.toFixed(4) + "%");

// Q9
document.write("<h1>Currency to PKR<h1/>");
var dollar = prompt("Type QTY of Dollar", "10");
var usdToPkr = 104.8;
var dollarAmount = dollar * usdToPkr;
var saudiRiyal = prompt("Type QTY of Saudi Riyal", "25");
var suadiRiyalToPkr = 28;
var saudiAmount = saudiRiyal * suadiRiyalToPkr;
var totalAmount = dollarAmount + saudiAmount;
document.write("Total currency in PKR (" + totalAmount + ")");

// Q10
var num = +prompt("Type any number", 5);
var result = ((num + 5) * 10) / 2;
document.write("result ", result);

// Q11
var today = new Date();
var date = today.getFullYear();
document.write("<h1>Age Calculator</h1><br />");
var currentYear = date;
document.write("Current Year: " + currentYear);
var birthYear = +prompt("Type your birth year", 1997);
document.write("<br />Birth Year: " + birthYear);
var age = currentYear - birthYear;
document.write("<br />Your age is: " + age);

// Q12
document.write("<h1>The Geometrizer</h1>");
var radius = prompt("Store a radius value", 20);
document.write("<br />Radius of circle: " + radius);
var circumference = 2 * 3.142 * radius;
document.write("<br /> The circumference is: " + circumference.toFixed(4));
var area = Math.pow(radius, 2) * 3.142;
document.write("<br />The area is: " + area);

// Q13
document.write("<h1>The Lifetime Supply Calculator</h1><br />");
var fvrt_snack = prompt("Type your favourite snack name", "Chocolate Chips");
document.write("<br />Favourite snack: " + fvrt_snack);
var age = +prompt("Type your current age", 24);
document.write("<br />Current age: " + age);
var estimatedAge = +prompt("Type your estimated age", 65);
document.write("<br />Estimated Maximum age: " + estimatedAge);
var snack = prompt("Type snack requirement", 3);
document.write("<br />Amount of snack per day: "+snack);
document.write("<br />You will need "+(snack * 365) * (estimatedAge - age)+" "+fvrt_snack+ " to last you untill the ripe old age of "+estimatedAge)