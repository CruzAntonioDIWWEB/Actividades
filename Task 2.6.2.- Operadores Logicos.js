//1. Explain each otuput of the following code
Console.log( null || 2 || undefined );     //El operador lógico OR (||) recorre la sentencia de izquierda a derecha buscando un valor trurthy e imprime por pantalla el 2 porque es el unico valor distinto de 0
Console.log( 1 && null && 2 );             //El operador lógico AND (&&) recorre la sentencia de izquierda a derecha buscando un valor falso, es decir, vacío o que valga 0 y lo imprime
Console.log( null || 2 && 3 || 4 );        /*Como el operador lógico AND (&&) tiene prioridad sobre el operador lógico OR (||) se evalúa primero, entonces, 2 es un valor truthy y 3 también es truthy. Como ambos son truthy, el operador AND devuelve el último valor que es 3. 
                                             OR (||) evalúa de izquierda a derecha y devuelve el primer valor truthy. null es falsy, por lo que pasa al siguiente valor. 3 es truthy, así que OR devuelve 3 y ya no evalúa el resto*/   
let x = 3;                                 
console.log((x < 5) && (x > 0));           //El resultado es true. El operador AND (&&) devuelve true si ambas expresiones son verdaderas, como lo son, devuelve true.
console.log((x < 5) && (x > 6));           //El resultado es false. Porque ambas expresiones no son verdaderas.
console.log((x > 2) || (x > 5));           //El resultado es true. Porque hay una expresión que es verdadera, el operador lógico OR (||) devuelve true.
console.log((x > 3) || (x < 0));           //El resultado es false. Porque no hay ninguna expresión verdadera.
console.log(!(x == 3));                    //Devuelve false porque no se cumple la condición.
console.log(!(x < 2));                     //Devuelve true porque x es mayor que 2


//2. Change the code inside console.log so output is true
const numOne = 5;
const numTwo = 6;
console.log(numOne < numTwo);//He cambiado el operador lógico, en lugar de comparar si son iguales, ahora la expresión compara que numOne sea menor que numTwo


/*3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.*/

//primera variante
let anyo1 = prompt("Dime tu edad: ");
if(anyo1 < 14 || anyo1 >90){
  console.log("Su edad de " + anyo1 + " años, NO está comprendida entre los 14 y 90 años");
}else{
  console.log("Su edad de " + anyo1 + " años, SI está comprendida entre los 14 y 90 años");
}

//Segunda variante
let anyo2 = prompt("Dime tu edad: ");
if (!(anyo2 >= 14 && anyo2 <= 90)) {
  console.log("Su edad de " + anyo2 + " años, NO está comprendida entre los 14 y 90 años.");
} else {
  console.log("Su edad de " + anyo2 + " años, SI está comprendida entre los 14 y 90 años.");
}

//4. Explain what result will produce the following code
(-1 || 0) && ( 'first' );
//Resultado: 'first': Primero se ejecuta el operador logico OR, de ese paréntesis cogerá el valor truthy que es el -1, y luego se ejecutará el operador AND sobre el -1 y 'first' y como ambos son valores truthy, escoge el último 
(-1 && 0) || ( 'second' );
//Resultado: 'second': Primero se ejecuta el operador logico &&, de ese paréntesis cogerá el valor falsy que es el 0 y luego se ejecutará el operador OR sobre el 0 y 'second', como OR busca los valores truthy, escoge el 'second'
(null || -1 && 1) && ( 'third' );
/*Resultado: 'third': Primero se ejecuta el operador logico && ya que tiene prioridad, de esa operación escoge al ultimo valor truthy que es el 1
A continuaci´no se ejecuta el operador lógico OR entre null y 1, escoge al 1 que es el valor truthy y ahora se ejecuta el ultimo operador lógico, el && 
que entre 1 y 'third' escogerá 'third' porque es el ultimo valor ya que no encontrará ningún valor falsy*/


