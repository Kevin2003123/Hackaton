import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Style from './ReceiveOrders.module.css';
import Modal from './Modal';


export const Main = () => {

    const handleOpenModal = () => {
        setModalIsOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalIsOpen(false);
      };
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
return (
<div>

     

    <h4 id={Style['title-newOrder']}>Ordenes de Hoy     <h6>05/08/2023</h6></h4>
    <div id={Style['ContenedorMain']}>
        
        <div className={Style['ContenedorAside']}>
            <div className={Style['Filter']}>
                <span className={Style['label-filter']}>Filtar por: </span>
                <select className='form-control'>
                    <option>Restaurante..</option>
                    <option>Restaurante #1</option>
                    <option>Restaurante #2</option>
                    <option>Restaurante #3</option>
                </select>     

                <span className={Style['label-filter']}>Filtar por: </span>
                <select className='form-control'>
                    <option>Direccion..</option>
                    <option>Direccion #1</option>
                    <option>Direccion #2</option>
                    <option>Direccion #3</option>
                </select>      
 
            </div>

            <span id={Style['SelectedFilter']}>Restaurante: Casa Real</span>  

            <div>

            <div className=''>
                <table className='table table-hover'>
                    <thead>
                        <th>Plate</th>
                        <th>Employer</th>
                        <th>Address</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input type='checkbox' /> Plate #1 - RD$150</td>
                            <td>Carlos Almanzar</td>
                            <td>Edificio de la cuba</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /> Plate #1 - RD$150</td>
                            <td>Carlos Almanzar</td>
                            <td>Edificio de la cuba</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /> Plate #1 - RD$150</td>
                            <td>Carlos Almanzar</td>
                            <td>Edificio de la cuba</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /> Plate #1 - RD$150</td>
                            <td>Carlos Almanzar</td>
                            <td>Edificio de la cuba</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /> Plate #1 - RD$150</td>
                            <td>Carlos Almanzar</td>
                            <td>Edificio de la cuba</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className={Style['containerbtn']}>
                <button id={Style['boton-received']} className='btn btn-warning'>This has been received</button>
            </div>

        </div>
        
    </div>
</div>
);

}

export default Main;