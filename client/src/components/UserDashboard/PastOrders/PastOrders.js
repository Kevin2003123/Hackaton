import React from 'react';
import ReactDOM from 'react-dom';
import Style from './PastOrders.module.css';
import Aside from './AsidePastOrders';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../../redux/actions/user';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(LogoutUser());
        navigate("/login");    
    }

    const navigateToDashboard = () => {
        navigate("/userDashboard");
    }

return (
    <>
        <div className={Style['header-userDashboard']}>
            <h2><span>Past</span> Orders</h2>
            <div id={Style['contenedorbtn']}>
                <button onClick={()=> navigateToDashboard() } className='btn btn-warning'>Dashboard</button>
                <button onClick={() => Logout()} className='btn btn-dark'>Logout</button>
            </div>
    
        </div>

        <Aside />
    </>
);

}

export default Header;