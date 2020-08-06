//CHIEDO ALL'UTENTE LA PRIMA PAROLA
var primaparola = prompt("Inserisci la prima parola");
//CHIEDO ALL'UTENTE LA SECONDA PAROLA
var secondaparola = prompt("Inserisci la seconda parola");

//STAMPO LA PAROLA PIU' PICCOLA E POI LA PAROLA PIU' LUNGA

if (primaparola.length < secondaparola.length) {
  console.log(primaparola + " " + secondaparola);
} else if (secondaparola.length < primaparola.length) {
  console.log(secondaparola + " " + primaparola);
} else {
  console.log("Le due parole hanno la stessa lunghezza");
}
