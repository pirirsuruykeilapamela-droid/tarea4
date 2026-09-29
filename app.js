//1
/*
let nombre = prompt("ingrese su nombre");
let experiencia = 0;
let misiones = 0;
let continuar = "si"
let nivel;

while(continuar === "si"){
    let puntos = Number(prompt("ingrse la cantidad de puntos obtenidos en la mision"));

    experiencia = experiencia + puntos;

    misiones++;
    
    continuar = prompt("¿desea registrar otra mision?");
}

if(experiencia < 500){
    nivel = "novato";
}else if(experiencia < 1000){
    nivel = "avanzado";
}else if(experiencia < 2000){
    nivel = "experto";
}else{
    nivel = "leyenda";
}

alert("nombre del jugador: " + nombre);
alert("misiones completadas: " + misiones);
alert("experiencia acumulado: " + experiencia);
alert("nivel alcanzado: " + nivel);
*/

// 2 ------------------------
 
let equipo1 = prompt("nombre del primer equipo");
let goles1 =Number(prompt("cantidad de goles del primer equipo"));
let equipo2 = prompt("nombre del segundo equipo");
let goles2 =Number(prompt("cantidad de goles del segundo equipo"));

let resultado;
let puntos1;
let puntos2;
let diferencia;

if(goles1 > goles2){
    resultado = "gano " + equipo1;
    diferencia = goles1 - goles2;
    puntos1 = 3;
    puntos2 = 0;
}else if(goles2 > goles1){
    resultado = "gano " + equipo2;
    diferencia = goles2 - goles1;
    puntos1 = 0;
    puntos2 = 3;
}else{
    resultado = "empate";
    diferencia = 0;
    puntos1 = 1;
    puntos2 = 1;
}

alert(`equipo 1: ` + equipo1);
alert(`goles equipo 1: `  + goles1);
alert(`equipo 2: ` + equipo2);
alert(`goles equipo 2: ` + goles2);
alert(`resultado: ` + resultado);
alert(`diferencia: ` + diferencia);
alert(`puntos equipo 1: ` + puntos1);
alert(`puntos equipo 2: ` + puntos2);