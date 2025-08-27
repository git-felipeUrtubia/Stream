import { useState } from 'react';
import '../../assets/styles/video/videoWindow.css';
import { ChapterSelector } from "./chapterSelector.jsx";
import { useParams } from 'react-router-dom';


export const Video = () => {
    const [visible, setVisible] = useState(true);    

    const movies = [
        {
            "id": 1,
            "name": "Harry Potter y la piedra filosofal",
            "genero": "Aventura, Fantasia",
            "anio": 2009,
            "url": "https://my-movie.b-cdn.net/harry_potter_el_prisionero_de_azkaban.mp4"
        },
        {
            "id": 2,
            "name": "Harry Potter y la camara secreta",
            "genero": "Aventura, Fantasia",
            "anio": 2009,
            "url": "https://my-movie.b-cdn.net/harry_potter_la_camara_secreta.mp4"
        },
        {
            "id": 5,
            "name": "Rapido y Furioso 1",
            "genero": "Accion, Carrera",
            "anio": 2009,
            "url": "https://my-movie.b-cdn.net/Rapidos%20Y%20Furiosos%201.mp4" 
        }
    ]

    const { id } = useParams();
    const idMovie = parseInt(id, 10);
    let url = null;
    let title = null;
    let genero = null;
    let anio = null;
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].id == idMovie) {
            url = movies[i].url;
            title = movies[i].name;
            genero = movies[i].genero;
            anio = movies[i].anio;
        }
    }

    return (

        <section className="video-page">
            <div className="content-video">
                <video src={url} controls></video>
            </div>
            <div className="content-desc-video">
                <div className='content-poster-video'></div>
                <div className='card-video'>
                    <div className='title-video'>
                        <span>{title}</span>
                        <p>Género: {genero}</p>
                        <p>Año: {anio}</p>
                    </div>
                    <div className='desc-movie'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Magnam consectetur odit quidem itaque dolore quae 
                            atque consequuntur aperiam voluptas 
                            explicabo dolor nostrum, obcaecati doloremque, 
                            fugiat optio veritatis cumque tenetur libero.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Magnam consectetur odit quidem itaque dolore quae 
                            atque consequuntur aperiam voluptas 
                            explicabo dolor nostrum, obcaecati doloremque, 
                            fugiat optio veritatis cumque tenetur libero.
                        </p>
                    </div>
                </div>
                
            </div>
            {visible &&(
                <div className='sub-content-video'>
                    <ChapterSelector />
                </div>
            )}
        </section> 

    )
}