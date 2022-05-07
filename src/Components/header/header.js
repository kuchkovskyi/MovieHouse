import React, {Fragment, useState, } from 'react';
import './header.css';

import Modal from './../signIn/signIn';

const Header = props => {
    const [show, setShow] = useState(false);

     return(
        <Fragment>
            <div className='menu'>
                <div className='menu-item'>
                    <a className='brand' href='main-page'>
                        MH
                    </a>
                </div>

                <div className='menu-item empty'></div>

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
                    <button className='btn btn-signIn' onClick={() => setShow(true)}>Sign In</button>
                </div>
            </div>
            
            <Modal onClose={() => setShow(false)} show={show} title="Sign In">
                <form className='form-group'>
                    <input className='form-control email-area' 
                        type='email' placeholder='Enter your email:'/>
                    <input className='form-control password-area'
                        type='password' placeholder='Enter your password:'/>
                    
                    <div className='auth-block'>
                        <ul className='inside-menu'>
                            <li className='inside-menu-item'>
                                <a href="popka" className='inside-menu-link'>Forgot your password? Click here!</a>
                            </li>
                            <li className='inside-menu-item'>
                                <a href="registration" className='inside-menu-link'>Don't have an account? Sign Up!</a>
                            </li>                    
                        </ul>

                        <button className='btn btn-sign-in'>Sign In</button>
                    </div>
                </form>
                
            </Modal>
        </Fragment>
    );
}

export default Header;