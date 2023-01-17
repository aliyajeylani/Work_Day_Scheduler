

$(function (runCode) {
  var currentDate = dayjs();
  $("#currentDay").text(currentDate.format('MMM D, YYYY'));
  console.log(runCode);

  $(document).ready(function () {

    $('.saveBtn').click(function () {



      var time = $(this).parent().attr('id');
      // alert(time);

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

    var currentHour = dayjs().hour()
    //alert(currentHour);

    $('.time-block').each(function (index) {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      console.log(blockHour);

      if (blockHour < currentHour) {

        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).addClass('present');
      } else if (blockHour > currentHour) {
        $(this).addClass('future');
      }


    })

  });

});
