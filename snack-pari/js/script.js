// //CHIEDO ALL'UTENTE IL PRIMO NUMERO
 var numero = parseInt(prompt('Inserisci un numero'));

//SE IL NUMERO E' PARI VERRA' STAMPATO, ALTRIMENTI VERRA' STAMPATO IL NUMERO SUCCESSIVO AL NUMERO DISPARI
 if(numero % 2 == 0) {
   console.log(numero);
 } else {
   console.log(numero + 1);
 }
