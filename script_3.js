let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function my_half_pyramid(number) {

	for(var i = 1; i <= number; i++){
		vide = "";
		etoile = "";
		for(var j = 1; j <= (number-i); j++){
			vide = vide + " ";
		}
		for(var k = number-i; k < number; k++){
			etoile = etoile + "*";
		}
		pyramide = vide + etoile;
		console.log(pyramide);
	}
}

my_half_pyramid(number)