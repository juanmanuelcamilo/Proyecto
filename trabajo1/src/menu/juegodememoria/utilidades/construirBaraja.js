//Vamos a exportar una funcion que al ser invocada va a retornar una baraja nueva
import shuffle from 'lodash.shuffle';//Modulo de npm para mezclar las cartas, de otra manera, aparecerian una al lado de la otra
import FontAwesomeClasses from './fontAwesomeClasses';//Libreria de npm que contiene iconos

const NUMERO_DE_CARTAS = 20;//Cantidad de cartas que va a tener nuestra baraja

export default () => {
  const fontAwesomeClasses = FontAwesomeClasses();//Aca se van a guardar TODOS los diferentes tipos de clases que tiene FontAwesome(mas de 100)
  let cartas = [];//va a contener todas las cartas de nuestra baraja

  while(cartas.length < NUMERO_DE_CARTAS) {//va a empujar clases a la baraja hasta tener 20
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);//Generamos un N° aleatorio///Math.random retorna un valor entre 0 y 1 (sin incluirlo)
    const carta = {//Extraemos el elemento que esta en el array en ese index y crear la carta
      icono: fontAwesomeClasses.splice(index, 1)[0],//Así extraemos la carta que está en el indice que generamos//Pasamos el N° 1 porque solo queremos ese elemento que está en ese indice//Estos nos devuelve un array con un solo elemento, por lo que le pasamos el selector [0] para elegirlo
      fueAdivinada: false
    };

    cartas.push(carta);//Pusheamos la carta al array cartas
    cartas.push({...carta});//clonamos la carta(con los ... van a tener las mismas referencias pero van a ser 2 objetos distintos)
  }

  return shuffle(cartas);
};