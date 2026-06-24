import axios from "axios";
import type { Publicacion } from "../interfaces/publicacion";

// url de laa api que usamos para las imagenes aleatorias de gatos
const URL_API =
  "https://api.thecatapi.com/v1/images/search?limit=10";

// lista de comentarios posibles para las publicaciones
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

// lista de descripciones posibles
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

// lista de nnombres de usuarios simulados
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

// genera 3 comentarios aleatorios para cada publicacion
function generarComentariosAleatorios(): string[] {
  const copia = [...comentariosPosibles];

  // mezcla el array aleatoriamente
  copia.sort(() => Math.random() - 0.5);

  // Devuelve los primeros tres comentarios
  return copia.slice(0, 3);
}

// devuelve una descripcion aleatoria
function generarDescripcionAleatoria(): string {
  const indiceAleatorio = Math.floor(
    Math.random() * descripcionesPosibles.length
  );

  return descripcionesPosibles[indiceAleatorio];
}

// devuelve un nombre de usuario aleatorio
function generarUsuarioAleatorio(): string {
  const indiceAleatorio = Math.floor(
    Math.random() * nombresUsuariosPosibles.length
  );

  return nombresUsuariosPosibles[indiceAleatorio];
}

// funcion principal que obtiene las imagenes desde la api
// y transforma los datos para adaptarlos al modelo publicacion
export const obtenerGatos = async (): Promise<Publicacion[]> => {

  // Realiza la petición HTTP a la API
  const respuesta = await axios.get(URL_API);

  // Recorre cada imagen obtenida y crea un objeto Publicacion
  return respuesta.data.map(
    (gato: any, indice: number) => ({

      
      id: indice + 1,

      // nombre de usuario generado aleatoriamente
      nombreUsuario: generarUsuarioAleatorio(),

      imagenPerfil: `https://i.pravatar.cc/100?img=${indice + 10}`,

      // imagen obtenida desde la API de gatos
      imagenPublicacion: gato.url,

      // descripción aleatoria
      descripcion: generarDescripcionAleatoria(),

      // cantidad de likes aleatoria
      cantidadLikes: Math.floor(
        Math.random() * 10000
      ),

      // fecha simulada
      fecha: "Hace 2 horas",

      // comentarios aleatorios
      comentarios: generarComentariosAleatorios(),
    })
  );
};