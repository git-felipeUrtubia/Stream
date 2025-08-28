import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/video/videoWindow.css';
import { ChapterSelector } from "./chapterSelector.jsx";
import { useParams } from 'react-router-dom';
import movies from '../../assets/data/movies.json';
import ArrowBack from '../../assets/icons/arrow-left-circle.svg?react';

export const Video = () => {
    const [visible, setVisible] = useState(false);   
    
    const nav = useNavigate();
    const handleClickBack = () => {
        nav('/');
    }

    const { id } = useParams();
    const idMovie = parseInt(id, 10);
    let url = null;
    let title = null;
    let genero = null;
    let anio = null;
    let duracion = null;
    let image = null;
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].id == idMovie) {
            url = movies[i].url;
            title = movies[i].name;
            genero = movies[i].genero;
            anio = movies[i].anio;
            duracion = movies[i].duracion;
            image = movies[i].poster;
            
            useEffect(() => {
                if(movies[i].tipo == "serie") {
                    setVisible(true);
                }
            })

        }
    }

    return (

        <section className="video-page">
            <div className="content-video">
                <button className='btn-volver' onClick={ handleClickBack }>
                    <ArrowBack className="icon-btn-volver"/>
                </button>
                <video src={url} controls></video>
            </div>
            <div className="content-desc-video">
                <div className='content-poster-video'>
                    <img src={image}/>
                </div>
                <div className='card-video'>
                    <div className='title-video'>
                        <span>{title}</span>
                        <p>Género: {genero}</p>
                        <p>Año: {anio} / {duracion}</p>
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