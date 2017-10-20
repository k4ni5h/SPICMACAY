var allevents=[
	{
		topic:"Balkan Music",
		date:"27 Sep 2017",
		time:"6:30 PM",
		venue:"O.P. Jain",
		artists:["Laurent Clouet", "Fakhroddin Ghaffari"],
		detail:"An eclectic Clarinetist, Laurent Clouet was trained through his travels and his encounters in the music of oral traditions. He has learned music in Balkan (Southeast Europe) from great masters such as Selim Sesler (Turkey), Petar Voinikov (Bulgaria) and Manos Achalinotopoulos (Greece). Through his travels and meetings with musicians from various backgrounds in Europe and Asia, he has developed a great sense of improvisation and knowledge of many different musical forms. Iranian-born percussionist Fakhroddin Ghaffari has mastery over multiple Persian and Middle Eastern percussion instruments including his principal instrument, Tombak, as well as Darbuka and Daf. He founded the Viuna Music Ensemble with which he has toured across the country in various festivals like Sufi Darbar, Ruhaniyat, Jahan-e-Khusrau, Jamal-e-Begum-Akhtar and many more.",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
	{
		topic:"Flute : Pt. Rajendra Prasanna",
		date:"25 Aug 2017",
		time:"6:30 PM",
		venue:"DoMS",
		artists:[],
		detail:"Pt. Rajendra Prasanna hails from the renowned “Benaras Gharana” and is a master of Flute & Shehnai. He is known for the unique blend of fluency and melody in his recitals, his systematic ‘Badhat’ with an aesthetic approach has been one of the main qualities of his presentations. He has been recipient of various awards At a young age, he was honoured with many prestigious awards including “Surmani” in Mumbai 1978, “Sangeet Pujari” in Delhi 1986. He was also the recipient of the Life Time Achievement Award of the Sahara India in 2003.",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
	{
		topic:"Pung Cholom : Mrindanga Kirtan",
		date:"1 Aug 2017",
		time:"7:00 PM",
		venue:"O. P. Jain",
		artists:[],
		detail:"The Pung cholom is a Manipuri dance. It is the soul of Manipuri Sankirtana music and Classical Manipuri dance. The Pung Cholom is a unique classical dance of Manipur. This dance may be performed by men or women and is usually a prelude to the Ras Lila. In this style, the dancers play the pung (a form of hand beaten drum) while they dance at the same time. Dancers need to be graceful and acrobatic at the same time. They use these acrobatic effects without breaking the rhythm or flow of music. The dance is marked by a gentle rhythm, which gradually builds up to a thunderous climax. Pung cholom borrows elements from the Manipuri martial arts Thang Ta and Sarit Sarak and also from the traditional Maibi Jagoi dance.",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
	{
		topic:"Thang Ta : Manipuri Martial Art",
		date:"1 Aug 2017",
		time:"6:30 PM",
		venue:"O. P. Jain",
		artists:[],
		detail:"Thang -Ta is a cultural heritage art of Manipur. Its traditional name is Huyel Langlon. Huyel Langlon means (Huyel means War and Langlon means Knowledge of Art) knowledge of War Art.. \"Thang\" and \"Ta\" are main weapons of this art so people commonly known the art as Thang-Ta, this is not mean to Thang as Sword and Ta as Spear,This is the name of the art.",
		artist_come:"",
		event_start:"",
		anchor:[],
		proceedings:[],
	},
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