import { Header } from "./components/header.jsx";
import { Carrusel } from "./components/carrusel.jsx";
import "./assets/styles/app.css"

function App() {

  return (
    <>
      <section className="sec-header">
        <Header />
      </section>
      <section className="sec-carrusel">
        <Carrusel />
      </section>
    </>
  )
}

export default App
