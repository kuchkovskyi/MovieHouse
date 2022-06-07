import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './homePage.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7027/movies').then(result => {
            setMovies(result.data)
        })
    }, []);

    return (
        <div className="content">
            <div className="content-element">
                {
                    movies.map((element)=>(
                        <Link key={element.id} className="element" to={`/movies/${element.id}`}>
                            <img className="movie-image" alt={element.name} src={element.imageUrl}/>
                            <p className="movie-name">
                                {element.name}
                            </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;