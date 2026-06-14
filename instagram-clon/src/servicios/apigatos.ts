import axios from "axios";
import type { Publicacion } from "../interfaces/publicacion";

const URL_API = "https://api.thecatapi.com/v1/images/search?limit=10";

export const obtenerGatos = async (): Promise<Publicacion[]> => {
  const respuesta = await axios.get(URL_API);

  return respuesta.data.map((gato: any, indice: number) => ({
    id: indice,
    imagen: gato.url,
    nombreUsuario: `amante_gatos_${indice + 1}`,
    descripcion: "Un gatito disfrutando su día 🐱",
    cantidadLikes: Math.floor(Math.random() * 1000),
    comentarios: [
      "¡Qué lindo gato!",
      "Necesito adoptarlo.",
      "Hermosa foto ❤️"
    ],
    fecha: "Hace 2 horas"
  }));
};