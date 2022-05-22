/*Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
41
Ingrese el número: 9
Ingrese hasta qué número: 4
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36*/

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Numero que desea multiplicar en la tabla";
rotulo2.innerHTML = "Multiplicar hasta";

btnEnviar.addEventListener("click", () => {
  let nro: number = Number(dato1.value);
  let limite: number = Number(dato2.value);
  let resultado: number;
  let contador: number = 1;
  while (contador <= limite) {
    resultado = nro * contador;
    console.log(nro + "x" + contador + "=" + resultado);
    contador = contador + 1;
  }
});
