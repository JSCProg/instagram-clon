import "./detallepublicacion.css";

// Iconos utilizados en el modal
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

// Interface que representa una publicación
import type { Publicacion } from "../../interfaces/publicacion";

// Props que recibe el componente
interface PropsDetallePublicacion {
  publicacion: Publicacion;
  alCerrar: () => void;
}

function DetallePublicacion({
  publicacion,
  alCerrar,
}: PropsDetallePublicacion) {
  return (

    // Fondo oscuro que aparece detrás del modal.
    // Al hacer click fuera de la publicación se cierra.
    <div className="fondo-modal" onClick={alCerrar}>

      {/* Contenedor principal del modal */}
      <div
        className="modal-publicacion"

        // Evita que el click dentro del modal llegue al fondo
        // y lo cierre accidentalmente
        onClick={(evento) => evento.stopPropagation()}
      >

        {/* Imagen ampliada de la publicación */}
        <div className="imagen-modal">
          <img
            src={publicacion.imagenPublicacion}
            alt={publicacion.nombreUsuario}
          />
        </div>

        {/* Sección con toda la información de la publicación */}
        <div className="informacion-modal">

          {/* Cabecera */}
          <div className="cabecera-modal">

            <div className="usuario-modal">
              <img
                src={publicacion.imagenPerfil}
                alt={publicacion.nombreUsuario}
              />

              <span>{publicacion.nombreUsuario}</span>
            </div>

            {/* Botón para cerrar el modal */}
            <button
              className="boton-cerrar"
              onClick={alCerrar}
            >
              ✕
            </button>
          </div>

          {/* Descripción y fecha */}
          <div className="descripcion-modal">
            <p>
              <strong>{publicacion.nombreUsuario}</strong>{" "}
              {publicacion.descripcion}
            </p>

            <p className="fecha-modal">
              {publicacion.fecha}
            </p>
          </div>

          {/* Lista de comentarios de la publicación */}
          <div className="comentarios-modal">

            {/* Recorre el arreglo de comentarios y genera un párrafo para cada uno */}
            {publicacion.comentarios.map(
              (comentario, indice) => (
                <p key={indice}>
                  💬 {comentario}
                </p>
              )
            )}
          </div>

          {/* Iconos de interacción */}
          <div className="acciones-modal">
            <div className="acciones-izquierda">
              <FaRegHeart />
              <FaRegComment />
              <FiSend />
            </div>

            <FaRegBookmark />
          </div>

          {/* Cantidad de likes */}
          <p className="likes-modal">
            {publicacion.cantidadLikes} Me gusta
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetallePublicacion;