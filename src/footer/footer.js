import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import './footer.css';

export default class Footer extends Component {
    render() {
        return(
            <Fragment>
                <div>
                    <div className="footer-container">
                        <div className="footer-element">
                            <Link to="/terms-and-conditions" className="footer-link">
                                Terms and conditions
                            </Link>
                        </div>

                        <div className="footer-element">
                            <Link to="/privacy-policy" className="footer-link">
                                Privacy
                            </Link>
                        </div>

                        <div className="footer-element footer-empty"></div>

                        <div className="footer-element wrapper wrapper-lg">
                            <button className="btn btn-share-us btn-facebook">
                                <i className="fa fa-facebook-square"></i>
                            </button>

                            <button className="btn btn-share-us btn-twitter">
                                <i className="fa fa-twitter"></i>
                            </button>

                            <button className="btn btn-share-us btn-telegram">
                                <i className="fa fa-telegram"></i>
                            </button>

                            <button className="btn btn-share-us btn-instagram">
                                <i className="fa fa-instagram"></i>
                            </button>
                        </div>
                    </div>

                    <div className="footer-container-sm">
                        <div className="footer-element wrapper wrapper-sm">
                            <button className="btn btn-share-us btn-facebook">
                                <i className="fa fa-facebook-square"></i>
                            </button>

                            <button className="btn btn-share-us btn-twitter">
                                <i className="fa fa-twitter"></i>
                            </button>

                            <button className="btn btn-share-us btn-telegram">
                                <i className="fa fa-telegram"></i>
                            </button>

                            <button className="btn btn-share-us btn-instagram">
                                <i className="fa fa-instagram"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}