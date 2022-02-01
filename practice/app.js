// var sajid1 = 60;
// document.write(sajid1 % 20);

const tableNumbers = [5, 14, 7, 10, 20, 11, 12, 15, 3];

for (let i = 0; i < tableNumbers.length; i++) {
  //if the tableNumbers length can be divided by 2 (%) = and leavs a remainder of 0
  if (tableNumbers[i] % 2 === 0) {
    document.write(tableNumbers[i] + "<br />");
  }
}
