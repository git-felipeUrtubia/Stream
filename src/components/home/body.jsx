import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home/body.css';
import ArrowBack from '../../assets/icons/chevron-back-outline.svg?react';
import ArrowForward from '../../assets/icons/chevron-forward-outline.svg?react';
import { MovieGrid } from './movieGrid';

import image from '../../assets/img/image.jpg';
import harry_potter_la_piedra_filosofal from '../../assets/posters/harry_potter_la_piedra_filosofal.jpg';
import harry_potter_y_la_camara_secreta from '../../assets/posters/harry_potter_y_la_camara_secreta.jpg';
import harry_potter_el_prisionero_de_azkaban from '../../assets/posters/harry_potter_el_prisionero_de_azkaban.jpg';
import harry_potter_el_caliz_de_fuego from '../../assets/posters/harry_potter_el_caliz_de_fuego.jpg';
import harry_potter_la_orden_del_fenix from '../../assets/posters/harry_potter_la_orden_del_fenix.jpg';
import harry_potter_el_misterio_del_principe from '../../assets/posters/harry_potter_el_misterio_del_principe.jpg';
import harry_potter_las_reliquias_de_la_muerte_parte_1 from '../../assets/posters/harry_potter_las_reliquias_de_la_muerte_parte_1.jpg';
import harry_potter_las_reliquias_de_la_muerte_parte_2 from '../../assets/posters/harry_potter_las_reliquias_de_la_muerte_parte_2.jpg';





export const Body = () => {

    const [x1, setX1] = useState(0);

    const moveLeft = () => {

        const n1 = x1 + 13;
        setX1(n1);
        document.documentElement.style.setProperty("--x1", `${n1}rem`);        

    }

    const moveRight = () =>{
        
        const n1 = x1 - 13;
        setX1(n1);
        document.documentElement.style.setProperty("--x1", `${n1}rem`);
        
    }

    const overflowVisible = () => {
        document.documentElement.style.setProperty("--overflow", "visible");
    }

    const overflowHidden = () => {
        document.documentElement.style.setProperty("--overflow", "hidden");
    }

    const nav = useNavigate();
    const NavMovie = (id) => {
        nav(`/video/${id}`);
    }
    

    return (

        <div className='body-root'>
            <div className='carrusel-root'>
                <div className="carrusel">
                    <button className='btn-carrusel btn-left' onClick={ () => {moveLeft(1);} }>
                        <span>
                            <ArrowBack className="icon"/>
                        </span>
                    </button>
                    <div className='box-runing'>
                        <div className="contain-content uno">
                            <div className="content uno" onClick={ ()=>{NavMovie(1)} }><img src={harry_potter_la_piedra_filosofal}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(2)} }><img src={harry_potter_y_la_camara_secreta}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(3)} }><img src={harry_potter_el_prisionero_de_azkaban}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(4)} }><img src={harry_potter_el_caliz_de_fuego}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(5)} }><img src={harry_potter_la_orden_del_fenix}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(6)} }><img src={harry_potter_el_misterio_del_principe}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(7)} }><img src={harry_potter_las_reliquias_de_la_muerte_parte_1}/></div>
                            <div className="content uno" onClick={ ()=>{NavMovie(8)} }><img src={harry_potter_las_reliquias_de_la_muerte_parte_2}/></div>
                        </div>
                    </div>
                    <button className='btn-carrusel btn-right' onClick={ () => {moveRight(1);} }>
                        <span>
                            <ArrowForward className="icon"/>    
                        </span>
                    </button>
                </div>
            </div>
            <div className='galery-movies'>
                <MovieGrid />
            </div> 
        </div>

    );
}


