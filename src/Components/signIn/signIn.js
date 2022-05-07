import React from 'react';
import './signIn.css';

const Modal = props => {
    if(!props.show) {
        return null;
    }
    return(
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <div className='modal-title'>
                        <span>{props.title}</span>
                    </div>

                    <div className='empty'></div>

                    <button className='btn btn-close' onClick={props.onClose}>
                        &times;    
                    </button>
                </div>
                <div className='modal-body'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;