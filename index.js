import { personajesHTML } from './personajes.js';
import { colores } from './personajes.js';

let title = document.getElementById("title");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  title.style.marginTop = value * 2 + "px";
  title.style.opacity = 1 - value / 300;
});


let flechaArribaBtn = document.getElementById("flecha-arriba");
document.getElementById("flecha-arriba").style.display = "none";
flechaArribaBtn.addEventListener("click", () => {
window.scrollTo(0, 700);
});

window.onscroll = () => {
  if(window.scrollY > 1000) {
    document.getElementById("flecha-arriba").style.display = "block";
  } else {
    document.getElementById("flecha-arriba").style.display = "none";
  }
}

window.addEventListener("click", () => {
  document.getElementById("sombrero-seleccionador").style.display = "none";
  document.getElementById("enlace1").style.position = "inherit";
  document.getElementById("enlace2").style.position = "inherit";
  document.getElementById("enlace3").style.position = "inherit";
  document.getElementById("enlace4").style.position = "inherit";
  document.getElementById("gryffindor").style.display = "block";
  document.getElementById("hufflepuff").style.display = "block";
  document.getElementById("ravenclaw").style.display = "block";
  document.getElementById("slytherin").style.display = "block";
  document.getElementById("bienvenida").innerText = "Escoge tu casa de Hogwarts"
});

//GRB
let casaGryffindor = document.getElementById("info-gryffindor");
let casaHufflepuff = document.getElementById("info-hufflepuff");
let casaRavenclaw = document.getElementById("info-ravenclaw");
let casaSlytherin = document.getElementById("info-slytherin");

let imgGryffindor = document.getElementById("gryffindor");
let imgHufflepuff = document.getElementById("hufflepuff");
let imgRavenclaw = document.getElementById("ravenclaw");
let imgSlytherin = document.getElementById("slytherin");

const casas = [casaGryffindor, casaHufflepuff, casaRavenclaw, casaSlytherin];
const imgCasas = [imgGryffindor, imgHufflepuff, imgRavenclaw, imgSlytherin];
const hideOtherHouses = (event) => {
  
  casas.forEach(casa => {
    if(casa.getAttribute("house") !== event.target.id)
      casa.style.display = 'none';
    else
      casa.style.display = 'block';
  });
}

imgCasas.forEach(imgCasa => {
  imgCasa.addEventListener("click", hideOtherHouses);

})

const respuesta = await fetch("https://hp-api.onrender.com/api/characters");
const datos = await respuesta.json();
const getPersonajes = async () => {
  for (let i = 0; i < datos.length; i++) {
    if(datos[i].house === "Ravenclaw") {
      personajesHTML(casaRavenclaw, datos[i], colores.azul);
    } else if(datos[i].house === "Gryffindor") {
      personajesHTML(casaGryffindor, datos[i], colores.rojo);
    } else if(datos[i].house === "Hufflepuff") {
      personajesHTML(casaHufflepuff, datos[i], colores.amarillo);
    } else if(datos[i].house === "Slytherin") {
      personajesHTML(casaSlytherin, datos[i], colores.verde);
    }
  };
};
getPersonajes();