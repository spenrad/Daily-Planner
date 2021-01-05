var DateTime = luxon.DateTime;
var time = DateTime.local();
var now = time.toLocaleString(DateTime.DATETIME_MED);

// console.log(now);
// console.log(now.c);
// console.log(now.year);
// console.log(now.hour);

$('h1').after(now);

// Create trs and tds with jquery