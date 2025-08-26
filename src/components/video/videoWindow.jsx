import '../../assets/styles/video/videoWindow.css';
import { ChapterSelector } from "./chapterSelector.jsx";

export const Video = () => {
    
    const url = "https://my-movie.b-cdn.net/Rapidos%20Y%20Furiosos%201.mp4";
    return (

        <section className="video-page">
            <div className="content-video">
                <video src={null} controls></video>
            </div>
            <div className='sub-content-video'>
                <ChapterSelector />
            </div>
        </section>

    )
}