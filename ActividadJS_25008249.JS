var mes = prompt("Ingrese el numero de su mes de nacimiento :");
var dia = prompt("Ingrese su dia de nacimiento:");

if (( mes == "01"&& dia <= 19 ) || (mes == "12" && dia >21 )) {
  alert("Usted es Capricornio");

}
else if ((mes == "01" && dia >19 )|| (mes == "02"&& dia <= 19 )) {
    alert("Usted es Acuario"); }
     else if ((mes == "02" && dia >19 ) ||(mes== "03" && dia<=20 ))  {
    alert("Usted es Piscis"); }
    
else if ((mes == "04" && dia >20) || (mes == "04"&& dia <= 19 )) {
    alert("Usted es Aries"); }

else if ((mes == "04" && dia >19 ) || (mes == "05"&& dia <= 20 )) {
    alert("Usted es tauro"); }

else if ((mes == "05" && dia >20 ) || (mes == "06"&& dia <= 20 )) {
    alert("Usted es Geminis"); }

else if ((mes == "06" && dia >20) || (mes == "07"&& dia <= 22 )) {
    alert("Usted es Cancer"); }

else if ((mes == "07" && dia >22 ) || (mes == "08"&& dia <= 23 )) {
    alert("Usted es leo"); }

else if ((mes == "08" && dia >23 )|| (mes == "09"&& dia <= 22 )) {
    alert("Usted es Virgo"); }

else if ((mes == "09" && dia >22 )  ||(mes == "10"&& dia <= 22 )) {
    alert("Usted es Libra"); }

else if ((mes == "10" && dia >22 ) ||(mes == "11"&& dia <= 22 )) {
    alert("Usted es Escorpio"); }

else if ((mes == "11" && dia >22 ) || (mes == "12"&& dia <= 21 )) {
    alert("Usted es Sagitario"); }

else {
  Alert("ingrese una fecha valida")
}