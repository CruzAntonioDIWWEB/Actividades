//Interacting with user and variables

/*1. Ask the user for his age and save it into a variable. Remember to choose a proper name and
store as a number.*/

let anyos = prompt("dime tu edad: ");
console.log("El usuario tiene " + anyos + " años");


//2. Send the user a message with an advice on how his age is going to be stored.

alert("Vamos a guardar tus datos en una variable para almacenarlos en nuestra base de datos");

//3. Ask the user for confirmation and save confirmation to a variable.

let confirmacion = confirm("Está usted de acuerdo con que almacenemos sus datos??");

//4. Take the former code and add code that, by using a backticks, output his age to the console.

if(confirmacion == true){
    console.log("Se nos ha permitido guardar los datos, el usuario tiene " + anyos + " años de vida");
}else{
    console.log("No se nos ha dado permiso para guardar la edad del usuario");
}

//5. What is the output of the following code?

let name = "pepe";
console.log( `hello ${1}` );
alert( `hello ${"name"}` );
alert( `hello ${name}` );

//Hello name y Hello pepe