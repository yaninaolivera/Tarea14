let cant_varones = +prompt("Ingrese la cantidad de varones: ")
let cant_mujeres = +prompt("Ingrese la cantidad de mujeres: ")

let total = cant_varones + cant_mujeres
let porc_varones = cant_varones * 100 / total
let porc_mujeres = cant_mujeres * 100 / total

alert(`El porcentaje de varones es: ${porc_varones} %`)
alert(`El porcentaje de mujeres es: ${porc_mujeres} %`)