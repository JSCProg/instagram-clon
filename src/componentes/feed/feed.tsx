import { useEffect, useState } from "react";

import "./Feed.css";

import BarraHistorias from "../barrahistorias/barrahistorias";
import Publicacion from "../Publicacion/publicacion";
import Cargando from "../cargando/cargando";
import DetallePublicacion from "../detallepublicacion/detallepublicacion";

import type { Publicacion as TipoPublicacion } from "../../interfaces/publicacion";
import { obtenerGatos } from "../../servicios/apigatos";

function Feed() {
  // Estado donde se guardan todas las publicaciones obtenidas de la API
  const [publicaciones, setPublicaciones] = useState<TipoPublicacion[]>([]);

  // Estado que guarda la publicación seleccionada para mostrar en el modal
  const [publicacionSeleccionada, setPublicacionSeleccionada] =
    useState<TipoPublicacion | null>(null);

  // Se ejecuta una sola vez cuando se monta el componente
  useEffect(() => {
    const cargarPublicaciones = async () => {
      const gatos = await obtenerGatos();
      setPublicaciones(gatos);
    };

    cargarPublicaciones();
  }, []);

  return (
    <main className="feed">
      <BarraHistorias />

      {publicaciones.length === 0 ? (
        <Cargando />
      ) : (
      publicaciones.map((publicacion) => {
  console.log(
    publicacion.nombreUsuario,
    publicacion.cantidadLikes
  );

  return (
    <Publicacion
      key={publicacion.id}
      nombreUsuario={publicacion.nombreUsuario}
      imagenPerfil={publicacion.imagenPerfil}
      imagenPublicacion={publicacion.imagenPublicacion}
      descripcion={publicacion.descripcion}
      cantidadLikes={publicacion.cantidadLikes}
      fecha={publicacion.fecha}
      alSeleccionar={() =>
        setPublicacionSeleccionada(publicacion)
      }
    />
  );
})
      )}

      {/* Modal que muestra el detalle de la publicación seleccionada */}
      {publicacionSeleccionada && (
        <DetallePublicacion
          publicacion={publicacionSeleccionada}
          alCerrar={() => setPublicacionSeleccionada(null)}
        />
      )}
    </main>
  );
}

export default Feed;