import {traducciones} from './traducciones.js';

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

function agrandarImg() {
  document.getElementById("sombrero-seleccionador").style.filter = "grayscale(100%)";
  document.getElementById("sombrero-seleccionador").style.transition = "0.5s ease";
};

function volverNormal() {
  document.getElementById("sombrero-seleccionador").style.filter = "grayscale(0%)";
  document.getElementById("sombrero-seleccionador").style.transition = "0.5s ease";
};

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

let casaGryffindor = document.getElementById("info-gryffindor");
let imgGryffindor = document.getElementById("gryffindor");
imgGryffindor.addEventListener("click", () => {
  if(casaHufflepuff.style.display == "block") {
    casaHufflepuff.style.display = "none";
  } else if (casaRavenclaw.style.display == "block") {
    casaRavenclaw.style.display = "none";
  } else if (casaSlytherin.style.display == "block") {
    casaSlytherin.style.display = "none";
  }
  casaGryffindor.style.display = "block";
});

let casaHufflepuff = document.getElementById("info-hufflepuff");
let imgHufflepuff = document.getElementById("hufflepuff");
imgHufflepuff.addEventListener("click", () => {
  if(casaGryffindor.style.display == "block") {
    casaGryffindor.style.display = "none";
  } else if (casaRavenclaw.style.display == "block") {
    casaRavenclaw.style.display = "none";
  } else if (casaSlytherin.style.display == "block") {
    casaSlytherin.style.display = "none";
  }
  casaHufflepuff.style.display = "block";
});

let casaRavenclaw = document.getElementById("info-ravenclaw");
let imgRavenclaw = document.getElementById("ravenclaw");
imgRavenclaw.addEventListener("click", () => {
  if(casaGryffindor.style.display == "block") {
    casaGryffindor.style.display = "none";
  } else if (casaHufflepuff.style.display == "block") {
    casaHufflepuff.style.display = "none";
  } else if (casaSlytherin.style.display == "block") {
    casaSlytherin.style.display = "none";
  }
  casaRavenclaw.style.display = "block";
});

let casaSlytherin = document.getElementById("info-slytherin");
let imgSlytherin = document.getElementById("slytherin");
imgSlytherin.addEventListener("click", () => {
  if(casaGryffindor.style.display == "block") {
    casaGryffindor.style.display = "none";
  } else if (casaHufflepuff.style.display == "block") {
    casaHufflepuff.style.display = "none";
  } else if (casaRavenclaw.style.display == "block") {
    casaRavenclaw.style.display = "none";
  }
  casaSlytherin.style.display = "block";
});

const getPersonajes = async () => {
  const respuesta = await fetch("https://hp-api.onrender.com/api/characters");
  const datos = await respuesta.json();
  for (let i = 0; i < datos.length; i++) {
    if(datos[i].house == "Ravenclaw") {
      casaRavenclaw.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: #222f5b; font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : traducciones.linaje[datos[i].ancestry]}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : traducciones.varita.madera[datos[i].wand.wood]}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : traducciones.varita.núcleo[datos[i].wand.core]} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : traducciones.patronus[datos[i].patronus]}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}

      </div>
      `
    } else if(datos[i].house == "Gryffindor") {
      casaGryffindor.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: rgb(141, 10, 10); font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : traducciones.linaje[datos[i].ancestry]}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : traducciones.varita.madera[datos[i].wand.wood]}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : traducciones.varita.núcleo[datos[i].wand.core]} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : traducciones.patronus[datos[i].patronus]}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    } else if(datos[i].house == "Hufflepuff") {
      casaHufflepuff.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: #ecb939; font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : traducciones.linaje[datos[i].ancestry]}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : traducciones.varita.madera[datos[i].wand.wood]}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : traducciones.varita.núcleo[datos[i].wand.core]} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : traducciones.patronus[datos[i].patronus]}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    } else if(datos[i].house == "Slytherin") {
      casaSlytherin.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: #1a472a; font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : traducciones.linaje[datos[i].ancestry]}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: 
            ${datos[i].wand.wood == "" ? "?" 
            : traducciones.varita.madera[datos[i].wand.wood]}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : traducciones.varita.núcleo[datos[i].wand.core]} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : traducciones.patronus[datos[i].patronus]}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    }
  };
};

getPersonajes();