
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home/movieGrid.css';
import '../../assets/styles/home/movieGrid-BtnNavBar.css'
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

            <div className='content-grid-movies-root'>
                <div className='content-grid'>
                    <div className="card-movie" onClick={ ()=>{NavMovie(9)} }>
                        <div className="movies"><img src={rapido_y_furiosos_1}/></div>
                        <span className="content-text-movie">Fast Furious 1</span>
                    </div>

                    <div className="card-movie" onClick={ ()=>{NavMovie(10)} }>
                        <div className="movies"><img src={tokyo_revenger}/></div>
                        <span className="content-text-movie">Tokyo Revengers</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                    <div className="card-movie">
                        <div className="movies"><img src={image}/></div>
                        <span className="content-text-movie">Title movie</span>
                    </div>

                </div>

                <div className="bar-buttons-nav">
                    <button className="btn-nav"><span>1</span></button>
                    <button className="btn-nav"><span>2</span></button>
                    <button className="btn-nav"><span>3</span></button>
                    <button className="btn-nav"><span>4</span></button>
                    <button className="btn-nav"><span>5</span></button>
                </div>

            </div>

            <div className='content-bot'></div>
            

        </section>
    )
}



