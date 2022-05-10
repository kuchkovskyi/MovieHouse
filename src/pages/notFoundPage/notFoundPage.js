import { Link } from "react-router-dom";

import './notFoundPage.css';

const NotFoundPage = () => {
    return (
        <form className="block">
            <h1 className="error-page-title">
                Error 404
            </h1>

            <p className="error-page-description">
                This page doesn't exist. Go
                <Link to={'/'} 
                    className='error-page-link'>
                    home
                </Link>.
            </p>
        </form>
    )
}

export { NotFoundPage };