let title = document.getElementById("title");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  title.style.marginTop = value * 2 + "px";
  title.style.opacity = 1 - value / 300;
});


let flechaArribaBtn = document.getElementById("flecha-arriba");
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

let sombrero = document.getElementById("sombrero-seleccionador");

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
        ${datos[i].ancestry == "" ? "?" : 
        datos[i].ancestry == "pure-blood" ? "puro" : 
        datos[i].ancestry == "half-blood" ? "mestizo" : 
        "muggle"}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : datos[i].wand.wood == "holly" ? "acebo" : 
          datos[i].wand.wood == "vine" ? "viña" : 
          datos[i].wand.wood == "willow"? "sauce" :
          datos[i].wand.wood == "fir" ? "abeto" : 
          datos[i].wand.wood == "oak" ? "roble" : 
          datos[i].wand.wood == "cherry" ? "cerezo" : 
          datos[i].wand.wood == "yew" ? "tejo" : 
          datos[i].wand.wood == "cypress" ? "ciprés" : 
          datos[i].wand.wood == "mahogany" ? "caoba" : 
          datos[i].wand.wood == "larch" ? "alerce" : datos[i].wand.wood}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : 
          datos[i].wand.core == "unicorn tail-hair" ? "pelo de cola de unicornio" :
          datos[i].wand.core == "dragon heartstring" ? "corazón de dragón" :
          datos[i].wand.core == "phoenix feather" ? "pluma de fénix" :
          datos[i].wand.core == "unicorn hair" ? "pelo de unicornio" :
          datos[i].wand.core} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : 
        datos[i].patronus == "swan" ? "cisne" : 
        datos[i].patronus == "hare" ? "liebre" : datos[i].patronus}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}

      </div>
      `
    }
  };

  for (let i = 0; i < datos.length; i++) {
    if(datos[i].house == "Gryffindor") {
      casaGryffindor.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: rgb(141, 10, 10); font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : 
        datos[i].ancestry == "pure-blood" ? "puro" : 
        datos[i].ancestry == "half-blood" ? "mestizo" : 
        "muggle"}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : datos[i].wand.wood == "holly" ? "acebo" : 
          datos[i].wand.wood == "vine" ? "viña" : 
          datos[i].wand.wood == "willow"? "sauce" :
          datos[i].wand.wood == "fir" ? "abeto" : 
          datos[i].wand.wood == "oak" ? "roble" : 
          datos[i].wand.wood == "cherry" ? "cerezo" : 
          datos[i].wand.wood == "yew" ? "tejo" : 
          datos[i].wand.wood == "cypress" ? "ciprés" : 
          datos[i].wand.wood == "mahogany" ? "caoba" : 
          datos[i].wand.wood == "larch" ? "alerce" : datos[i].wand.wood}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : 
          datos[i].wand.core == "unicorn tail-hair" ? "pelo de cola de unicornio" :
          datos[i].wand.core == "dragon heartstring" ? "corazón de dragón" :
          datos[i].wand.core == "phoenix feather" ? "pluma de fénix" :
          datos[i].wand.core == "unicorn hair" ? "pelo de unicornio" :
          datos[i].wand.core} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : 
        datos[i].patronus == "swan" ? "cisne" : 
        datos[i].patronus == "hare" ? "liebre" : 
        datos[i].patronus == "stag" ? "ciervo" : 
        datos[i].patronus == "otter" ? "nutria" : 
        datos[i].patronus == "tabby cat" ? "gato atigrado" : 
        datos[i].patronus == "Non-Corporeal" ? "no corpóreo" : 
        datos[i].patronus == "horse" ? "caballo" : 
        datos[i].patronus == "wolf" ? "lobo" : 
        datos[i].patronus == "weasel" ? "comadreja" : 
        datos[i].patronus == "goat" ? "cabra" : datos[i].patronus}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    }
  };

  for (let i = 0; i < datos.length; i++) {
    if(datos[i].house == "Hufflepuff") {
      casaHufflepuff.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: #ecb939; font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : 
        datos[i].ancestry == "pure-blood" ? "puro" : 
        datos[i].ancestry == "half-blood" ? "mestizo" : 
        "muggle"}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos[i].wand.wood == "" ? "?" 
          : datos[i].wand.wood == "holly" ? "acebo" : 
          datos[i].wand.wood == "vine" ? "viña" : 
          datos[i].wand.wood == "willow"? "sauce" :
          datos[i].wand.wood == "fir" ? "abeto" : 
          datos[i].wand.wood == "oak" ? "roble" : 
          datos[i].wand.wood == "cherry" ? "cerezo" : 
          datos[i].wand.wood == "yew" ? "tejo" : 
          datos[i].wand.wood == "cypress" ? "ciprés" : 
          datos[i].wand.wood == "mahogany" ? "caoba" : 
          datos[i].wand.wood == "larch" ? "alerce" : 
          datos[i].wand.wood == "ash" ? "fresno" : datos[i].wand.wood}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : 
          datos[i].wand.core == "unicorn tail-hair" ? "pelo de cola de unicornio" :
          datos[i].wand.core == "dragon heartstring" ? "corazón de dragón" :
          datos[i].wand.core == "phoenix feather" ? "pluma de fénix" :
          datos[i].wand.core == "unicorn hair" ? "pelo de unicornio" :
          datos[i].wand.core} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : 
        datos[i].patronus == "boar" ? "jabalí" : datos[i].patronus}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    }
  };

  for (let i = 0; i < datos.length; i++) {
    if(datos[i].house == "Slytherin") {
      casaSlytherin.innerHTML += `
      <div class="personajes">
      <div>
        <p style="color: #1a472a; font-size: 1.2rem">${datos[i].name}</p>
        ${datos[i].actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos[i].actor})</p>`} 
        ${datos[i].yearOfBirth != null ? `<p>Nacimiento: ${datos[i].yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos[i].ancestry == "" ? "?" : 
        datos[i].ancestry == "pure-blood" ? "puro" : 
        datos[i].ancestry == "half-blood" ? "mestizo" : 
        "muggle"}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: 
            ${datos[i].wand.wood == "" ? "?" :
            datos[i].wand.wood == "holly" ? "acebo" : 
            datos[i].wand.wood == "vine" ? "viña" : 
            datos[i].wand.wood == "willow"? "sauce" :
            datos[i].wand.wood == "fir" ? "abeto" : 
            datos[i].wand.wood == "oak" ? "roble" : 
            datos[i].wand.wood == "cherry" ? "cerezo" : 
            datos[i].wand.wood == "yew" ? "tejo" : 
            datos[i].wand.wood == "cypress" ? "ciprés" : 
            datos[i].wand.wood == "mahogany" ? "caoba" : 
            datos[i].wand.wood == "larch" ? "alerce" : 
            datos[i].wand.wood == "hawthorn" ? "espino" : 
            datos[i].wand.wood == "walnut" ? "nogal" : 
            datos[i].wand.wood == "cedar" ? "cedro" : 
            datos[i].wand.wood == "birch" ? "abedul" : 
            datos[i].wand.wood == "elm" ? "olmo" : datos[i].wand.wood}</li>
          <li>- Núcleo: 
          ${datos[i].wand.core == "" ? "?" : 
          datos[i].wand.core == "unicorn tail-hair" ? "pelo de cola de unicornio" :
          datos[i].wand.core == "dragon heartstring" ? "corazón de dragón" :
          datos[i].wand.core == "phoenix feather" ? "pluma de fénix" :
          datos[i].wand.core == "unicorn hair" ? "pelo de unicornio" :
          datos[i].wand.core} </li>
          <li>- Longitud: ${datos[i].wand.length == null ? "?" :
          datos[i].wand.length + " cm"}</li>
        </ul>
        <p>Patronus: 
        ${datos[i].patronus == "" ? "?" : 
        datos[i].patronus == "doe" ? "cierva" :
        datos[i].patronus == "persian cat" ? "gato persa" : datos[i].patronus}</p>
      </div>
      ${datos[i].image == "" ? "" : `<img src="${datos[i].image}" />`}
      </div>
      `
    }
  };
};
getPersonajes();