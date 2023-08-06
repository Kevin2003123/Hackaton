const { Order, Restaurant, Location, Dish } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Restaurant,
          attributes: ["id", "name"],
        },
        {
          model: Dish,
          attributes: ["id", "name"],
        },
      ],
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByRestaurantId = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findAll({
      where: { RestaurantId: id },
      include: [
        {
          model: Restaurant,
          attributes: ["id", "name"],
          include: [{ model: Location, attributes: ["id", "city"] }],
        },
        {
          model: Dish,
          attributes: ["id", "name"],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findAll({
      where: { RestaurantId: id },
      include: [
        {
          model: Restaurant,
          attributes: ["id", "name"],
          include: [{ model: Location, attributes: ["id", "city"] }],
        },
        {
          model: Dish,
          attributes: ["id", "name"],
        },
      ],
    });

    const orderLocation = orders.filter(x=> x.Restaurant.Location.id === id)
    
    res.status(200).json(orderLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyBudgeOrder = async (req, res) => {
  try {
    const { date, UserId } = req.body;

    const formattedDate = new Date(date);
    const order = await Order.findOne({
      where: {
        date: formattedDate,
        UserId,
      },
    });

    if (order) res.status(200).json(false);
    else res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const insertOrder = async (req, res) => {
  const { orders } = req.body;

  try {
    const response = await Order.bulkCreate(orders);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrderStatus =  async(req, res) =>{

  try {
    const{id} = req.params
  const {status} = req.body
  const order = await Order.findByPk(id)
  await order.update({status})
  res.status(200).json(order)

    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  

}

const fillOrder = async (Order) => {
  try {
    await Order.bulkCreate([
      { charged: 126, RestaurantId: 1, DishId: 1, UserId: 1 },
      { charged: 120, RestaurantId: 1, DishId: 4, UserId: 2 },
      { charged: 50, RestaurantId: 3, DishId: 3, UserId: 3 },
      { charged: 60, RestaurantId: 3, DishId: 7, UserId: 4 },
      { charged: 70, RestaurantId: 4, DishId: 5, UserId: 1 },
      { charged: 80, RestaurantId: 4, DishId: 10, UserId: 2 },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getOrders, fillOrder, insertOrder, verifyBudgeOrder , getOrdersByRestaurantId, getOrdersByLocation, updateOrderStatus};
