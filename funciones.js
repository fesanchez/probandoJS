let nombre = document.getElementById("nombre")
let edad = document.getElementById("edad")
let situacion = document.getElementById("situacion")
let nombre_ingresado = prompt("Ingrese su nombre")
let a_actual = parseInt(prompt("Ingrese el año actual"))
let a_nacimiento = parseInt(prompt("Ingrese año nacimiento"))
let edad_calculada = a_actual - a_nacimiento
nombre.innerHTML = "NOMBRE: " + nombre_ingresado
edad.innerHTML = "EDAD: " + edad_calculada
//0 - 4 ES UN INFANTE
//5 - 11 ES UN NIÑO
//12 - 17 ES UN ADOLESCENTE
//18 - 70 ES UN ADULTO
// MAYOR A 70 ES UN ADULTO MAYOR
if (edad_calculada >= 0 && edad_calculada <= 4){
    situacion.innerHTML = "SITUACION: Es un infante"
} else if (edad_calculada >= 5 && edad_calculada <= 11) {
    situacion.innerHTML = "SITUACION: Es un niño/a"
} else if (edad_calculada >= 12 && edad_calculada <= 17){
    situacion.innerHTML = "SITUACION: Es un adolescente"
} else if (edad_calculada >= 18 && edad_calculada <= 70){
    situacion.innerHTML = "SITUACION: Es un adulto"
} else  {
    situacion.innerHTML = "SITUACION: Es un adulto mayor"
}