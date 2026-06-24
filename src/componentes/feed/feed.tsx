import { useEffect, useState } from "react";

import "./Feed.css";

// Componentes que forman el contenido principal de la aplicación
import BarraHistorias from "../barrahistorias/barrahistorias";
import Publicacion from "../Publicacion/publicacion";
import Cargando from "../cargando/cargando";
import DetallePublicacion from "../detallepublicacion/detallepublicacion";

// Interface utilizada para tipar las publicaciones
import type { Publicacion as TipoPublicacion } from "../../interfaces/publicacion";

// Función que obtiene los datos desde la API de gatos
import { obtenerGatos } from "../../servicios/apigatos";

function Feed() {
  // Estado donde se almacenan todas las publicaciones obtenidas de la API
  const [publicaciones, setPublicaciones] = useState<TipoPublicacion[]>([]);

  // Estado que guarda la publicación seleccionada para mostrarla en el modal
  const [publicacionSeleccionada, setPublicacionSeleccionada] =
    useState<TipoPublicacion | null>(null);

  // Se ejecuta una sola vez cuando se carga el componente
  // y obtiene las publicaciones desde la API
  useEffect(() => {
    const cargarPublicaciones = async () => {
      const gatos = await obtenerGatos();
      setPublicaciones(gatos);
    };

    cargarPublicaciones();
  }, []);

  return (
    <main className="feed">

      {/* Barra superior de historias */}
      <BarraHistorias />

      {/* Mientras las publicaciones se cargan se muestra un indicador de carga */}
      {publicaciones.length === 0 ? (
        <Cargando />
      ) : (
        // Recorre el arreglo de publicaciones y genera un componente
        // Publicacion para cada elemento recibido desde la API
        publicaciones.map((publicacion) => (
          <Publicacion
            key={publicacion.id}
            nombreUsuario={publicacion.nombreUsuario}
            imagenPerfil={publicacion.imagenPerfil}
            imagenPublicacion={publicacion.imagenPublicacion}
            descripcion={publicacion.descripcion}
            cantidadLikes={publicacion.cantidadLikes}
            fecha={publicacion.fecha}

            // Al hacer click sobre una publicación se guarda en el estado
            // para mostrarla en el modal de detalle
            alSeleccionar={() =>
              setPublicacionSeleccionada(publicacion)
            }
          />
        ))
      )}

      {/* Si existe una publicación seleccionada se muestra el modal */}
      {publicacionSeleccionada && (
        <DetallePublicacion
          publicacion={publicacionSeleccionada}

          // Al cerrar el modal se vuelve a colocar null en el estado
          alCerrar={() => setPublicacionSeleccionada(null)}
        />
      )}
    </main>
  );
}

export default Feed;