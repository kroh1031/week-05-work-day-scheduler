// Display current day at top of calendar
var today = moment();
var currentDay = today.format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// color coding timeblocks
// past is gray, present is red, future is green
//if current time > printed time, add class future to make green color
//if current time < printed time, add class past to make gray color
//if current time === printed time, add class present to make red
//can use isBefore, isSame, isAfter functions
// function compareTime() {
var currentHour = moment().hour();
var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// console.log(currentHour);
for (i = 0; i < hourArray.length; i++) {
  if (currentHour === hourArray[i]) {
    //present
    console.log("Present hour:" + hourArray[i]);
  } else if (currentHour < hourArray[i]) {
    //future
    console.log("Future hours:" + hourArray[i]);
  } else if (currentHour > hourArray[i]) {
    console.log("Past hours:" + hourArray[i]);
  }
}

// $("#hour-9").addClass("past");
// $("#hour-10").addClass("past");
// $("#hour-11").addClass("present");
// $("#hour-12").addClass("future");
// $("#hour-1").addClass("future");
// $("#hour-2").addClass("future");
// $("#hour-3").addClass("future");
// $("#hour-4").addClass("future");
// $("#hour-5").addClass("future");

// need to make .description more specific to the timeblock
// right now it saves changes to ALL timeblocks
// saving inputs to local storage as string when save button clicked
const saveButton = $(".saveBtn");
saveButton.on("click", function (event) {
  event.preventDefault();
  saveLastEvent();
  renderLastEvent();
});

var eventInput = $(".description");
// console.log(eventInput);
function saveLastEvent() {
  var eventDescription = {
    eventInput: eventInput.val(),
  };
  localStorage.setItem("eventDescription", JSON.stringify(eventDescription));
}
function renderLastEvent() {
  var lastEvent = JSON.parse(localStorage.getItem("eventDescription"));
  if (lastEvent !== null) {
    eventInput.text(lastEvent.eventInput);
  }
}

function init() {
  // When the init function is executed, the code inside renderLastEvent function will also execute
  renderLastEvent();
}
init();

// need to do:
// 1. color code timeblocks to indicate whether it is in the past, present, or future
// 2. when click save button for that timeblock, text is saved in local storage
// 3. when refresh page, events remain on page (do not include localStorage.clear())
