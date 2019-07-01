$(document).ready(function(){

/* DropDown Meni */

	$("#gore li ul").css({
		display: "none",
		left: "auto"
	});
    
	$("#gore li").hover(
		function() {
			$(this).find("ul").stop(true, true).slideDown("fast");}, 
		function() {
			$(this).find("ul").stop(true,true).fadeOut("fast");
	});

/* Prikaz i pretraga iz JSON fajlova */

	$("#searchDiv").css("display","none");

	$("#search").keypress(function(e){
        if(e.which == 13){
        	$("#searchDiv").show().animate({height: '25px', opacity: '1'}, "slow");
        	pretrazi();
        }
    });
        
    $.ajax({
            type : "GET",
            url : "JSON/bodyProgram.json",
            success : function(programi){
                var a = window.location.href.toString().split("/");
                var provera = a[a.length-1];
                
                $.each(programi, function(i, program){
                    var vrstaPrograma = program.vrstaPrograma;
                    
                    if(vrstaPrograma == provera){
                        var imgSrc = program.imgSrc;
                        var imgAlt = program.imgAlt;
                        var programNasov = program.programNasov;
                        var programTekst = program.tekst;
                        var imgPogodnostID = program.imgPogodnostID;
                        var pogodnost1 = program.pogodnost1;
                        var pogodnost2 = program.pogodnost2;
                        var pogodnost3 = program.pogodnost3;
                        var pogodnost4 = program.pogodnost4;
                        var pogodnost5 = program.pogodnost5;


                        var tekst = "<article id='programTekst'><img src='"+imgSrc+"' alt='"+imgAlt+"'/><h3>"+programNasov+"</h3><br/><p>"+programTekst+"</p><br/><ul id='"+imgPogodnostID+"'><b>Pogodnosti:</b><li>"+pogodnost1+"</li><li>"+pogodnost2+"</li><li>"+pogodnost3+"</li><li>"+pogodnost4+"</li><li>"+pogodnost5+"</li></ul></article>";
                        $("#program").html(tekst);
                    }
                });
            }
    });
    
/* Galerija */
    
	var a = window.location.href.toString().split("/");
	var provera = a[a.length-1];
	if(provera == "galerija.html"){
		$(".slideGore").fancybox();
	}


/* Logovanje */

	$("#logovanje").click(function(){
        $.getJSON("JSON/korisnici.json", function(result){
            $.each(result, function(i, field){
                var username = $("#user").val();
                var password = $("#pass").val();
                if(username == field.username && password == field.password){
                	window.location.href = "http://scrankovic.byethost3.com/logovanje.html";
                }
            });
        });
    });
}); //kraj jq

//Pretraga JSON

function pretrazi(){
    $.ajax({
            type : "GET",
            url : "JSON/search.json",
            success : function(infos){
                var search_value = $("#search").val();
                var pom = 0;
                    
                $.each(infos, function(i, info){
                    var info_name = info.title;
                    
                    if(info_name.trim() == search_value.trim()){
                        var naslov = info.title;
                        var text = info.tekst;
                        var link = info.link;
                        
                        $("#Stitle").html("Nađena reč: "+naslov);
                        $("#Stext").html(text);
                        $("#Sdetaljnije").html("<a href='"+link+"'>Saznajte više</a>");
                        pom++;
                    }
                });
            
                if(pom == 0){
                    $("#Stitle").html("Unesite reč...");
                    $("#Stext").html("Nema rezultata za reč: <b>"+search_value+"</b> <u>Ukucajte ime nekog od programa.</u>");
                    $("#Sdetaljnije").html("<a href='#'>Saznajte više</a>");
                }
            }   
    });
}

/* Anketa */

function anketa(){
	if(document.cookie == ""){}
	else{
		var brKolacica = document.cookie.split(";");
		for(i = 0; i< brKolacica.length; i++){
		
			var kolacic = brKolacica[i].split(";")[0];
			var ime = kolacic.split("=")[0];
			var sadrzaj = kolacic.split("=")[1];
			
			if(ime.trim() == "glasanje"){
				if(sadrzaj == "da"){
					document.getElementById("happySmiley").innerHTML = "<img src='slike/happy.png' alt='srecan' />";
				}
				else{
					document.getElementById("sadSmiley").innerHTML = "<img src='slike/sad.png' alt='tuzan' />";
				}
				document.getElementById("glasaj").disabled = true;
			}
		}
	}
}

function glasanjeAnketa(){
	var za = "";

	if(document.getElementById("da").checked){
		za = "da";
		document.getElementById("happySmiley").innerHTML = "<img src='slike/happy.png' alt='srecan' />";
	}
	else{
		za = "ne";
		document.getElementById("sadSmiley").innerHTML = "<img src='slike/sad.png' alt='tuzan' />";
	}
	document.getElementById("glasaj").disabled = true;
	//praviti kolacic
	var datum = new Date();
	datum.setMonth(datum.getMonth()+6);
	document.cookie= "glasanje="+za+";expires="+datum.toGMTString()+";";
}

/* BodyAttack - JSON rad sa objektima */
function objekat(){
	var bodyAttack = '{"imgSrc": "slike/bodyattackL.jpg", "imgAlt": "BodyAttack Landscape", "programNasov": "Upoznajte se sa BODYATTACK™ LesMills programom", "tekst": "BodyAttack™ je sportsko-inspirisan kardio program za izgradnju snage i izdržljivosti. Visoko-energetski intervalni čas, kombinuje sportsko-aerobne pokrete sa snagom i vežbama stabilizacije. Dinamični instruktori i moćna muzika motivišu svakoga prema njihovim fitnes ciljevima - od vikend sportiste do hardcore takmičara! Kao i svi drugi LesMills programi, i BodyAttack™ se obnavlja nakon svaka tri meseca, novom muzikom i koreografijama.", "imgPogodnostID": "attack", "pogodnost1": "Troši gomilu kalorija", "pogodnost2": "Podiže vašu ukupnu kondiciju i izdržljivost", "pogodnost3": "Poboljšava koordinaciju i agilnost", "pogodnost4": "Poboljšava zdravlje i gustinu vaših kostiju", "pogodnost5": "Povećava kapacitet vašeg srca i pluća kroz kardio vežbe"}';
    
    var bodyAttackJSON = JSON.parse(bodyAttack);
                    
    var imgSrc = bodyAttackJSON.imgSrc;
    var imgAlt = bodyAttackJSON.imgAlt;
    var programNasov = bodyAttackJSON.programNasov;
    var programTekst = bodyAttackJSON.tekst;
    var imgPogodnostID = bodyAttackJSON.imgPogodnostID;
    var pogodnost1 = bodyAttackJSON.pogodnost1;
    var pogodnost2 = bodyAttackJSON.pogodnost2;
    var pogodnost3 = bodyAttackJSON.pogodnost3;
    var pogodnost4 = bodyAttackJSON.pogodnost4;
    var pogodnost5 = bodyAttackJSON.pogodnost5;

    var tekst = "<article id='programTekst'><img src='"+imgSrc+"' alt='"+imgAlt+"'/><h3>"+programNasov+"</h3><br/><p>"+programTekst+"</p><br/><ul id='"+imgPogodnostID+"'><b>Pogodnosti:</b><li>"+pogodnost1+"</li><li>"+pogodnost2+"</li><li>"+pogodnost3+"</li><li>"+pogodnost4+"</li><li>"+pogodnost5+"</li></ul></article>";
    document.querySelector(".bodyattack").innerHTML = tekst;
}