import React from 'react';
import ReactDOM from 'react-dom';
import Style from './userDasboard.module.css';
import Aside from './AsideDashboard';


const header = () => {

return (
    <>
        <div className={Style['header-userDashboard']}>
            <h2><span>User</span> Dashboard</h2>
            <div id={Style['contenedorbtn']}>
                <button className='btn btn-warning'>Past Orders</button>
                <button className='btn btn-dark'>Logout</button>
            </div>

    
        </div>

        <Aside />
    </>
);

}

export default header;