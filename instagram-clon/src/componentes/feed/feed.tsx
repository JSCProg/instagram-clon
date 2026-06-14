import type { Publicacion } from "../../interfaces/publicacion";
interface PropsFeed {
  publicaciones: Publicacion[];
  alSeleccionarPublicacion: (publicacion: Publicacion) => void;
}