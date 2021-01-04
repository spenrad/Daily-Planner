var DateTime = luxon.DateTime;
var now = DateTime.local();

$('h1').append(now);

console.log(now);

console.log(now.c);

console.log(now.year);
console.log(now.hour);