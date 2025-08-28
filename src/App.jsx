import { Header } from "./components/home/header.jsx";
import { Body } from "./components/home/body.jsx";
import "./assets/styles/home/app.css";
import image1 from './assets/img/image_background/harry_potter_backg1.png';
import image2 from './assets/img/image_background/harry_potter_backg2.png';
import image3 from './assets/img/image_background/harry_potter_backg3.png';




function App() {

  return (
    <>
      <section className="sec-header">
        <Header />
      </section>
      <section className="sec-body">
        <div className='image-background'>
          <div className="img-fade">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
          </div>
        </div>
        <Body />
      </section>
    </>
  )
}

export default App
