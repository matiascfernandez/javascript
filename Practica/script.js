
let nota = parseInt(prompt("Ingrese cantidad de huespedes"))
for (i = 0; i < nota; i++) {
    edad = parseInt(prompt("Ingrese edad de los huespedes"))

    if (edad >= 0 && edad <= 3)
        alert("bebe")
    else if (edad > 3 && edad <= 11)
        alert("niño")
    else if (edad > 11 && edad <= 18)
        alert("adolescente")
    else if (edad > 18 && edad <= 25)
        alert("joven")
    else if (edad > 25 && edad <= 60)
        alert("adulto")
    else if (edad > 60)
        alert("adulto mayor")

}

