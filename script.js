var DateTime = luxon.DateTime;
var time = DateTime.local();
var now = time.toLocaleString(DateTime.DATE_HUGE);

// console.log(now);
// console.log(now.c);
// console.log(now.year);
// console.log(now.hour);

var showTime = $('<h2>').text(now);
$('h1').after(showTime);


// for loop creates table rows corresponding with the hour "i"
for (i = 9; i < 18; i++) {
  // Create trs and tds with jquery
  var tr = $("<tr>");
  var timeSlot = $("<td>");
  var textTd = $("<td>");
  var textArea = $("<textarea>");
  var saveIcon = $("<td>");
  //sets the correct time for each tr
  var timeStr = "";
  if (i == 12) {
    timeStr = i + " p.m.";
  } else if (i > 12) {
    timeStr = i - 12 + " p.m.";
  } else {
    timeStr = i + " a.m.";
  }

//  placeholder for conditonal statement
  // conditional statement that determins the color of the textTd based on the hour 
  var plannerColor = "";
  if (time.hour === i) {
    // present
    plannerColor = "present";
  } else if (time.hour > i) {
    // past
    plannerColor = "past";
  } else if (time.hour < i) {
    // future
    plannerColor = "future";
  }

  // assigns proper classes and attributes for styling and future listeners
  timeSlot.text(timeStr);
  textTd.addClass("input " + plannerColor);
  textArea.attr("id", i);
  textArea.addClass(plannerColor);
  saveIcon.addClass("save");
  saveIcon.text("Save");
  saveIcon.attr("name", i);
  // appends the tds to the tr and the text area inside the textTd td
  tr.append(timeSlot, textTd, saveIcon);
  textTd.append(textArea);
  // appends all trs to the table
  $("#plannerTable").append(tr);
} 

// eventlistener for saveIcon td that stores the textarea value locally
$('.save').on('click', function(){
    // console.log($(this).attr('name'));
    // console.log($('#'+$(this).attr('name')).val());
    localStorage.setItem($(this).attr('name'), $('#'+$(this).attr('name')).val());
});

// function that iterates through the stored data and pulls it from local data
function displayPlan() {
    for (i=9; i <18; i++) {
    var planText = localStorage.getItem(i);
    $("#"+i).val(planText);
    }
}

// call the function or the saved local data will not display
displayPlan();