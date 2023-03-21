import React from 'react';
import { useState } from 'react';

import './popUp.scss';

const Modal = ({enable}) => {

    const [popUpEnable, setPopUpEnable] = useState(enable);
    return (
        <div className={`modal_ ${popUpEnable ? "" : "disabled"}`} onClick={() => setPopUpEnable(false)}>
            <div className="modal_body">
                <div className="header"> Wellcome to Trello-like task Board! </div>
                <div className="content">
                    <p>This project using free hosts, so you have just 60 avaliable actions per day.</p>
                    <p>Be patient and have fun!</p>
                    <button className='btn btn-secondary'>Close modal</button>
                    {/* <span>Created by: Oleksii Pylypenko.</span> */}
                </div>
            </div>
        </div>
    )
};

export default Modal;