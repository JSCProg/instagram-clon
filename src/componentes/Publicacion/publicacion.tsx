import { useEffect, useState } from "react";
import "./publicacion.css";

// Iconos utilizados en la interfaz de la publicación
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

// Iinterface que define las props que debe recibir el componente
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

  // guarda si el usuario dio like o no a la publicación
  const [tieneLike, setTieneLike] = useState(false);

  // guarda la cantidad de likes mostrada en pantalla
  const [likesActuales, setLikesActuales] =
    useState(cantidadLikes);

  // actualiza los likes mostrados cuando cambia el valor recibido por props
  useEffect(() => {
    setLikesActuales(cantidadLikes);
  }, [cantidadLikes]);

  // maneja el evento de dar o quitar like
  const manejarLike = (
    evento: React.MouseEvent<HTMLButtonElement>
  ) => {

    // evita que se ejecute también el click de la publicación
    // que abre el modal de detalle
    evento.stopPropagation();

    // si ya tenía like, se resta uno.
    // si no tenía like, se suma uno.
    if (tieneLike) {
      setLikesActuales(likesActuales - 1);
    } else {
      setLikesActuales(likesActuales + 1);
    }

    // cambia el estado del like
    setTieneLike(!tieneLike);
  };

  return (

    // al hacer click sobre la publicación se abre el modal
    <article
      className="publicacion"
      onClick={alSeleccionar}
    >

      {/* cabecera de la publicación */}
      <div className="cabecera-publicacion">
        <div className="informacion-usuario">

          {/* imagen de perfil del usuario */}
          <div className="circulo-perfil">
            <img
              src={imagenPerfil}
              alt={`Foto de perfil de ${nombreUsuario}`}
            />
          </div>

          {/* nombre del usuario */}
          <span className="nombre-usuario">
            {nombreUsuario}
          </span>
        </div>

        {/* botón de opciones */}
        <button className="boton-opciones">
          <BsThreeDots />
        </button>
      </div>

      {/* imagen principal de la publicación */}
      <div className="contenedor-imagen">
        <img
          src={imagenPublicacion}
          alt="Publicación"
          className="imagen-publicacion"
        />
      </div>

      {/* botones de interacción */}
      <div className="acciones-publicacion">
        <div className="acciones-izquierda">

          {/* botón de like */}
          <button
            className={`boton-like ${
              tieneLike ? "like-activo" : ""
            }`}
            onClick={manejarLike}
          >
            <FaRegHeart />
          </button>

          {/* botón de comentarios */}
          <button>
            <FaRegComment />
          </button>

          {/* Botón para compartir */}
          <button>
            <FiSend />
          </button>
        </div>

        {/* Botón para guardar la publicación */}
        <button>
          <FaRegBookmark />
        </button>
      </div>

      {/* Información de la publicación */}
      <div className="contenido-publicacion">

        {/* Cantidad de likes */}
        <p className="cantidad-likes">
          {likesActuales} Me gusta
        </p>

        {/* Descripción de la publicación */}
        <p className="descripcion-publicacion">
          <strong>{nombreUsuario}</strong>{" "}
          {descripcion}
        </p>

        {/* Texto para visualizar comentarios */}
        <p className="comentarios-publicacion">
          Ver los comentarios
        </p>

        {/* Fecha de publicación */}
        <p className="fecha-publicacion">
          {fecha}
        </p>
      </div>
    </article>
  );
}

export default Publicacion;