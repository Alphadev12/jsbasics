codon = "";
ARN = "CCGUCGUUGCGCUACAGC"

let count = 0;
for (var i = 0; i < ARN.length; i++) {
	if (count < 2 || i == ARN.length - 1){
		codon = codon + ARN[i];
		count++;
	}
	else{
		codon = codon + ARN[i] + "-";
		count = 0;
	}
	// console.log(codon);
}

arrayCodon = codon.split("-");
// console.log(arrayCodon);

function codonToAa(codon) {
	let codonType;
	if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC") {
		codonType = "Sérine";
	}

	if (codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG") {
		codonType = "Proline";
	}

	if (codon === "UUA" || codon === "UUG") {
		codonType = "Leucine";
	}

	if (codon === "UUU" || codon === "UUC") {
		codonType = "Phénylalanine";
	}

	if (codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG") {
		codonType = "Arginine ";
	}
	
	if (codon === "UAU" || codon === "UAC") {
		codonType = "Tyrosine";
	}
	return codonType;
}


function proteine(arrayCodon) {
	var codonType = [];
	for (var i = 0; i < arrayCodon.length; i++) {

		codonType.push(codonToAa(arrayCodon[i]));
		// if (codonType === "Sérine") {
		// 	console.log("true");
		// }
		// else{
		// 	console.log("non");
		// }
	}
	console.log(codonType);
}


proteine(arrayCodon);