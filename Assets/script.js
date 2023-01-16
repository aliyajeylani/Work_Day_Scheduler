// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function (runCode) {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentDate = dayjs();
  $("#currentDay").text(currentDate.format('MMM D, YYYY'));
  console.log(runCode);

  $(document).ready(function () {

    $('.saveBtn').click(function () {



      var time = $(this).parent().attr('id');
      //alert(time);

      var taskDescription = $(this).siblings('textarea').val()
      //alert(taskDescription);

      localStorage.setItem(time, taskDescription)

    })


    // get value localstorage
    // add those values to text area


    $(".time-block").each(function (index) {
      var id = $(this).attr("id")
      var task = localStorage.getItem(id)
      $(this).children("textarea").val(task);
    });

    var globalTime = dayjs().hour()
    alert(globalTime);

    var twelveHourTime = dayjs(globalTime).format('H')
    alert(twelveHourTime);

    // var centralTimeZone = dayjs(twelveHourTime).tz("Central")
    // alert(centralTimeZone);

    // // if (currentHour = ) {


    // }




  })

});
