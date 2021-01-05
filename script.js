var DateTime = luxon.DateTime;
var time = DateTime.local();
var now = time.toLocaleString(DateTime.DATETIME_MED);

// console.log(now);
// console.log(now.c);
// console.log(now.year);
// console.log(now.hour);

$('h1').after(now);


// for loop creates table rows corresponding with the hour "i"
for (i=9; i < 18; i++) {
// Create trs and tds with jquery
  var tr = $('<tr>');
  var timeSlot = $('<td>');
  var textTd = $('<td>');
  var textArea = $('<textarea>');
  var saveIcon = $('<td>');
    //sets the correct time for each tr
  var timeStr = ''
  if(i==12) {
      timeStr= i + " p.m."
  }
    else if(i > 12) {
      timeStr = i -12 + " p.m."
    }   else {
            timeStr = i + " a.m."
        }
    // assigns proper classes and attributes for styling and future listeners
  timeSlot.text(timeStr);
  textTd.addClass('input');
  textArea.attr('id', i);
  saveIcon.addClass('save');
  saveIcon.text('save');
  saveIcon.attr('name', i);
    // appends the tds to the tr and the text area inside the textTd td
  tr.append(timeSlot, textTd, saveIcon);
  textTd.append(textArea);
    // appends all trs to the table
  $('#plannerTable').append(tr);  
} 

$('.save').on('click', function(){
    // console.log($(this).attr('name'));
    // console.log($('#'+$(this).attr('name')).val());
    localStorage.setItem($(this).attr('name'), $('#'+$(this).attr('name')).val());
});

function displayPlan() {
    for (i=9; i <18; i++) {
    var planText = localStorage.getItem(i);
    $("#"+i).val(planText);
    }
}

displayPlan();