export interface Publicacion {
  id: number;
  nombreUsuario: string;
  imagenPerfil: string;
  imagenPublicacion: string;
  descripcion: string;
  cantidadLikes: number;
  fecha: string;
  comentarios: string[];
}