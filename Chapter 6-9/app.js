// Q1
document.write("Result:<br />");
var a_value = +prompt("Please type any value", 10);
document.write("The value of a is: " + a_value);
document.write("<br />..........................................");
var pre_increment = ++a_value;
document.write("<br /><br />The value of ++a is: " + pre_increment);
document.write("<br />Now the value of a is: " + pre_increment);
var post_increment = a_value++;
document.write("<br /><br />The value of a++ is: " + post_increment);
document.write("<br />Now the value of a is: " + a_value);
var pre_decrement = --a_value;
document.write("<br /><br />The value of --a is: " + pre_decrement);
document.write("<br />Now the value of a is: " + pre_decrement);
var post_decrement = a_value--;
document.write("<br /><br />The value of a++ is: " + post_decrement);
document.write("<br />Now the value of a is: " + a_value);

// Q2
var a = 2;
var b = 1;
var c = --a;
document.write("<br />" + c);
var d = --a- --b;
document.write("<br />" + d);
var e = --a - --b + ++b;
document.write("<br />" + e);
var f = --a - --b + ++b + b--;
document.write("<br />" + f);

// Q3
var name = prompt("Tell your name");
document.write(name + " ٱلسَّلَامُ عَلَيْكُمْ");

// Q4
var table = +prompt("Please enter table number");
if (table == "") {
  table = 5;
  var table1 = table * 1;
  document.write("<h1>Table of " + table + "</h1></br>");
  document.write(table + " * 01 = " + table1 + "</br>");
  var table2 = table * 2;
  document.write(table + " * 02 = " + table2 + "</br>");
  var table3 = table * 3;
  document.write(table + " * 03 = " + table3 + "</br>");
  var table4 = table * 4;
  document.write(table + " * 04 = " + table4 + "</br>");
  var table5 = table * 5;
  document.write(table + " * 05 = " + table5 + "</br>");
  var table6 = table * 6;
  document.write(table + " * 06 = " + table6 + "</br>");
  var table7 = table * 7;
  document.write(table + " * 07 = " + table7 + "</br>");
  var table8 = table * 8;
  document.write(table + " * 08 = " + table8 + "</br>");
  var table9 = table * 9;
  document.write(table + " * 09 = " + table9 + "</br>");
  var table10 = table * 10;
  document.write(table + " * 10 = " + table10 + "</br>");
} else {
  document.write("<h1>Table of " + table + "</h1></br>");
  var table1 = table * 1;
  document.write(table + " * 01 = " + table1 + "</br>");
  var table2 = table * 2;
  document.write(table + " * 02 = " + table2 + "</br>");
  var table3 = table * 3;
  document.write(table + " * 03 = " + table3 + "</br>");
  var table4 = table * 4;
  document.write(table + " * 04 = " + table4 + "</br>");
  var table5 = table * 5;
  document.write(table + " * 05 = " + table5 + "</br>");
  var table6 = table * 6;
  document.write(table + " * 06 = " + table6 + "</br>");
  var table7 = table * 7;
  document.write(table + " * 07 = " + table7 + "</br>");
  var table8 = table * 8;
  document.write(table + " * 08 = " + table8 + "</br>");
  var table9 = table * 9;
  document.write(table + " * 09 = " + table9 + "</br>");
  var table10 = table * 10;
  document.write(table + " * 10 = " + table10 + "</br>");
}

// Q6
document.write("<table style='border: 2px solid black;'>");
document.write("<thead>");
document.write("<tr>");
document.write("<th style='border: 2px solid black;'>Subjects</th>");
document.write("<th style='border: 2px solid black;'>Total Marks</th>");
document.write("<th style='border: 2px solid black;'>Obtained Marks</th>");
document.write("<th style='border: 2px solid black;'>Percentage</th>");
document.write("</tr>");
var subject1 = prompt("Type 1st subject name", "English");
var subject1TotalMarks = 100;
var marksSubject1 = +prompt("Type " + subject1 + " marks", 54);
document.write("<tr>");
document.write("<td style='border: 2px solid black;'>" + subject1 + "</td>");
document.write("<td style='border: 2px solid black;'>" + subject1TotalMarks + "</td>");
document.write("<td style='border: 2px solid black;'>" + marksSubject1 + "</td>");
var subject1Percentage = (marksSubject1 * 100) / subject1TotalMarks;
document.write("<td style='border: 2px solid black;'>" + subject1Percentage + "%</td>");
document.write("</tr>");

var subject2 = prompt("Type 2nd subject name","Math");
var subject2TotalMarks = 100;
var marksSubject2 = +prompt("Type " + subject2 + " marks", 54);
document.write("<tr>");
document.write("<td style='border: 2px solid black;'>" + subject2 + "</td>");
document.write("<td style='border: 2px solid black;'>" + subject2TotalMarks + "</td>");
document.write("<td style='border: 2px solid black;'>" + marksSubject2 + "</td>");
var subject2Percentage = (marksSubject2 * 100) / subject2TotalMarks;
document.write("<td style='border: 2px solid black;'>" + subject2Percentage + "%</td>");
document.write("</tr>");

var subject3 = prompt("Type 3rd subject name","Urdu");
var subject3TotalMarks = 100;
var marksSubject3 = +prompt("Type " + subject3 + " marks", 48);
document.write("<tr>");
document.write("<td style='border: 2px solid black;'>" + subject3 + "</td>");
document.write("<td style='border: 2px solid black;'>" + subject3TotalMarks + "</td>");
document.write("<td style='border: 2px solid black;'>" + marksSubject3 + "</td>");
var subject3Percentage = (marksSubject3 * 100) / subject3TotalMarks;
document.write("<td style='border: 2px solid black;'>" + subject3Percentage + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th style='border: 2px solid black;'>Grand Total</th>");
var grandTotalMarks = subject1TotalMarks+subject2TotalMarks+subject3TotalMarks;
document.write("<th style='border: 2px solid black;'>"+grandTotalMarks+"</th>");
var totalObtainedMarks = marksSubject1+marksSubject2+marksSubject3;
document.write("<th style='border: 2px solid black;'>"+totalObtainedMarks+"</th>");
var grandPercentage = (totalObtainedMarks * 100) / grandTotalMarks;
document.write("<th style='border: 2px solid black;'>"+grandPercentage.toFixed(2)+"%</th>");
document.write("</tr>");
document.write("</thead>");
document.write("</table>");