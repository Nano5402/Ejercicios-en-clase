const numeroPar = []

let numero = 0 

// while (numero < 0 ) {
//   if (numero % 2 === 0) {
//     numeroPar.push(numero)
//     numero++
//   }
// }

// console.log(numero);

// for (
//   let i = 1;
//   i <= 100;
//   i++
// ) {
//   if (i % 2 === 0) {
//     numeroPar.push(i)
//   }
//   if (numeroPar.length == 10) {
//     break
//   }
// }

// console.log(numeroPar);

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let semana = ""

semana = "<ul>"
for (let i = 0; i < dias.length; i++){
  semana += "<li>" + dias[i] + "</li>"
  // console.log(dias[i]);
}

semana += "</ul>"

console.log(semana);

// console.log(`<li>${dias[i]}</li>`);


