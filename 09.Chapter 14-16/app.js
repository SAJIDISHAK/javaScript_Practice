// Q1
var studentNames = [];

// Q2
var studentNames = {};

// Q3
var brothers = ["Yasir", "Saqib", "Sajid", "Ammar", "Furqan"];

// Q4
var numbers = [1, 2, 3, 4, 5];

// Q5
var boolean = [true, false];

// Q6
var mixedArray = ["string", false, 123];

// Q7
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// Q8
var names = ["Michael", "John", "Tony"];
var gainMmarks = [320, 230, 480];
var totalMarks = 500;
document.write(
  "Score of " +
    names[0] +
    " is " +
    gainMmarks[0] +
    "." +
    " Percentage: " +
    (gainMmarks[0] / totalMarks) * 100 +
    "%"
);
document.write(
  "<br />" +
    "Score of " +
    names[1] +
    " is " +
    gainMmarks[1] +
    "." +
    " Percentage: " +
    (gainMmarks[1] / totalMarks) * 100 +
    "%"
);
document.write(
  "<br />" +
    "Score of " +
    names[2] +
    " is " +
    gainMmarks[2] +
    "." +
    " Percentage: " +
    (gainMmarks[2] / totalMarks) * 100 +
    "%"
);

// Q9
var colors = ["Red", "Green", "Yellow"];
document.write(colors + "<br />");
var wantColor = prompt("what color he/she wants");
document.write(wantColor + "<br>");
colors.push(wantColor);
document.write(colors + "<br>");
document.write("<br />" + "1). Add 2 more color" + "<br />" + "<br />");
colors.push("Pink", "Orange");
document.write(colors + "<br />");
document.write(
  "<br />" + "2). Delete the first color in the array" + "<br />" + "<br />"
);
colors.shift("Red");
document.write(colors + "<br />");
document.write(
  "<br />" + "3). Delete the last color in the array" + "<br />" + "<br />"
);
colors.pop();
document.write(colors + "<br />");

var index = +prompt("which index he/she wants to add a color");
var wantColor1 = prompt("color name");
document.write(
  "<br />" +
    "4). which index he/she wants to add a color & color name" +
    "<br />" +
    "<br />"
);
document.write(wantColor1 + "<br>");
colors.splice(index, 0, wantColor1);
document.write(colors + "<br />");

var index1 = +prompt("which index he/she wants to Delete a color");
document.write(
  "<br />" +
    "5). which index he/she wants to Delete a color (User value " +
    index1 +
    ")" +
    "<br />" +
    "<br />"
);
colors.splice(0, index1, wantColor1);
document.write(colors + "<br />");

// Q10
var score = [320, 230, 480, 120];
document.write("Scores of Students : ", score + "<br />");
score.sort();
document.write("Ordered Scores of Students : ", score);

// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list : " + cities + "<br />");
var selectedCities = [cities[4], cities[3]];
document.write(selectedCities);

// Q12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array" + "<br />" + arr + "<br />");
var join = arr.join(" ");
document.write("String" + "<br />" + join);

// Q13
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices" + "<br />" + devices + "<br />" + "<br />");
document.write("Out:" + "<br />" + devices[0] + "<br />");
document.write("Out:" + "<br />" + devices[1] + "<br />");
document.write("Out:" + "<br />" + devices[2] + "<br />");
document.write("Out:" + "<br />" + devices[3]);

// Q14
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices" + "<br />" + devices + "<br />" + "<br />");
document.write("Out:" + "<br />" + devices[3] + "<br />");
document.write("Out:" + "<br />" + devices[2] + "<br />");
document.write("Out:" + "<br />" + devices[1] + "<br />");
document.write("Out:" + "<br />" + devices[0]);

// Q15
var companyNames = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// companyNames.forEach((ele) => {
//   document.getElementById("selector").innerHTML +=
//     `<option>` + ele + `</option>`;
// });
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[0] + `</option>`;
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[1] + `</option>`;
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[2] + `</option>`;
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[3] + `</option>`;
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[4] + `</option>`;
document.getElementById("selector").innerHTML +=
  `<option>` + companyNames[5] + `</option>`;
