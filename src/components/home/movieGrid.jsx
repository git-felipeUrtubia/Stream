
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home/movieGrid.css';
import image from '../../assets/img/image.jpg';
import rapido_y_furiosos_1 from '../../assets/posters/rapidos_y_furiosos_1.png';
import tokyo_revenger from '../../assets/posters/tokyo_revengers.jpg';


export const MovieGrid = () => {

    const nav = useNavigate();
    const NavMovie = (id) => {
        nav(`/video/${id}`);
    }

    return (
        <section className="section-movies">

            <div className='content-grid'>
                <div className="content-movies-grid" onClick={ ()=>{NavMovie(9)} }>
                    <div className="movies"><img src={rapido_y_furiosos_1}/></div>
                    <span className="content-text-movie">Fast Furious 1</span>
                </div>

                <div className="content-movies-grid" onClick={ ()=>{NavMovie(10)} }>
                    <div className="movies"><img src={tokyo_revenger}/></div>
                    <span className="content-text-movie">Tokyo Revengers</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

                <div className="content-movies-grid">
                    <div className="movies"><img src={image}/></div>
                    <span className="content-text-movie">Title movie</span>
                </div>

            </div>

            <div className='content-bot'></div>

        </section>
    )
}



