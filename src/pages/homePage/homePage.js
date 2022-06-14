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

    const [value, setValue] = useState('');

    const searchingMovies = movies.filter(movie => {
        return movie.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className="content">

            <div className="search-content">
                <form className="search-form">
                    <input type="text" placeholder="What film are you searching?"
                    className="form-control search-control" 
                    onChange={(event) => setValue(event.target.value)}/>
                    <button className="btn btn-search">
                        <i className="fa fa-search"/>
                    </button>
                </form>
            </div>

            <div className="content-element">
                {
                    searchingMovies.map((element)=>(
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