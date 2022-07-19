var time = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var calendar = localStorage.getItem("today").split(",");
if (calendar === null) {
  calendar = ["", "", "", "", "", "", "", "", ""];    //9 time slots from 9 AM to 5 PM
}
for (var i=0; i<9; i++) {
  createTimeBlock(i);
}

function createTimeBlock(index) {
  $("#all-times").append(
    $("<div>").addClass("time-block row").append(
      $("<div>").addClass("hour col-md-1 align-middle").text(time[index])).append(
      $("<textarea>").addClass("past col-md-10").val(calendar[index])).append(
      $("<div>").addClass("saveBtn col-md-1").attr("index", index).append(
        $("<i>").addClass("fas fa-save")
      )
      .on("click", function() {
        calendar[index] = $(this).prev().val();
        console.log(index, $(this).prev().val());
        localStorage.setItem("today", calendar);
        $("#confirmation").fadeIn(0).fadeOut(1500);
      })
    )
  );
}