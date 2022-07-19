var time = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var today = moment().format("MMMM Do, YYYY");
var curHour = moment().format("HH");
$("#currentDay").text(today);
var calendar = localStorage.getItem(today);
if (calendar === null) {
  calendar = ["", "", "", "", "", "", "", "", ""];    //9 time slots from 9 AM to 5 PM
}
else {
  calendar = calendar.split(",");
}
for (var i=0; i<9; i++) {    //creating time blocks
  $("#all-times").append(
    $("<div>").addClass("time-block row").append(
      $("<div>").addClass("hour col-md-1 align-middle").text(time[i])).append(
      $("<textarea>").addClass(function () {
        var res = "col-md-10 ";
        if (curHour < i + 9) {
          res += "future";
        }
        else if (curHour == i + 9) {
          res += "present";
        }
        else {
          res += "past";
        }
        return res;
      }).val(calendar[i])).append(
      $("<div>").addClass("saveBtn col-md-1").attr("index", i).append(
        $("<i>").addClass("fas fa-save")
      )
      .on("click", function() {
        calendar[$(this).attr("index")] = $(this).prev().val();
        localStorage.setItem(today, calendar);
        $("#confirmation").fadeIn(0).fadeOut(1500);
      })
    )
  );
}