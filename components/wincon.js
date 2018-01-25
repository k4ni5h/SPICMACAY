
(function() {
  // Masonry grid setup
  $(".grid").masonry({
    itemSelector: ".grid__item",
    columnWidth: ".grid__sizer",
    gutter: 15,
    percentPosition: true
  });
  // Image replacement handler
})();


function alleven(){
  $(".int").show();
  $(".aft").show();
  $(".eve").show();
  $("#winall").css("background-color", "#337ab7");
  $("#wineve").css("background-color", "#094a83");
  $("#winaft").css("background-color", "#094a83");
  $("#winint").css("background-color", "#094a83");
}
function even(){
  $(".int").hide();
  $(".aft").hide();
  $(".eve").hide();
  $(".eve").show();
  $("#wineve").css("background-color", "#337ab7");
  $("#winall").css("background-color", "#094a83");
  $("#winaft").css("background-color", "#094a83");
  $("#winint").css("background-color", "#094a83");
}
function after(){
  $(".int").hide();
  $(".aft").hide();
  $(".eve").hide();
  $(".aft").show();
  $("#winaft").css("background-color", "#337ab7");
  $("#wineve").css("background-color", "#094a83");
  $("#winall").css("background-color", "#094a83");
  $("#winint").css("background-color", "#094a83");
}
function inten(){
  $(".int").hide();
  $(".aft").hide();
  $(".eve").hide();
  $(".int").show();
  $("#winint").css("background-color", "#337ab7");
  $("#wineve").css("background-color", "#094a83");
  $("#winaft").css("background-color", "#094a83");
  $("#winall").css("background-color", "#094a83");
}
