var currentDayEl = $("#currentDay")
var inputEl = $("input")

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

// Prints the current day in the header
$(function renderCurrentDay() {
    var today = moment().format("dddd, MMMM Do")
    currentDayEl.text(today)
})

// Changes the colour of the hour columns depending on the hour it is
$(function hourColoumnColour() {
    var currentTime = moment().format("kk:mm")

    if (currentTime < nineOClock) {
        inputEl.removeClass("past")
        inputEl.addClass("future")
    } else if (nineOClock > currentTime < tenOClock)
        inputEl.removeClass("past")
        nineEl.addClass("present")
        inputEl.addClass("future")
})
