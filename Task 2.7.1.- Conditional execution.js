//1. Check if a number is odd or even
let numero = prompt("Voy a comprobar si el numero que introduzcas es par o impar");

if(numero%2 == 0){
  console.log(numero + " es par");
}else{
  console.log(numero +" es impar");
}

//2. Check if input variable is a number or not
let variable = prompt("Voy a comprobar que tipo de variable estas introduciendo");

if(parseInt(variable)){ //si la conversión de lo que ha introducido el usuario a numero entero es true, lo que se ha introducido es un numero
    console.log("lo que has introducido es un numero");
}else{
    console.log("lo que has introducido es un Stirng");
}

//3. Find the largest of two number
let numero1 = Number(prompt("introduzca el primer numero"));
let numero2 = Number(prompt("introduzca el segundo numero"));

if(numero1 > numero2){
  console.log("El numero " + numero1 + " es mayor que el numero " + numero2);
}else{
  console.log("El numero " + numero2 + " es mayor que el numero " + numero1);
}

//4. Find the largest of three number
let number1 = Number(prompt("Introduce el primer número"));  
let number2 = Number(prompt("Introduce el segundo número")); 
let number3 = Number(prompt("Introduce el tercer número"));  
let mayor;

if (number1 >= number2 && number1 >= number3) {
  mayor = number1;
} else if (number2 >= number1 && number2 >= number3) {
  mayor = number2;
} else {
  mayor = number3;
}

console.log("El número " + mayor + " es el mayor");

//5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2 sides are equals)
let lado1 = Number(prompt("Introduce el primer lado del triangulo"));
let lado2 = Number(prompt("Introduce el segundo lado del triangulo"));
let lado3 = Number(prompt("Introduce el tercer lado del triangulo"));

if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    console.log("el triangulo es equilatero");
}else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("El triángulo es escaleno");
}else{
    console.log("El triángulo es isosceles");
}

//6. Find the a number is present in given range (provide start, end and number to be found)
//7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4 and not by 100
let anyoComprobar = prompt("Introduzca un año para averiguar si es bisiesto o no");

if((anyoComprobar % 400 === 0) || (anyoComprobar % 4 === 0 && anyoComprobar % 100 !== 0)){
    console.log("El año es bisiesto");
}else{
    console.log("El año no es bisiesto");
}

//8. Rewrite the former if by using the ternary operator
let anyo = prompt("Introduzca un año para averiguar si es bisiesto o no");
let cadena = false;
((anyo % 400 === 0) || (anyo % 4 === 0 && anyo % 100 !== 0)) && console.log("Es bisiesto");

//9. Show the number of days in a given month
let mes = prompt("Introduzca el numero del mes del que quiera saber los días: ");

switch(Number (mes)){
  case 1:
    console.log("Enero tiene 31 dias");
       break;
  case 2:
    let anyoComprobar = prompt("En que año estamos");
    if((anyoComprobar % 400 === 0) || (anyoComprobar % 4 === 0 && anyoComprobar % 100 !== 0)){
    console.log("El año es bisiesto y Febrero tiene 29 dias");
  }else{
    console.log("El año no es bisiesto y Febrero tiene 28 dias");
  }
      break;
  case 3:
    console.log("Marzo tiene 31 dias");
       break;
  case 4:
    console.log("Abril tiene 30 dias");
       break;
case 5:
    console.log("Mayo tiene 31 dias");
       break;
case 6:
    console.log("Junio tiene 30 dias");
       break;
case 7:
    console.log("Julio tiene 31 dias");
       break;
case 8:
    console.log("Agosto tiene 31 dias");
       break;
case 9:
    console.log("Septiembre tiene 30 dias");
       break;
case 10:
    console.log("Octubre tiene 31 dias");
       break;
case 11:
    console.log("Noviembre tiene 30 dias");
       break;
case 12:
    console.log("Diciembre tiene 31 dias");
       break;
    default:
      console.log("Numero no valido");
}

//10. Rewrite the former if by using a switch statement
//11. Rewrite the former if by using && and || operators
//12. Will alert be shown?
if ("0") {  //Si, este if evalúa si la sentencia "0" es null o undefined o vacío, pero como 0 es una cadena no vacía, se muestra la alerta.
    alert( 'Hello' );
   }
//13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following code by using a switch statement
let a = +prompt('a?', '');
if (a == 0) {
 alert( 0 );
}
if (a == 1) {
 alert( 1 );
}
if (a == 2 || a == 3) {
 alert( '2,3' );
}

//Codigo optimizado sin Switch
let b = +prompt('b?', '');
(b == 0) && alert(0);
(b == 1) && alert(1);
(b == 2 || a == 3) && alert(2);

//Codigo optimizado con Switch
let c = +prompt('c?', '');

switch(Number (c)){
  case 1:
    alert(0);
    break;
  case 2:
    alert(1);
    break;
  case 3:
    alert(2);
    break;
  default:
    alert("POR FAVOR ELIJA ENTRE LOS NUMEROS 1, 2 Y 3");
}
