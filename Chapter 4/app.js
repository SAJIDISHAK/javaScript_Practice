// Q1
var name, age, contact;

// Q2
// Legal Variable Name
var name1;
var rose;
var userName;
var $1name;
var _contactNum;

// illegal variable name
var 1stname;
var rose+color
var user Name;
var Intrest_name;
var (',');

// Q3
var number = "number";
var dollarSign = "$";
var underScore = "_";
var $1stname = "1st";
var $2ndname = "variable";
var _contactNum;
var cases = "sensitive";

document.write("<h1>Rules for naming JS variables<h1/>");
document.write(`<br />Variable names can only contain, <b>${number}<b/>, <b>${dollarSign}<b/>,<b>${underScore}<b/>,<b>${number}<b/>, and,<b>${underScore+$1stname+$2ndname}<b/>`);
document.write(`<br /> <br />Variables must begin with a letter,${dollarSign} or , ${underScore} . For example : $name, _name or name`);
document.write(`<br /> Variable names are case ${cases}`);
document.write("<br />Variable names should not be JS keywords");