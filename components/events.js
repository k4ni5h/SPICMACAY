
var allevents=[
	{
		topic:"Newton aa gaya kisi din to bahut marega",
		date:"30 Jul 2018",
		time:"6:20 PM",
		venue:"O. P. Jain",
		artists:[],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
	{
		topic:"Einstein aya dubara",
		date:"31 Jul 2017",
		time:"6:20 PM",
		venue:"O. P. Jain",
		artists:["djgas", "asdga"],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
	{
		topic:"Newton ki seb upar gyi",
		date:"30 Jul 2017",
		time:"6:50 AM",
		venue:"O. P. Jain",
		artists:[],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"",
		event_start:"6:30 PM",
		anchor:[],
		proceedings:["ajhdasdasd","nagsh","asdghas"],
	},
	{
		topic:"Einstein khan gaya",
		date:"28 Jul 2016",
		time:"6:20 PM",
		venue:"O. P. Jain",
		artists:["djgas", "asdga"],
		detail:"ajhdasdasd nagsh asdghas",
		artist_come:"6:20 PM",
		event_start:"6:30 PM",
		anchor:["ads","adas"],
		proceedings:["agds","aahdg","ansdbhsa","jasgdh"],
	}
]
function abcd(){
	for(i=0;i<allevents.length;i++)
	{
		var evn_date=ev_date=allevents[i]["date"].substring(0,6);
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
		else if (tdate.getFullYear()!=even_date.getFullYear()) {
			evn_date=ev_date=allevents[i]["date"];
		}
		for(j=0;j<allevents[i]["artists"].length;j++) {
			art+='<li>'+allevents[i]["artists"][j]+'</li>';
		};
		for(j=0;j<allevents[i]["proceedings"].length;j++) {
			proc+='<li>'+allevents[i]["proceedings"][j]+'</li>';
		};
		if(art=="") {
			if (new Date(allevents[i]["date"]+" "+allevents[i]["time"])>new Date(Date())) {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse in"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /></div></div></div>' );
			}
			else if (allevents[i]["proceedings"]=="") {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /></div></div></div>' );
			}
			else {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /><b>Commencement of Event :</b> '+allevents[i]["event_start"]+'<br /><b>Proceedings of Event :</b><br /><ul class="leftcontent">'+proc+'</ul></div></div></div>' );
			}
		}
		else {
			if (new Date(allevents[i]["date"]+" "+allevents[i]["time"])>new Date(Date())) {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse in"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div><b>Artist(s) :</b> <ol class="leftcontent">'+art+'</li></ol></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /></div></div></div>' );
			}
			else if (allevents[i]["proceedings"]=="") {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div><b>Artist(s) :</b> <ol class="leftcontent">'+art+'</li></ol></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /></div></div></div>' );
			}
			else {
				$( "#allevents" ).append( '<div class="panel panel-default eventhead"><div class="container headline" data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'"><span class="date">'+ev_date+'</span><span class="place">'+allevents[i]["venue"]+'</span><center><div class="topic">'+allevents[i]["topic"]+'</div></center></div><div id="collapse'+i+'" class="panel-collapse collapse"><div class="panel-body"><center><h1>'+allevents[i]["topic"]+'</h1></center><div class="leftcontent"><div class="leftcontent"><b>Date :</b> '+evn_date+'<br /><b>Time :</b> '+allevents[i]["time"]+'<br /><b>Venue :</b> '+allevents[i]["venue"]+'<br /></div><b>Artist(s) :</b> <ol class="leftcontent">'+art+'</li></ol></div><b>Description of Event :</b> '+allevents[i]["detail"]+'<br /><b>Arrival of Artist(s) :</b> '+allevents[i]["artist_come"]+'<br /><b>Commencement of Event :</b> '+allevents[i]["event_start"]+'<br /><b>Anchors :</b> '+allevents[i]["anchor"][0]+' and '+allevents[i]["anchor"][1]+'<br /><b>Proceedings of Event 	:</b><br /><ul class="leftcontent">'+proc+'</ul></div></div></div>' );
			}
		}
	}
}
//var d1 = "2017-06-19T18:57:20";
//new Date(d1)>new Date(Date())