import "./App.css";

import Header from "./componentes/header/header";
import Feed from "./componentes/feed/feed";
import PerfilUsuario from "./componentes/perfilusuario/perfilusuario";

function App() {
  return (
    <div className="aplicacion">
      <Header />
      <Feed />
      <PerfilUsuario />
    </div>
  );
}

export default App;