$(document).ready(function() {

  //importing day.js
  const currentDay = dayjs();
  $('#currentDay').text(currentDay.format('dddd, MMM D, YYYY hh:mm:ss a'))
  
  //changes the time block colors as the day goes on
  const currentTime = parseInt(dayjs().format("HH"))
  $(".time-block").each(function () { 
    const timeId = parseInt($(this).attr('id').split('-')[1])
    if (currentTime > timeId)
      $(this).addClass("past") 
    if (currentTime === timeId)
      $(this).addClass("present") 
    if (currentTime < timeId)
      $(this).addClass("future")
  })

  //Saves your list onto your local storage
  const saveBtn = $(".saveBtn")
  saveBtn.on("click", function () {
    const input = $(this).siblings(".description").val()
    const timeSlot = $(this).parent().attr("id'");
    localStorage.setItem(timeSlot, input)
  })

  $(".time-block").each(function(){
    const timeSlot = $(this).attr("id")
    const savedInput = localStorage.getItem(timeSlot)
    if (savedInput !== null) {  
      $(this).find(".description").val(savedInput)
    }
})

  
})

//Question for grader: How can I get the clock to update in real time? I have to keep refreshing page to get the time to update.