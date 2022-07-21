console.log(1)
console.log(2)
console.log(3)

console.log(1000)

/* INICIO FIN ACTUALIZACIÓN */

for (let i = 1; i <= 1000; i++) {
    console.log(i)

}


do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion matematica (+,-,*,/)")
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa numeros validos")
    }
    if (operacion == "/" && numero2 === 0) {
        alert("No se puede dividir entre cero")
    }
} while ((isNaN(numero1) || isNaN(numero2)) || (operacion == "/" && numero2
        === 0)) //Repetir si es TRUE
switch (operacion) {
    case "+": alert(`El resultado es ${numero1 + numero2}`)
        break
    case "-": alert(`El resultado es ${numero1 - numero2}`)
        break
    case "/": alert(`El resultado es ${numero1 / numero2}`)
        break
    case "*": alert(`El resultado es ${numero1 * numero2}`)
        break
    default: alert("Operacion no valida")
}