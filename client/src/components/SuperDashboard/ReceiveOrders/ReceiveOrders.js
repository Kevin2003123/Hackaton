import React from 'react';
import ReactDOM from 'react-dom';
import Style from './ReceiveOrders.module.css';
import Aside from './ModalReceived';
import Modal  from './Modal';


const header = () => {

return (
    <>
        <div className={Style['header-userDashboard']}>
            <h2><span>Super</span> Dashboard</h2>
            <div id={Style['contenedorbtn']}>
                <button className='btn btn-dark'>Logout</button>
            </div>
    
        </div>

        <Aside />
    </>
);

}

export default header;