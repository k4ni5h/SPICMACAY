var student={
  4:[['Abhishek Agarwal','images/team/volunteers/aditya.jpg'],],
  3:[['Abhishek Agarwal','images/team/volunteers/aditya.jpg'],],
  2:[['Abhishek Agarwal','images/team/volunteers/aditya.jpg'],],
  1:[]
};

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
  for(i=0;i<student[4].length;i++)
  {
    $( "#student_4" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + student[4][i][1] + '"></div><div class="text-center h4">' + student[4][i][0] + '</div></div>' );
  }
  for(i=0;i<student[3].length;i++)
  {
    $( "#student_3" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + student[3][i][1] + '"></div><div class="text-center h4">' + student[3][i][0] + '</div></div>' );
  }
  for(i=0;i<student[2].length;i++)
  {
    $( "#student_2" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + student[2][i][1] + '"></div><div class="text-center h4">' + student[2][i][0] + '</div></div>' );
  }
  if(student[1].length==0) {
    $( "#student_1" ).html("will recruit soon");
  }
  for(i=0;i<student[1];i++)
  {
    $( "#student_1" ).append( '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6"><div><img class="img-circle center-block photo" src="' + student[1][i][1] + '"></div><div class="text-center h4">' + student[1][i][0] + '</div></div>' );
  }
}