var currentDayEl = $("#currentDay")

// Prints the current day in the header
$(function renderCurrentDay() {
    var today = moment().format("dddd, MMMM Do")
    currentDayEl.text(today)
})

// Changes the colour of the hour columns depending on the hour it is
$(function hourColoumnColour() {

})
