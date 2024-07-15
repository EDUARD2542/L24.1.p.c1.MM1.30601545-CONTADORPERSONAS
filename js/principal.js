/*1. CONTADOR DE PERSONAS
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
*datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
*Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
*Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
*Cantidad de personas: 10
*Cantidad de hombres: 6
*Cantidad de mujeres: 4*/

import Cl_persona from "./contador.js";
import Cl_contarpersonas from "./contarpersonas.js";

let personas1 = new Cl_persona("Luis", "M");
let personas2 = new Cl_persona("Ana", "F");  
let personas3 = new Cl_persona("Jose", "M");
let personas4 = new Cl_persona("Carmen", "F");
let personas5 = new Cl_persona("Rosa", "F");
let personas6 = new Cl_persona("Jose", "M");
let personas7 = new Cl_persona("Maria", "F");
let personas8 = new Cl_persona("Luz", "F");
let personas9 = new Cl_persona("Rafael", "M");
let personas10 = new Cl_persona("Liz", "F");
let personas11 = new Cl_persona("Carlos", "M");
let personas12 = new Cl_persona("Leo", "M");

let persona = new Cl_contarpersonas();

persona.procesarPersonas(personas1);
persona.procesarPersonas(personas2);   
persona.procesarPersonas(personas3);
persona.procesarPersonas(personas4);
persona.procesarPersonas(personas5);
persona.procesarPersonas(personas6);
persona.procesarPersonas(personas7);
persona.procesarPersonas(personas8);
persona.procesarPersonas(personas9);
persona.procesarPersonas(personas10);
persona.procesarPersonas(personas11);
persona.procesarPersonas(personas12);


let salida = document.getElementById("salida");
salida.innerHTML = "RESULTADOS";
salida.innerHTML +="<br> La cantidad de personas es: " + persona.devolverContador();
salida.innerHTML += "<br> La cantidad de hombres es: " + persona.devolverContarHombres();
salida.innerHTML += "<br> La cantidad de mujeres es: " + persona.devolverContarMujeres();

