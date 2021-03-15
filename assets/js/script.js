// Display current day at top of calendar
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// color coding timeblocks
// past is white, present is coral, future is green

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
// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");
// function saveLastGrade() {
//   // Save related form data as an object
//   var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }
// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
// }
// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveLastGrade();
// renderLastGrade();
// });
// // The init() function fires when the page is loaded
// function init() {
//   // When the init function is executed, the code inside renderLastGrade function will also execute
//   renderLastGrade();
// }
// init();

// need to do:
// 1. color code timeblocks to indicate whether it is in the past, present, or future
// 2. when click save button for that timeblock, text is saved in local storage
// 3. when refresh page, events remain on page (do not include localStorage.clear())
