import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Style from './userDasboard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from '../../redux/actions/restaurants/restaurants';
import { getDishes } from '../../redux/actions/disches/disches';
import { v4 as uuidv4 } from 'uuid';
import Decimal from 'decimal.js'; // Importa la librería decimal.js
import { verifyBudgedIsActive } from '../../redux/actions/orders/orders';
import moment from 'moment';


const Main = () => {
  let uniqueId = uuidv4();

  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const disches = useSelector((state) => state.dishes.dishes);
  const userByUserName = useSelector((state) => state.user.userByUserName)
  const budged = useSelector((state) => state.orders.budged)

  const [selectedDishes, setSelectedDishes] = useState([]);
  const [selectedDishesList, setSelectedDishesList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(new Decimal(0));

  const handleDishToggle = (dishId, dishName, dishPrice) => {
    const decimalPrice = new Decimal(dishPrice)
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter(id => id !== dishId));
      setSelectedDishesList(selectedDishesList.filter(name => name !== dishName));
      setTotalPrice(prevTotalPrice => prevTotalPrice.minus(decimalPrice)); 
    } else {
      setSelectedDishes([...selectedDishes, dishId]);
      setSelectedDishesList([...selectedDishesList, dishName]);
      setTotalPrice(prevTotalPrice => prevTotalPrice.plus(decimalPrice)); 
      console.log(selectedDishes);
      console.log(selectedDishesList);
    }
  }

  useEffect(()=> {
    dispatch(getRestaurants(userByUserName.LocationId));
    console.log(moment().format('YYYY-MM-DD'));
    dispatch(verifyBudgedIsActive(moment().format('YYYY-MM-DD'), userByUserName.id));
  }, [])

  const heandleDisch = (e) => {
    const keyDish = e.target.value;
    dispatch(getDishes(keyDish));
  }

return (
    <div>
    <h3 id={Style['title-newOrder']}>New Order</h3>
    <div id={Style['ContenedorMain']}>
        
        <div className={Style['ContenedorAside']}>
            <div id={Style['budge']}>
                <h3>RD${userByUserName.amount}</h3>
                <span>Budged Available </span>
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
                    <select className='form-control'
                      onChange={heandleDisch}
                    >
                       <option key={0} value={0}>Restaurants</option>
                        {restaurants.map((restaurant) => {
                          return (
                            <option value={restaurant.id} key={restaurant.id}>{restaurant.name}</option>
                            )
                        })}
                    </select>
            </div>

            <div id={Style['label-menus']}>
                <h2>Menú:</h2>
                <ul>
                    {disches?.map((dish) => {
                        return (
                          <>
                            <li key={dish.id}> 
                            <input key={uuidv4()} 
                              type='checkbox'
                              checked={selectedDishes.includes(dish.id)}
                              onChange={() => handleDishToggle(dish.id, dish.name, dish.price)}
                            /> {dish.name} - <span key={uuidv4()}>RD${dish.price}</span>
                            </li>
                          </>
                        )
                    })}
                </ul>
            </div>

        </div>

            <div id={Style['price-order']}>
                <p>Dishes</p>
                <div className={Style['container-plate-selected']}>
                    <ul>
                    {selectedDishesList.map((dishName, index) => (
                      <li key={index}>Plate #{index + 1}: {dishName}</li>
                     ))}
                    </ul>
                </div>
                
                
                <div id={Style['budgepay_1']}>
                    <span>Budge</span>
                    <span>{budged ? "RD$0.00" : "RD$75"} </span>
                </div>

                <div id={Style['budgepay_2']}>
                    <span>You Pay</span>
                    <span>RD${totalPrice.toFixed(2)}</span>
                </div>

                <button id={Style['botonPlaceOrder']} className='btn btn-warning btn-lg'>Place Order</button>
            </div>

    </div>
    </div>
);

}

export default Main;