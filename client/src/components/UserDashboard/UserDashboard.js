import React from 'react';
import ReactDOM from 'react-dom';
import Style from './userDasboard.module.css';
import Aside from './AsideDashboard';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../redux/actions/user'; 

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(LogoutUser());
        navigate("/login");    
    }

    const navigateToPastOrders = () => {
        navigate("/userDashboard/pastOrders");
    }

return (
    <>
        <div className={Style['header-userDashboard']}>
            <h2><span>User</span> Dashboard</h2>
            <div id={Style['contenedorbtn']}>
                <button onClick={()=> navigateToPastOrders()} className='btn btn-warning'>Past Orders</button>
                <button onClick={()=> Logout()} className='btn btn-dark'>Logout</button>
            </div>

    
        </div>

        <Aside />
    </>
);

}

export default Header;