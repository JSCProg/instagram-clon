import "./barrahistorias.css";

function BarraHistorias() {
  const historias = [
    {
      id: 1,
      nombreUsuario: "gatito_01",
      imagen: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      nombreUsuario: "gatito_02",
      imagen: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      nombreUsuario: "gatito_03",
      imagen: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      nombreUsuario: "gatito_04",
      imagen: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      nombreUsuario: "gatito_05",
      imagen: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <section className="barra-historias">
      {historias.map((historia) => (
        <div className="historia" key={historia.id}>
          <div className="circulo-historia">
            <img
              src={historia.imagen}
              alt={historia.nombreUsuario}
            />
          </div>
          <span>{historia.nombreUsuario}</span>
        </div>
      ))}
    </section>
  );
}

export default BarraHistorias;