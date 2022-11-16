const entrada_general = 150
const entrada_mayores = 50
const entrada_menores = 80

let cant_general = +prompt("Ingresar cantidad de entradas generales vendidas: ")
let cant_mayores = +prompt("Ingresar cantidad de entradas vendidas para mayores de 65 : ")
let cant_menores = +prompt("Ingresar cantidad de entradas vendidas para menores de edad: ")

let recaudacion = (entrada_general * cant_general) + (entrada_mayores * cant_mayores) + (entrada_menores * cant_menores)

alert(`La recaudacion de entradas generales vendidas es: ${entrada_general * cant_general}`)
alert(`La recaudacion de entradas vendidas para mayores de 65 es: ${entrada_mayores * cant_mayores}`)
alert(`La recaudacion de entradas vendidas para menores de edad es: ${entrada_menores * cant_menores}`)
alert(`La recaudacion total es: ${recaudacion}`)