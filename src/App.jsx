import { Header } from "./components/home/header.jsx";
import { Body } from "./components/home/body.jsx";
import "./assets/styles/home/app.css";

function App() {

  return (
    <>
      <section className="sec-header">
        <Header />
      </section>
      <div className='solo-separacion'></div>
      <section className="sec-body">
        <Body />
      </section>
    </>
  )
}

export default App
