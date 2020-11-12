$("#button1").click(function () {
  $("#story1").toggle();
});

$("#button2").click(function () {
  $("#story2").toggle();
});

$("#button3").click(function () {
  $("#story3").toggle();
});

$("#button4").click(function () {
  $("#story4").toggle();
});

$("#button5").click(function () {
  $("#story5").toggle();
});

$("#button6").click(function () {
  $("#story6").toggle();
});

$("#button7").click(function () {
  $("#story7").toggle();
});

$("#button8").click(function () {
  $("#story8").toggle();
});

$("#button9").click(function () {
  $("#story9").toggle();
});

$("#button10").click(function () {
  $("#story10").toggle();
});

$("#button11").click(function () {
  $("#story11").toggle();
});
$('nav li').hover(
  function() {
    $('ul', this).stop().slideDown(200);
  },
  function() {
    $('ul', this).stop().slideUp(200);
  }
);