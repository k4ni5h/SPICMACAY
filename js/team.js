var student={
  4:[['Priyansh Kaushal','priyansh'],['Shambhavi Pandey','shambhavi'],['Apoorva Singhal','apoorva'],['Chandana Shree Mounika','chandana'],['Nimisha Gupta','nimisha'],['Alekhya Payla','alekhya'],['Nainsu Riya','nainsu'],['Ujjwal Gahlot','ujjwal'],['Ritesh Chauhan','ritesh'],['Chirag Gupta','chirag'],['Rahul Agarwal','rahul'],['Ajay Kumar','ajay'],['Kanhaiya Jaju','jaju'],['Arindham Purohit','arindham'],['Reshi Kiran NC','reshi'],['Pankaj Bansal','pankaj'],['Karan Verma','karan'],['Parag Jain','parag']],
  3:[['Halember Manasa','manasa'],['Sejal Wasnik','sejal'],['Shruti Jamgade','shruti'],['Samila Subba','samila'],['Divya Kumawat','divya'],['Shivani Bhakal','shivani'],['Sanjana Garg','sanjana'],['Akshit Goel','akshit'],['Shahjad Ali','shahjad'],['Aryan Yadav','aryan'],['Adarsh Goyal','adarsh'],['Aman Azad','aman'],['Dikshit Gupta','dikshit'],['Anshul Dhunna','anshul'],['Deepak Sen','deepak'],['Deept Shukla','deept'],['Vaibhav Gupta', 'vaibhav3']],
  2:[['Kanish','kanish'],['Tanpreet Singh Kalsi','tanpreet'],['Sakshi Priya','sakshi'],['Kapil Birthala','jaipur'],['Vishal Purohit','vishal'],['Bharat Joshi','bharat'],['Pratyush Jha','jha'],['Sneha Maheshwari','mahishmati'],['Shazeb Ata','shazeb'],['Mohit Aneja','mohit'],['Sourab Yadav','sourab'],['Naman Gupta','naman'],['Anirudh Garg','anirudh'],['Vaibhav Nayer','vaibhav2'],['Abhishek Kumar','abhishekkumar'],['Pranav Anand','pranav'],['Sneha Pancholi','snehapancholi'],['Tulika Goyal','tulika'],['Vandana Pandey','vandana'],['Vishal Gautam','vishalgautam']],
  1:[['Abhik Chakraborty','abhik'],['Ahmer Mehmood','ahmer'],['Amritha Muthuraman','amritha'],['Aniket Prajapati','aniket'],['Disha Bhatia','disha'],['Divyansh Vijay','divyansh'],['Harshit Kankariya','harshit'],['Jaya Singh','jaya'],['Menus Garg','menus'],['Muskan Garg','muskan'],['Nikhil Duggal','nikhil'],['Nisha Mittal','nisha'],['Prakhar Pandey','prakhar'],['Priya Gurjar','priya'],['Rahul Singhai','rahulsinghai'],['Sanyam Agrawal','sanyam'],['Shikhar Gupta','shikhar'],['Shri Ram Rawat','shriram'],['Shubham','shubham'],['Udisha Dubey','udisha'],['Vaibhav Pipara','vaibhavpipara'],['Vinay Kumar','vinay']]
};

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
