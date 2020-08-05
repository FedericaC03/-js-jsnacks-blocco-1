//CHIEDO ALL'UTENTE IL PRIMO NUMERO
var primonumero = parseInt(prompt('Inserisci il primo numero'));
//CHIEDO ALL'UTENTE IL SECONDO NUMERO
var secondonumero = parseInt(prompt('Inserisci il secondo numero'));

// IL NUMERO PIU' GRANDE VERRA' STAMPATO
  if (primonumero > secondonumero) {
    console.log(primonumero);
  }
  else if  (primonumero < secondonumero) {
    console.log(secondonumero);
  }
  else {
    console.log('I numeri sono uguali');
  }
