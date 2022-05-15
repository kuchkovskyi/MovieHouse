import './form.css';
import { Link } from 'react-router-dom';

const Form = (props) => {
  return(
    <div className="auth-block">
        <h3 className="auth-title">
            {props.title}
        </h3>

        <form className="form-group">
            {props.children}

            <div className="form-group-block">
                <div className="block-item">
                    <ul className="form-menu">
                        <li className="form-menu-item">
                            <Link to={props.firstLink} className="form-link">
                                {props.firstLinkDescription}
                            </Link>
                        </li>
                        <li>
                            <Link to={props.secondLink} className="form-link">
                                {props.secondLinkDescription}
                            </Link>
                        </li>
                    </ul> 
                </div>
                
                <div className="block-item">
                    <button className="btn btn-auth"
                        type="submit">
                        {props.button}
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form;