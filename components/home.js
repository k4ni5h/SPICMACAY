var stu=['Abhishek Agarwal'];
var stuimg=['images/team/volunteers/aditya.jpg'];

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

function abcd1(){
  for(i=0;i<stu.length;i++)
  {
    $( "#student_4" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + stuimg[0] + '"></div><div class="text-center h4">' + stu[0] + '</div></div>' );
  }
  for(i=0;i<stu.length;i++)
  {
    $( "#student_3" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + stuimg[0] + '"></div><div class="text-center h4">' + stu[0] + '</div></div>' );
  }
  for(i=0;i<stu.length;i++)
  {
    $( "#student_2" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + stuimg[0] + '"></div><div class="text-center h4">' + stu[0] + '</div></div>' );
  }
  if(stu.length==0) {
    $( "#student_1" ).html("will recruit soon");
  }
  for(i=0;i<stu.length;i++)
  {
    $( "#student_1" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + stuimg[0] + '"></div><div class="text-center h4">' + stu[0] + '</div></div>' );
  }
}