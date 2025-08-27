import { Header } from "./components/home/header.jsx";
import { Body } from "./components/home/body.jsx";
import "./assets/styles/home/app.css";

function App() {

  return (
    <>
      <section className="sec-header">
        <Header />
      </section>
      <section className="sec-body">
        <div className='solo-separacion'></div>
        <Body />
      </section>
    </>
  )
}

export default App
