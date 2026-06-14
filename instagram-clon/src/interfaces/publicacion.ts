export interface Publicacion {
  id: number;
  imagen: string;
  nombreUsuario: string;
  descripcion: string;
  cantidadLikes: number;
  comentarios: string[];
  fecha: string;
}