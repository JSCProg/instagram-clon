import { useState } from "react";
import "./publicacion.css";

import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

interface PropsPublicacion {
  nombreUsuario: string;
  imagenPerfil: string;
  imagenPublicacion: string;
  descripcion: string;
  cantidadLikes: number;
  fecha: string;
  alSeleccionar: () => void;
}

function Publicacion({
  nombreUsuario,
  imagenPerfil,
  imagenPublicacion,
  descripcion,
  cantidadLikes,
  fecha,
  alSeleccionar,
}: PropsPublicacion) {
const [tieneLike, setTieneLike] = useState(false);
const [likesActuales, setLikesActuales] = useState(cantidadLikes);
const manejarLike = (
  evento: React.MouseEvent<HTMLButtonElement>
) => {
  // Evita que se abra la publicacion al hacer click en el corazón, esto lo hicimos con ia
  evento.stopPropagation();
  if (tieneLike) {
    setLikesActuales(likesActuales - 1);
  } else {
    setLikesActuales(likesActuales + 1);
  }

  setTieneLike(!tieneLike);
};

  return (
    <article
    className="publicacion"
  onClick={alSeleccionar}>
      <div className="cabecera-publicacion">
        <div className="informacion-usuario">
          <div className="circulo-perfil">
            <img
              src={imagenPerfil}
              alt={`Foto de perfil de ${nombreUsuario}`}
            />
          </div>

          <span className="nombre-usuario">
            {nombreUsuario}
          </span>
        </div>

        <button className="boton-opciones">
          <BsThreeDots />
        </button>
      </div>

      {/* esta es la imagen principal */}
      <div className="contenedor-imagen">
        <img
          src={imagenPublicacion}
          alt="Publicación"
          className="imagen-publicacion"
        />
      </div>

      {/* Botones de interacción */}
      <div className="acciones-publicacion">
        <div className="acciones-izquierda">
          <button
  className={`boton-like ${
    tieneLike ? "like-activo" : ""
  }`}
  onClick={manejarLike}
>
  <FaRegHeart />
</button>

          <button>
            <FaRegComment />
          </button>

          <button>
            <FiSend />
          </button>
        </div>

        <button>
          <FaRegBookmark />
        </button>
      </div>

      {/* Información */}
      <div className="contenido-publicacion">
        <p className="cantidad-likes">
         {likesActuales.toLocaleString()} Me gusta
        </p>

        <p className="descripcion-publicacion">
          <strong>{nombreUsuario}</strong> {descripcion}
        </p>

        <p className="comentarios-publicacion">
          Ver los comentarios
        </p>

        <p className="fecha-publicacion">
          {fecha}
        </p>
      </div>
    </article>
  );
}

export default Publicacion;