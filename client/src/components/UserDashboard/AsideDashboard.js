import React from 'react';
import ReactDOM from 'react-dom';
import Style from './userDasboard.module.css';

const Main = () => {

return (
    <div>
    <h3 id={Style['title-newOrder']}>New Order</h3>
    <div id={Style['ContenedorMain']}>
        
        <div className={Style['ContenedorAside']}>
            <div id={Style['budge']}>
                <h3>RD$0.00</h3>
                <span>Budge Available</span>
            </div>

            <div id={Style['status-order']}>
                <p>Order In Process</p>
                <span>- Cosa Real</span>
                <span>- Plato del dia</span>
                <span>- Status: Preparing</span>
            </div>

        </div>

        <div className={Style['ContenedorOrder']}>
            
            <div id={Style['cboPlace']}>
                <label> Restaurants:</label>
                    <select className='form-control'>
                        <option>Restaurante #1</option>
                        <option>Restaurante #2</option>
                        <option>Restaurante #3</option>
                        <option>Restaurante #4</option>
                        <option>Restaurante #5</option>
                        <option>Restaurante #6</option>
                    </select>
                
            </div>

            <div id={Style['label-menus']}>
                <h2>Menú:</h2>
                <ul>
                    <li>Plate #1 - <span>RD$150</span></li>
                    <li>Plate #2 - <span>RD$150</span></li>
                    <li>Plate #3 - <span>RD$150</span></li>
                    <li>Plate #4 - <span>RD$150</span></li>
                    <li>Plate #5 - <span>RD$150</span></li>
                    <li>Plate #6 - <span>RD$150</span></li>
                </ul>
            </div>

        </div>

            <div id={Style['price-order']}>
                <p>Dishes</p>
                <div className={Style['container-plate-selected']}>
                    <ul>
                        <li>Plate #1</li>
                    </ul>
                </div>
                
                
                <div id={Style['budgepay_1']}>
                    <span>Budge</span>
                    <span>RD$75</span>
                </div>

                <div id={Style['budgepay_2']}>
                    <span>You Pay</span>
                    <span>RD$75</span>
                </div>

                <button id={Style['botonPlaceOrder']} className='btn btn-warning btn-lg'>Place Order</button>
            </div>

    </div>
    </div>
);

}

export default Main;