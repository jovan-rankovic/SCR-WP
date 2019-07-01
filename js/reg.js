function registracija(){
	var rTel = /^06[0-9]\/?[0-9]{6,7}$/;
	var rMail = /^\w+([\.\-]?\w+)*\@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
	var rIme = /^[A-Z][a-z]{3,}(\s[A-Z][a-z]{3,})+$/;

	var Tel = document.getElementById("telefon").value;
	var Mail = document.getElementById("email").value;
	var Ime = document.getElementById("prezimeime").value;

	var greska = 0;

	if(!rTel.test(Tel)){
		greska++;
		document.getElementById("greskaTel").style.opacity = 1;
	}else{
		document.getElementById("greskaTel").style.opacity = 0;
	}
	if(!rMail.test(Mail)){
		greska++;
		document.getElementById("greskaMail").style.opacity = 1;
	}else{
		document.getElementById("greskaMail").style.opacity = 0;
	}
	if(!rIme.test(Ime)){
		greska++;
		document.getElementById("greskaIme").style.opacity = 1;
	}else{
		document.getElementById("greskaIme").style.opacity = 0;
	}
	var p = document.getElementById("clanarina");
	var Clanarina = "";
	if(p.options[p.selectedIndex].value == 0){
		greska++;
		document.getElementById("greskaClan").style.opacity = 1;
	}else{
		if(p.options[p.selectedIndex].value==1){
			Clanarina="Mesečna";
		}
		else if(p.options[p.selectedIndex].value==1){
			Clanarina="3x nedeljno";
		}else{
			Clanarina="2x nedeljno";
		}
		document.getElementById("greskaClan").style.opacity = 0;
	}
	var program = "";
	if(!(document.getElementById("vajv").checked || document.getElementById("kombat").checked || document.getElementById("atak").checked)){
		greska++;
		document.getElementById("greskaProgram").style.opacity = 1;
	}else{
		if(document.getElementById("vajv").checked){
			program+="BodyVive, ";
		}if(document.getElementById("kombat").checked){
			program+="BodyCombat, ";
		}if(document.getElementById("atak").checked){
			program+="BodyAttack";
		}
		document.getElementById("greskaProgram").style.opacity = 0;
	}
	var pitanja = document.getElementById("poruka").value;

	if(greska == 0){
		window.location="mailto:scrankovic@hotmail.com?subject=Registracija&body=Prezime i ime: "+Ime+"%0AE-mail: "+Mail+"%0ATelefon: "+Tel+"%0AClanarina: "+Clanarina+"%0AProgrami: "+program+"%0APitanja: "+pitanja+";";
	}
}