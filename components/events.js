
var allevents=[
	{
		date:"30 Jul 2017",
		topic:"Newton",
		time:"6:20 PM",
		venue:"O. P. Jain",
		anchor:["ads","adas"],
		artists:["djgas", "asdga"],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"6:20 PM",
		event_start:"6:30 PM",
		proceedings:["ajhdasdasd","nagsh","asdghas"],
	},
	{
		date:"29 Jul 2017",
		topic:"Einstein",
		time:"6:20 PM",
		venue:"O. P. Jain",
		anchor:["ads","adas"],
		artists:["djgas", "asdga"],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"6:20 PM",
		event_start:"6:30 PM",
		proceedings:["agds","aahdg","ansdbhsa","jasgdh"],
	}
]
function abcd(){
	for(i=0;i<allevents.length;i++)
	{
		var ev_date=allevents[i]["date"].substring(0,6);
		var even_date=new Date(allevents[i]["date"]+" "+allevents[i]["time"]);
		var date1=new Date;
		var tomdate=new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
		var tdate=new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
		var yesdate=new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - 1);
		var art="";
		var proc=""
		if (tomdate.getFullYear() == even_date.getFullYear() && tomdate.getMonth() == even_date.getMonth() && tomdate.getDate() == even_date.getDate()) {
			ev_date="Tomorrow";
		}
		else if (tdate.getFullYear() == even_date.getFullYear() && tdate.getMonth() == even_date.getMonth() && tdate.getDate() == even_date.getDate()) {
			ev_date="Today";
		}
		else if (yesdate.getFullYear() == even_date.getFullYear() && yesdate.getMonth() == even_date.getMonth() && yesdate.getDate() == even_date.getDate()) {
			ev_date="Yesterday";
		}
		for(j=0;j<allevents[0]["artists"].length;j++) {
			art+='<li>'+allevents[0]["artists"][j]+'</li>';
		};
		for(j=0;j<allevents[0]["proceedings"].length;j++) {
			proc+='<li>'+allevents[0]["proceedings"][j]+'</li>';
		};
		if (new Date(allevents[i]["date"]+" "+allevents[i]["time"])>new Date(Date()) || allevents[i]["proceedings"]=="") {
			$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><center><span class="date">'+ev_date+'</span><span class="topic">'+allevents[i]["topic"]+'</span><span class="place">'+allevents[i]["venue"]+'</span></center></div><div id="collapse'+i+'" class="panel-collapse collapse in"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+allevents[i]["date"].substring(0,6)+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div><b>Artist(s) :</b> <ol class="leftcontent">'+art+'</li></ol></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /></div></div></div>' );
		}
		else {
			$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><center><span class="date">'+ev_date+'</span><span class="topic">'+allevents[i]["topic"]+'</span><span class="place">'+allevents[i]["venue"]+'</span></center></div><div id="collapse'+i+'" class="panel-collapse collapse"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+allevents[i]["date"].substring(0,6)+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div><b>Artist(s) :</b> <ol class="leftcontent">'+art+'</li></ol></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /><b>Arrival of Artist(s) :</b> '+allevents[i]["artist_come"]+'<br /><b>Commencement of Event :</b> '+allevents[i]["event_start"]+'<br /><b>Anchors :</b> '+allevents[i]["anchor"][0]+' and '+allevents[i]["anchor"][1]+'<br /><b>The proceedings of the concert are as follows :</b><br /><ul class="leftcontent">'+proc+'</ul></div></div></div>' );
		}
	}
}
//var d1 = "2017-06-19T18:57:20";
//new Date(d1)>new Date(Date())