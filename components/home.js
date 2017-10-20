var student={
  4:[['Priyansh Kaushal','priyansh'],['Shambhavi Pandey','shambhavi'],['Apoorva Singhal','apoorva'],['Chandana Shree Mounika','chandana'],['Nimisha Gupta','nimisha'],['Alekhya Payla','alekhya'],['Nainsu Riya','nainsu'],['Ujjwal Gahlot','ujjwal'],['Ritesh Chauhan','ritesh'],['Chirag Gupta','chirag'],['Rahul Agarwal','rahul'],['Ajay Kumar','ajay'],['Kanhaiya Jaju','jaju'],['Arindham Purohit','arindham'],['Reshi Kiran NC','reshi'],['Pankaj Bansal','pankaj'],['Karan Verma','karan'],['Parag Jain','parag']],
  3:[['Halember Manasa','manasa'],['Sejal Wasnik','sejal'],['Shruti Jamgade','shruti'],['Samila Subba','samila'],['Divya Kumawat','divya'],['Shivani Bhakal','shivani'],['Sanjana Garg','sanjana'],['Akshit Goel','akshit'],['Shahjad Ali','shahjad'],['Aryan Yadav','aryan'],['Adarsh Goyal','adarsh'],['Aman Azad','aman'],['Dikshit Gupta','dikshit'],['Anshul Dhunna','anshul'],['Deepak Sen','deepak'],['Deept Shukla','deept'],['Vaibhav Gupta', 'vaibhav3']],
  2:[['Kanish','kanish'],['Tanpreet Singh Kalsi','tanpreet'],['Sakshi Priya','sakshi'],['Kapil Birthala','jaipur'],['Vishal Purohit','vishal'],['Bharat Joshi','bharat'],['Pratyush Jha','jha'],['Sneha Maheshwari','mahishmati'],['Shazeb Ata','shazeb'],['Mohit Aneja','mohit'],['Sourab Yadav','sourab'],['Naman Gupta','naman'],['Anirudh Garg','anirudh'],['Vaibhav Nayer','vaibhav2']],
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
    $( "#student_4" ).append( '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 animate-bottom"><div><img class="img-circle center-block photo" src="images/team/volunteers/' + student[4][i][1] + '.jpg"></div><div class="text-center h4">' + student[4][i][0] + '</div></div>' );
  }
  for(i=0;i<student[3].length;i++)
  {
    $( "#student_3" ).append( '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 animate-bottom"><div><img class="img-circle center-block photo" src="images/team/volunteers/' + student[3][i][1] + '.jpg"></div><div class="text-center h4">' + student[3][i][0] + '</div></div>' );
  }
  for(i=0;i<student[2].length;i++)
  {
    $( "#student_2" ).append( '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 animate-bottom"><div><img class="img-circle center-block photo" src="images/team/volunteers/' + student[2][i][1] + '.jpg"></div><div class="text-center h4">' + student[2][i][0] + '</div></div>' );
  }
  if(student[1].length==0) {
    $( "#student_1" ).html("<center>coming soon</center>");
  }
  for(i=0;i<student[1].length;i++)
  {
    $( "#student_1" ).append( '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 animate-bottom"><div><img class="img-circle center-block photo" src="images/team/volunteers/' + student[1][i][1] + '.jpg"></div><div class="text-center h4">' + student[1][i][0] + '</div></div>' );
  }
}