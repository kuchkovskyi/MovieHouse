import React, {Fragment } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = props => {

     return(
        <Fragment>
            <div>
                <div className='menu'>
                    <div className='menu-item'>
                        <Link className='brand' to={'/'}>
                            MH
                        </Link>
                    </div>

                    <div className='menu-item header-empty'></div>

                    <div className='menu-item'>
                        <button className='btn btn-search'>
                            <i className='fa fa-search'></i>
                        </button>
                    </div>

                    <div className='menu-item'>
                        <button className='btn btn-theme'>
                            <i className='fa fa-sun-o'></i>
                        </button>
                    </div>

                    <div className='menu-item'>
                        <Link to={'/signIn'} className='header-link'>
                                Sign In                        
                        </Link>
                    </div>
                </div>

                <div className='scnd-menu'>
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Movies
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Series
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Cartoons
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Selected
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Community
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            Announces
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            2022
                        </Link>
                    </div>
                    
                    <div className='scnd-menu-item'>
                        <Link className='scnd-menu-link' to={'/'}>
                            TOP 10
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Header;