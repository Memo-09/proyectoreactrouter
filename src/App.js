import React from "react";
import Home from "./components/Home";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import RegistroEmpleaods from "./components/RegistroEmpleaods";
import RegistroMedicamentos from "./components/RegistroMedicamentos";
import RegistroProveedores from "./components/RegistroProveedores";
import "./components/css/style.css";

function App() {
  return (
    <div className="App">
        <body>
          <div className="form-register">
            <HashRouter>
            <div className="barraNavegacion">
                <div>
                  <h1>FARMACIAS "LOS REYES"</h1>
                </div>
                <Link
                  to={"/Home"}
                  type="button"
                  class="btn btn-secondary mx-3 btn-lg"
                >
                  INICIO
                </Link>
                <Link
                  to={"/empleados"}
                  type="button"
                  class="btn btn-secondary mx-3 btn-lg"
                >
                  EMPLEADOS
                </Link>
                <Link
                  to={"/medicamentos"}
                  type="button"
                  class="btn btn-secondary mx-3 btn-lg"
                >
                  MEDICAMENTOS
                </Link>
                <Link
                  to={"/proveedores"}
                  type="button"
                  class="btn btn-secondary mx-3 btn-lg"
                >
                  PROVEEDORES
                </Link>
                <hr />
              </div>
              <div className="barraNavegacion2">
                <Routes>
                  <Route path="/Home" exact element={<Home />} />
                  <Route path="/empleados" element={<RegistroEmpleaods />} />
                  <Route
                    path="/medicamentos"
                    element={<RegistroMedicamentos />}
                  />
                  <Route
                    path="/proveedores"
                    element={<RegistroProveedores />}
                  />
                </Routes>
              </div>
            </HashRouter>
          </div>
        </body>
    </div>
  );
}

export default App;
