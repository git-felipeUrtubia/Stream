import { useState } from 'react';
import '../../assets/styles/carrusel.css';
import ArrowBack from '../../assets/icons/chevron-back-outline.svg?react';
import ArrowForward from '../../assets/icons/chevron-forward-outline.svg?react';
import image from '../../assets/img/image.jpg';
import rapido_y_furiosos_1 from '../../assets/posters/rapidos_y_furiosos_1.png';


export const Carrusel = () => {

    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0); 
    const [x3, setX3] = useState(0);
    
    const movie = "/video";

    const moveLeft = (idButton) => {

        if(idButton == 1) {
            const n1 = x1 + 13;
            setX1(n1);
            document.documentElement.style.setProperty("--x1", `${n1}rem`);
        }else if(idButton == 2) {
            const n2 = x2 + 13;
            setX2(n2);
            document.documentElement.style.setProperty("--x2", `${n2}rem`);
        }else if(idButton == 3) {
            const n3 = x3 + 13;
            setX3(n3);
            document.documentElement.style.setProperty("--x3", `${n3}rem`);
        }

    }

    const moveRight = (idButton) =>{
        if(idButton == 1) {
            const n1 = x1 - 13;
            setX1(n1);
            document.documentElement.style.setProperty("--x1", `${n1}rem`);
        }else if(idButton == 2) {
            const n2 = x2 - 13;
            setX2(n2);
            document.documentElement.style.setProperty("--x2", `${n2}rem`);
        }else if(idButton == 3) {
            const n3 = x3 - 13;
            setX3(n3);
            document.documentElement.style.setProperty("--x3", `${n3}rem`);
        }
    }

    const overflowVisible = () => {
        document.documentElement.style.setProperty("--overflow", "visible");
    }

    const overflowHidden = () => {
        document.documentElement.style.setProperty("--overflow", "hidden");
    }

    const NavMovie = () => {
        window.location.href = "/video";
    }
    

    return (

        <div className='carrusel-root'>
            <div className='title-movies'>
                <h2>Peliculas</h2>
            </div>
            <div className="carrusel uno">
                <button className='btn-left' onClick={ () => {moveLeft(1);} }>
                    <span>
                        <ArrowBack className="icon"/>
                    </span>
                </button>
                <div className='box-runing'>
                    <div className="contain-content uno">
                        <div className="content uno" onClick={ NavMovie } ><img src={rapido_y_furiosos_1} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                        <div className="content uno"><img src={image} alt="" /></div>
                    </div>
                </div>
                <button className='btn-right' onClick={ () => {moveRight(1);} }>
                    <span>
                        <ArrowForward className="icon"/>    
                    </span>
                </button>
            </div>

            <div className='title-movies'>
                <h2>Series</h2>
            </div>

            <div className="carrusel dos">
                <button className='btn-left' onClick={ () => {moveLeft(2);} }>
                    <span>
                        <ArrowBack className="icon"/>
                    </span>
                </button>
                <div className='box-runing'>
                    <div className="contain-content dos">
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                        <div className="content dos"><img src={image} alt="" /></div>
                    </div>
                </div>
                <button className='btn-right' onClick={ () => {moveRight(2);} }>
                    <span>
                        <ArrowForward className="icon"/>    
                    </span>
                </button>
            </div>

            <div className='title-movies'>
                <h2>Animados</h2>
            </div>

            <div className="carrusel tres">
                <button className='btn-left' onClick={ () => {moveLeft(3);} }>
                    <span>
                        <ArrowBack className="icon"/>
                    </span>
                </button>
                <div className='box-runing'>
                    <div className="contain-content tres">
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                        <div className="content tres"><img src={image} alt="" /></div>
                    </div>
                </div>
                <button className='btn-right' onClick={ () => {moveRight(3);} }>
                    <span>
                        <ArrowForward className="icon"/>    
                    </span>
                </button>
            </div>

        </div>

    );
}


