import React from 'react';
import ReactDOM from 'react-dom';
import Style from './PastOrders.module.css';
import Aside from './AsidePastOrders';



const header = () => {

return (
    <>
        <div className={Style['header-userDashboard']}>
            <h2><span>Past</span> Orders</h2>
            <div id={Style['contenedorbtn']}>
                <button className='btn btn-warning'>Dashboard</button>
                <button className='btn btn-dark'>Logout</button>
            </div>
    
        </div>

        <Aside />
    </>
);

}

export default header;