import "./detallepublicacion.css";

import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import type { Publicacion } from "../../interfaces/publicacion";

interface PropsDetallePublicacion {
  publicacion: Publicacion;
  alCerrar: () => void;
}

function DetallePublicacion({
  publicacion,
  alCerrar,
}: PropsDetallePublicacion) {
  return (
    <div className="fondo-modal" onClick={alCerrar}>
      <div
        className="modal-publicacion"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className="imagen-modal">
          <img
            src={publicacion.imagenPublicacion}
            alt={publicacion.nombreUsuario}
          />
        </div>

        <div className="informacion-modal">
          <div className="cabecera-modal">
            <div className="usuario-modal">
              <img
                src={publicacion.imagenPerfil}
                alt={publicacion.nombreUsuario}
              />

              <span>{publicacion.nombreUsuario}</span>
            </div>

            <button
              className="boton-cerrar"
              onClick={alCerrar}
            >
              ✕
            </button>
          </div>

          <div className="descripcion-modal">
            <p>
              <strong>{publicacion.nombreUsuario}</strong>{" "}
              {publicacion.descripcion}
            </p>

            <p className="fecha-modal">
              {publicacion.fecha}
            </p>
          </div>

         <div className="comentarios-modal">
  {publicacion.comentarios.map((comentario, indice) => (
    <p key={indice}>💬 {comentario}</p>
  ))}
</div>

          <div className="acciones-modal">
            <div className="acciones-izquierda">
              <FaRegHeart />
              <FaRegComment />
              <FiSend />
            </div>

            <FaRegBookmark />
          </div>

          <p className="likes-modal">
            {publicacion.cantidadLikes} Me gusta
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default DetallePublicacion;