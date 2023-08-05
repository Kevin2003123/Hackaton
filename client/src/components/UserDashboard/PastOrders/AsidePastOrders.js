import React from 'react';
import ReactDOM from 'react-dom';
import Style from './PastOrders.module.css';

const Main = () => {

return (
<div>
    <h4 id={Style['title-newOrder']}>Búsqueda de Ordenes</h4>
    <div id={Style['ContenedorMain']}>
        
        <div className={Style['ContenedorAside']}>
            <div className={Style['Filter']}>
             
                    <input type='radio' /> Date
                    <input type='radio' /> Place
                    <input type='radio' /> Order ID
                    <input id={Style['TextValue']} className='form-control' type='text' name='valueFilter' value='value' /> 
                
            </div>

            
            <table className='table table-hover'>
                <thead>
                    <th>Date</th>
                    <th>Order Id</th>
                    <th>Place</th>
                    <th>Order</th>
                    <th>Charged</th>
                </thead>

                <tbody>

                    <tr>
                        <td>00/00/0000</td>
                        <td>1515</td>
                        <td>Casa Real</td>
                        <td>Plato del Dia</td>
                        <td>Total: RD$125 <br /> Budge: RD$75 <br /> Paid: RD$50</td>
                    </tr>
                    <tr>
                        <td>00/00/0000</td>
                        <td>1515</td>
                        <td>Casa Real</td>
                        <td>Plato del Dia</td>
                        <td>Total: RD$125 <br /> Budge: RD$75 <br /> Paid: RD$50</td>
                    </tr>
                    <tr>
                        <td>00/00/0000</td>
                        <td>1515</td>
                        <td>Casa Real</td>
                        <td>Plato del Dia</td>
                        <td>Total: RD$125 <br /> Budge: RD$75 <br /> Paid: RD$50</td>
                    </tr>
                    <tr>
                        <td>00/00/0000</td>
                        <td>1515</td>
                        <td>Casa Real</td>
                        <td>Plato del Dia</td>
                        <td>Total: RD$125 <br /> Budge: RD$75 <br /> Paid: RD$50</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>

    </div>
</div>
);

}

export default Main;