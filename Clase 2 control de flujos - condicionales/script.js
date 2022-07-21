/* let desayuno = "te" // asignandp
if (desayuno == "cafe") {  // si desayuno es igual a... sería como una consulta
    console.log ("desayuno cafe con leche")
} 
else {
    console.log("No desayuno cafe con leche")
}

console.log(desayuno) 

let numero = parseInt(prompt("Ingrese un numero"))

console.log(numero)

if (isNaN(numero)) {
    console.log("numero no valido")
}

else {
    if (numero % 2 == 0) {
        console.log("numero es par")
        }
        else {
            console.log("numero es impar")
        }
}
*/
    
let desayuno = prompt ("ingrese su desayuno").toLowerCase()
if (desayuno == "cafe") { 
    console.log ("desayuno cafe con leche")
} 
else if (desayuno == "te") {
    console.log("desayuno te con leche")
}
else if (desayuno == "chocolatada") {
    console.log ("desayuno con chocolatada")
}
else {
    console.log("desayuno mate")
}

