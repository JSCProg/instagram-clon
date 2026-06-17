import axios from "axios";
import type { Publicacion } from "../interfaces/publicacion";

const URL_API = "https://api.thecatapi.com/v1/images/search?limit=10";

const comentariosPosibles = [
  "¡Qué lindo gato! 😻",
  "Necesito adoptarlo ❤️",
  "Hermosa foto 📸",
  "Es igual al mío 🐱",
  "Tiene una cara de travieso 😂",
  "No puedo con tanta ternura 🥹",
  "El rey de la casa 👑",
  "Le daría muchos mimos 😸",
  "Está posando para la cámara 😎",
  "Qué elegancia la de Francia 🎩",
  "¡Quiero uno igual!",
  "Demasiado adorable 🥰",
];

const descripcionesPosibles = [
  "Un gatito disfrutando su día 🐱",
  "Modo siesta activado 😴",
  "El verdadero dueño de la casa 👑",
  "Posando para la foto 📸",
  "Esperando su comida favorita 🍗",
  "Demasiado tierno para este mundo 🥹",
  "Hoy toca descansar al sol ☀️",
  "Vigilando todo desde su rincón favorito 👀",
  "Simplemente siendo adorable 😸",
  "Un pequeño explorador en acción 🐾",
  "Listo para una nueva aventura 🌎",
  "Con cara de que no rompió nada... 😇",
];

const nombresUsuariosPosibles = [
  "michi_lovers",
  "gatito_feliz",
  "peluditos_ok",
  "cat_world",
  "miau_miau",
  "don_gatuno",
  "patitas_suaves",
  "gatos_arg",
  "kitty_adventures",
  "michis_2026",
  "ronroneos",
  "catlover_23",
  "bigotes_blancos",
  "minino_real",
  "aventuras_miau",
  "el_rey_gato",
  "purrfect_day",
  "gatolandia",
  "mundo_michi",
  "cafe_con_gatos"
];

function generarComentariosAleatorios(): string[] {
  const copia = [...comentariosPosibles];

  // Mezcla el array
  copia.sort(() => Math.random() - 0.5);

  // Devuelve los primeros 3
  return copia.slice(0, 3);
}

function generarDescripcionAleatoria(): string {
  const indiceAleatorio = Math.floor(
    Math.random() * descripcionesPosibles.length
  );

  return descripcionesPosibles[indiceAleatorio];
}

function generarUsuarioAleatorio(): string {
  const indiceAleatorio = Math.floor(
    Math.random() * nombresUsuariosPosibles.length
  );

  return nombresUsuariosPosibles[indiceAleatorio];
}

export const obtenerGatos = async (): Promise<Publicacion[]> => {
  const respuesta = await axios.get(URL_API);

  return respuesta.data.map((gato: any, indice: number) => ({
    id: indice + 1,
    nombreUsuario: generarUsuarioAleatorio(),
    imagenPerfil: `https://i.pravatar.cc/100?img=${indice + 10}`,
    imagenPublicacion: gato.url,
    descripcion: generarDescripcionAleatoria(),
    cantidadLikes: Math.floor(Math.random() * 10000),
    fecha: "Hace 2 horas",
    comentarios: generarComentariosAleatorios(),
  }));
};