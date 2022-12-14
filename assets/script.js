var currentDayEl = $("#currentDay")
var inputEl = $("input")
var currentTime = moment().format("kk:mm")

var nineEl = $("#nine")
var tenEl = $("#ten")
var elevenEl = $("#eleven")
var twelveEl = $("#twelve")
var oneEl = $("#one")
var twoEl = $("#two")
var threeEl = $("#three")
var fourEl = $("#four")
var fiveEl = $("#five")

var nineOClock = moment("09:00", "kk:mm").format("kk:mm")
var tenOClock = moment("10:00", "kk:mm").format("kk:mm")
var elevenOClock = moment("11:00", "kk:mm").format("kk:mm")
var twelveOClock = moment("12:00", "kk:mm").format("kk:mm")
var oneOClock = moment("13:00", "kk:mm").format("kk:mm")
var twoOClock = moment("14:00", "kk:mm").format("kk:mm")
var threeOClock = moment("15:00", "kk:mm").format("kk:mm")
var fourOClock = moment("16:00", "kk:mm").format("kk:mm")
var fiveOClock = moment("17:00", "kk:mm").format("kk:mm")
var sixOClock = moment("18:00", "kk:mm").format("kk:mm")

// Prints the current day in the header
$(function renderCurrentDay() {
    var today = moment().format("dddd, MMMM Do")
    currentDayEl.text(today)
})

// Changes the colour of the hour columns depending on the hour it is
$(function hourColoumnColour() {

    if (currentTime < nineOClock) {
        inputEl.removeClass("past")
        inputEl.addClass("future")
    } else if (currentTime < tenOClock) {
        nineEl.addClass("present")
        tenEl.addClass("future")
        elevenEl.addClass("future")
        twelveEl.addClass("future")
        oneEl.addClass("future")
        twoEl.addClass("future")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < elevenOClock) {
        nineEl.addClass("past")
        tenEl.addClass("present")
        elevenEl.addClass("future")
        twelveEl.addClass("future")
        oneEl.addClass("future")
        twoEl.addClass("future")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < twelveOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("present")
        twelveEl.addClass("future")
        oneEl.addClass("future")
        twoEl.addClass("future")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < oneOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("present")
        oneEl.addClass("future")
        twoEl.addClass("future")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < twoOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("past")
        oneEl.addClass("present")
        twoEl.addClass("future")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < threeOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("past")
        oneEl.addClass("past")
        twoEl.addClass("present")
        threeEl.addClass("future")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < fourOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("past")
        oneEl.addClass("past")
        twoEl.addClass("past")
        threeEl.addClass("present")
        fourEl.addClass("future")
        fiveEl.addClass("future")
    } else if (currentTime < fiveOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("past")
        oneEl.addClass("past")
        twoEl.addClass("past")
        threeEl.addClass("past")
        fourEl.addClass("present")
        fiveEl.addClass("future")
    } else if (currentTime < sixOClock) {
        nineEl.addClass("past")
        tenEl.addClass("past")
        elevenEl.addClass("past")
        twelveEl.addClass("past")
        oneEl.addClass("past")
        twoEl.addClass("past")
        threeEl.addClass("past")
        fourEl.addClass("past")
        fiveEl.addClass("present")
    } else {
        inputEl.addClass("past")
    }
})

// Saves the task input
$(".saveBtn").on("click", function(event) {
    event.preventDefault()

    var value = $(this).siblings(".task-input").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
})

// Displays the saved tasks
$(function displayTasks() {
    $("#hour-09 .task-input").val(localStorage.getItem("09"));
    $("#hour-10 .task-input").val(localStorage.getItem("10"));
    $("#hour-11 .task-input").val(localStorage.getItem("11"));
    $("#hour-12 .task-input").val(localStorage.getItem("12"));
    $("#hour-13 .task-input").val(localStorage.getItem("13"));
    $("#hour-14 .task-input").val(localStorage.getItem("14"));
    $("#hour-15 .task-input").val(localStorage.getItem("15"));
    $("#hour-16 .task-input").val(localStorage.getItem("16"));
    $("#hour-17 .task-input").val(localStorage.getItem("17"));
})

// Clears all the tasks
$("#clear-btn").on("click", function(event) {
    localStorage.clear()
    location.reload()
})