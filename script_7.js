let phrase = prompt("Que puis-je pour vous?");

function question(phrase) {
	fin = phrase.length - 1;
	console.log(phrase[fin]);
	if (phrase[fin] === "?") {
		return true
	}
}

function hurlement(phrase) {
	let hurlement = true;
	for (var i = 0; i < phrase.length; i++) {
		if (phrase[i] !== phrase[i].toUpperCase()) {
			hurlement = false;
			break;
		}
	}
	if (hurlement){
		return true;
	}
}

function detecter(phrase,mot) {
	mot = mot.toLowerCase();
	phrase = phrase.toLowerCase().split(" ");
	if (phrase.includes(mot)) {
		return true;
	}
}

if (phrase) {
	if (question(phrase) !== true && hurlement(phrase) !== true && detecter(phrase,"Fortnite") !== true) {
		alert("balek");
	}
	else if (question(phrase) === true) {
		alert("Ouais Ouais...");
	}
	else{
		if (hurlement(phrase) === true) {
			alert("Pwa, calme-toi...");
		}
		if (detecter(phrase,"Fortnite") === true) {
			alert("on s' fait une partie soum-soum ?");
		}
		if (!phrase){
			alert("t'es en PLS ?");
		}
	}
}

