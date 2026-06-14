import type { Publicacion } from "../../interfaces/publicacion";
interface PropsPublicacion {
  publicacion: Publicacion;
  alSeleccionarPublicacion: (publicacion: Publicacion) => void;
}