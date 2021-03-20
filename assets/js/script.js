// Display current day at top of calendar
var today = moment();
var currentDay = today.format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Color coding timeblocks
var currentHour = moment().hour();
var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (i = 0; i < hourArray.length; i++) {
  var hour = "hour-" + hourArray[i];
  //this is the textarea of the time block row
  //this hour is the id of the div
  //the hour array needs to match the hour- in the html in order to access the div
  var iterateHour = $(`#${hour}`).children()[1];

  if (currentHour == hourArray[i]) {
    //present
    $(iterateHour).addClass("present");
  } else if (currentHour < hourArray[i]) {
    //future
    $(iterateHour).addClass("future");
  } else if (currentHour > hourArray[i]) {
    $(iterateHour).addClass("past");
  }
}

// Saving inputs to local storage when save button clicked
const saveButton = $(".saveBtn");
saveButton.on("click", function (event) {
  event.preventDefault();
  const parentElId = $(this).parent().attr("id");
  saveLastEvent(parentElId); //this function has a parameter so the const can be accessed elsewhere
});

function saveLastEvent(parentID) {
  //this parameter can be named anything cuz the const was passed in when it was invoked
  var textArea = $("#" + parentID).children()[1]; // what is the # doing
  localStorage.setItem(parentID, JSON.stringify($(textArea).val()));
}

function init() {
  // When the init function is executed, the code inside getItemsFromStorage function will also execute
  getItemsFromStorage();
}
init();

function getItemsFromStorage() {
  for (let i = 9; i < 18; i++) {
    //id of the time block row
    var hour = "hour-" + i;
    //this is the textarea of the time block row
    var iterateHour = $(`#${hour}`).children()[1];
    var hourText = JSON.parse(localStorage.getItem(hour));
    $(iterateHour).text(hourText);
  }
}
