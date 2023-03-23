import { traducciones } from "./traducciones.js";

export const colores = {
    rojo: '#6a0c1f',
    amarillo: '#f2c546',
    verde: '#065f50',
    azul: '#116596'
  }

export const personajesHTML = (casa, datos, color) => {
  casa.innerHTML += `
  <div class="personajes">
      <div>
        <p style="color: ${color}; font-size: 1.4rem;">${datos.name}</p>
        ${datos.actor == "" ? "" : `<p style="font-size: 0.9rem">(${datos.actor})</p>`} 
        ${datos.yearOfBirth != null ? `<p>Nacimiento: ${datos.yearOfBirth}` : "<p>Nacimiento: ?</p>"}
        <p>Linaje: 
        ${datos.ancestry == "" ? "?" : traducciones.linaje[datos.ancestry]}</p>
        <p>Varita:</p>
        <ul>
          <li>- Madera: ${datos.wand.wood == "" ? "?" 
          : traducciones.varita.madera[datos.wand.wood]}</li>
          <li>- Núcleo: 
          ${datos.wand.core == "" ? "?" : traducciones.varita.núcleo[datos.wand.core]} </li>
          <li>- Longitud: ${datos.wand.length == null ? "?" :
          datos.wand.length + " cm"}</li>
        </ul>
        <p>Patronus: ${datos.patronus == "" ? "?" : traducciones.patronus[datos.patronus]}</p>
      </div>
      ${datos.image == "" ? "" : `<img src="${datos.image}" />`}
      </div>
      `
}