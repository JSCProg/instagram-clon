import "./perfilusuario.css";
import fotoperfilTp7 from "../../assets/fotoperfiltp7.png";
function PerfilUsuario() {
  const sugerencias = [
    {
      id: 1,
      usuario: "Lucas.Chechik",
      nombre: "Seguido por amante_gatos_1",
    },
    {
      id: 2,
      usuario: "Flecha.elmejorprofe",
      nombre: "Nuevo en Instagram",
    },
    {
      id: 3,
      usuario: "Messi.10",
      nombre: "Seguido por gatito_02",
    },
    {
      id: 4,
      usuario: "gabi.stanca",
      nombre: "Sugerido para ti",
    },
  ];

  return (
    <aside className="perfil-usuario">
      <div className="usuario-actual">
        <img
          src= {fotoperfilTp7}
          alt="Perfil"
        />

        <div className="datos-usuario">
          <strong>juanse.carus</strong>
          <span>Juanse Carus</span>
        </div>

        <button>Cambiar</button>
      </div>

      <div className="encabezado-sugerencias">
        <span>Sugerencias para ti</span>
        <button>Ver todo</button>
      </div>

      {sugerencias.map((sugerencia) => (
        <div
          className="sugerencia"
          key={sugerencia.id}
        >
          <img
            src={`https://i.pravatar.cc/100?img=${sugerencia.id + 30}`}
            alt={sugerencia.usuario}
          />

          <div className="datos-sugerencia">
            <strong>{sugerencia.usuario}</strong>
            <span>{sugerencia.nombre}</span>
          </div>

          <button>Seguir</button>
        </div>
      ))}

      <div className="footer-perfil">
        <p>
          Información · Ayuda · Privacidad · Condiciones
        </p>

        <p>© 2026 INSTAGRAM CLON</p>
      </div>
    </aside>
  );
}

export default PerfilUsuario;