do{ 
  var numeroEntero = Math.floor(Math.random() * 10) + 1;

var numeropl = parseInt(prompt("Ingrese un número entre 3 y 6:"));

if ((numeropl < 3) || (numeropl > 6)) {
  alert("Ingrese un número en el rango solicitado.");
} else {
  let respuesta = prompt("Ingrese 'Mayor' si piensa que su número es mayor o 'Menor' si cree que es menor: ");
  let respuesta2 = respuesta.toLowerCase();

  if ((respuesta2 === "mayor" && numeropl > numeroEntero) || (respuesta2 === "menor" && numeropl < numeroEntero)) {
    alert("¡Usted acertó! \nEl número de la computadora fue: " + numeroEntero+" \nEl número que usted ingresó fue: "+numeropl);
  } else {
    alert("Lo siento, no acertó. \nEl número de la computadora fue: "+ numeroEntero+"\nSu numero fue "+ numeropl);
  }
}
var nextt = prompt("Desesa continuar con el programa(si/no)").toLowerCase();
  

}while (nextt !== "no");


alert("Allan Amilcar Felipe Miranda, Carnet 25008249");