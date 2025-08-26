import { useEffect, useState } from 'react';
import '../../assets/styles/video/videoWindow.css';
import { ChapterSelector } from "./chapterSelector.jsx";

export const Video = () => {
    const [title, setTitle] = useState("");
    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        setTitle("Rapido y Furioso 1");
        if(title == "Rapido y Furioso null") {
            setVisible(false);
        }
    },[title])
    
    const url = "https://my-movie.b-cdn.net/Rapidos%20Y%20Furiosos%201.mp4";
    return (

        <section className="video-page">
            <div className="content-video">
                <video src={url} controls></video>
            </div>
            <div className="content-title-video">
                <span className='title-video'>{title}</span>
            </div>
            {visible &&(
                <div className='sub-content-video'>
                    <ChapterSelector />
                </div>
            )}
        </section>

    )
}