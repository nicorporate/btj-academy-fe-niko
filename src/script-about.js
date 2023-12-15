$(".logo").ready(function () {
  $("#welcome").click(function () {
    alert("Hi, Selamat Datang!");
  });
});

$("#profile").mouseenter(function () {
  $(this).css("background-color", "black");

  // mouseleave: function () {
  //   $(this).css("background-color", "lightblue");
  // },
  // click: function () {
  //   $(this).css("background-color", "yellow");
  // },
});

$(document).ready(function () {
  let rotationDegree = 0;

  function rotateImage() {
    rotationDegree += 360;
    $("#rotating-image").css("transform", "rotate(" + rotationDegree + "deg)");
  }

  $("#rotating-image").click(rotateImage);
});
