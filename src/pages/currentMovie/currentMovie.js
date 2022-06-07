import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import './currentMovie.css';
import ReactPlayer from "react-player";

const CurrentMovie = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://localhost:7027/movies/${params.id}`).then(result => {
            setMovie(result.data);
            setIsLoading(false);
            console.log(result.data)
        })
    }, []);

    return (
        <div className="content">
            <div>
                <div>
                    <h3>{movie.name}</h3>
                </div>
                    
                <div className="stats">
                    
                    <div className="main-stats">
                        <p className="stats-data">{movie.year}</p>
                        <p className="stats-data">{movie.hours} h</p>
                        <p className="stats-data">{movie.minutes} m</p>
                    </div>

                    <div className="space"></div>

                    <div className="imdb-rates">
                        <img className="imdb-logo" alt="IMDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"/>
                        <p className="stats-data">
                            {movie.ratingIMDB}
                        </p>
                    </div>
                </div>
            </div>

            <div className="poster-trailer">
                <img alt={movie.name} src={movie.imageUrl} className="movie-poster"/>
                <ReactPlayer url={movie.trailerUrl} 
                    className="movie-trailer"/>
                <div className="space"></div>
            </div>

            <div className="genre-description">
                <div className="genres-block">
                    <div className="genres-list"> 
                        {
                            !isLoading &&
                            movie.genres.map((genre)=>(
                                <p key={genre.id} className="genre">
                                    {genre.name}
                                </p>
                            ))
                        }
                    </div>

                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="space"></div>
                </div>

                <div className="description-block">
                    <p className="description">
                        {movie.description}
                    </p>
                    <div className="space"></div>
                </div>
            </div>

            <div className="writers-directors">
                <table>
                    <tr>
                        <td className="table-title">Directors</td>
                        <td>
                            {
                                !isLoading &&
                                movie.directors.map((director)=>(
                                    <span key={director.id}>
                                        {director.name} {director.surname}<span>&#160; &bull; &#160;</span>
                                    </span>
                                ))
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className="table-title">Writters</td>
                        <td>
                            {
                                !isLoading &&
                                movie.writers.map((writer)=>(
                                    <span key={writer.id}>
                                        {writer.name} {writer.surname}<span>&#160; &bull; &#160;</span>
                                    </span>
                                ))
                            }
                        </td>
                    </tr>
                </table>
            </div>

            <div className="actors">
                {
                    !isLoading &&
                    movie.actors.map((actor)=>(
                    <div className="actor-block" key={actor.id}>
                        <img className="actors-image" alt={actor.surname} src={actor.imageUrl}/>
                        <div className="actors-initials">
                            <p>{actor.name} {actor.surname}</p>
                        </div>
                    </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default CurrentMovie;