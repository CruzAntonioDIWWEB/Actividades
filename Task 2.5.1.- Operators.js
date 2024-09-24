//1. What are the final values of all variables a, b, c and d after the code below?
let a1 = 1, b1 = 1;
let c1 = ++a1; //Resultado: c=2 porque primero se incrementa el valor de a y luego se le asigna a c (INCREMENTO PREVIO)
let d1 = b1++; //Resultado: d=1 porque primero se le asigna el valor a d y luego se le hace la suma a b (INCREMENTO POSTERIOR)


//2. What are the values of a and x after the code below?
let a2 = 2;
let x1 = 1 + (a2 *= 2); //Resultado: x=5 porque el resultado de la operacion en paréntesis es 4

/*What will be the result for these
expressions?*/
5 > 4                   //Resultado: TRUE
"apple" > "pineapple"   //Resultado: FALSE porque al comparar los string las primeras letras del abecedario son menores a las últimas
"2" > "12"              //Resultado: TRUE porque como es un string el 2 va después del 1 que contiene el 12
undefined == null       //Resultado: TRUE usando el operardor == se considera que null y undefined tienen el mismo contenido vacío
undefined === null      //Resultado: FALSE al usar el operador estricto === se compara también el tipo de variable y es false porque no son iguales
null == "\n0\n"         //Resultado: FALSE null solo es igual a undefined o a sí mismo, no a otras cadenas o números
null === +"\n0\n"       //Resultado: FALSE al usar === se comparan tambien los tipos de variable y null no es igual a un numero entero aunque sea 0 


//3. What are the results of these expressions?
"" + 1 + 0      //Resultado: "10"   porque la cadena vacía "" se concatena con 1 dando lugar a "1" y luego "1" se concatena con 0, dando como resultado "10"
"" - 1 + 0      //Resultado: -1     porque la cadena vacía "" se convierte a 0 en la operación de resta. Entonces, 0 - 1 resulta en -1, y luego -1 + 0 sigue siendo -1.
true + false    //Resultado: 1      en javascript true es 1 y false es 0
6 / "3"         //Resultado: "2"    aquí el "3" se convierte en número
"2" * "3"       //Resultado: 6      la operación de multiplicación convierte los string en enteros
4 + 5 + "px"    //Resultado: "9px"  primero se hace la operación numérica y a continuación se concatena con el string, el resultado es un string
"$" + 4 + 5     //Resultado: "$45"  primero el dollar se concatena con 4 y luego "$4" se concatena con 5
"4" - 2         //Resultado: "2"    el string se convierte en número y se hace la cuenta de enteros
"4px" - 2       //Resultado: ---
" -9 " + 5      //Resultado: " -9 5"    como se usa el operador + se están concatenando los elementos en un string
" -9 " - 5      //Resultado: -14     el operardor - siempre espera que la operación se realice con números asique los convierte a enteros y los suma
null + 1        //Resultado: 1      0 + 1 es 1
undefined + 1   //Resultado: 0      no se le puede sumar ningun numero a nada que no esté definido
" \t \n" - 2    //Resultado: ---


/*Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly.
The output in the example below is 12 (for default prompt values). Why? Fix it. The result
should be 3.*/
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

/*
El error radica en que prompt devuelve siempre un String, entonces ese 1 y 2 no son realmente numeros sino "1" y "2" por lo que el
operador + concatena los dos String, el codigo resuelto deberá convertir a entero esas dos cadenas:
*/

let a3 = parseInt(prompt("First number?", 1));
let b3 = parseInt(prompt("Second number?", 2));
alert(a + b); //3 