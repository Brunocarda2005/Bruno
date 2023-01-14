import Header from "./components/header/header";
import Main from "./portafolio/Main";
import Project from "./components/proyect/Project";
import Work from "./components/works/Work";
import { Route } from "wouter";
import "./components/static/css/app.css";

function App() {
  return (
    <>
      <main className="app">

        <Header />
        <Route path="/Bruno">
          {/* esta es la pagina principal del proyecto*/}
          <Main />
        </Route>
        <Route path="/Bruno/Project">
          {/* esta es la pagina en donde estan todos los proyectos de mi github */}
          <Project />
        </Route>
        <Route path="/Bruno/Work">
          {/* esta es la oagina en donde estan todos mis trabajos */}
          <Work />
        </Route>
      </main>
    </>
  );
}

export default App;
