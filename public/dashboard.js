let card_id = null;

//modal submit
$("#modal1").on("click", "#modalSubmit", function (e) {
  console.log("clicked");
});
//modal update mongodb
$(".blogs").on("click", ".put", (e) => {
  $("#modal2").modal("open");
  card_id = e.target.id;
});

$("#modal2").on("click", "#modalSubmit", (e) => {
  e.preventDefault();
  //get data from inputs
  var data = {
    title: $("#modal2 #title").val(),
    snippet: $("#modal2 #snippet").val(),
    body: $("#modal2 #body").val(),
  };

  $.ajax({
    method: "PUT",
    url: "http://localhost:3000/dashboard/" + card_id,
    data: data,
    success: (data) => {
      $("#modal2").modal("close");
      window.location.reload();
      Materialize.toast(data.msg, 5000);
    },
    fail: (err) => {
      Materialize.toast(data.msg, 6000);
    },
  });
});

//eventListener delete blog
$(".del").on("click", (e) => {
  e.preventDefault();

  var id = e.target.id;

  $.ajax({
    method: "DELETE",
    url: "http://localhost:3000/dashboard/" + id,

    success: function (data) {
      console.log(data);
      window.location.reload();
      Materialize.toast(data.msg, 3000);
    },
  });
});

$(document).ready(function () {
  $(".modal").modal();
});
