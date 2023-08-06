const { Order } = require("../db");
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

const verifyBudgeOrder = async (req, res) => {

  try {
    const { date, UserId } = req.body;
   
    const formattedDate = new Date(date);
    const order = await Order.findOne({
      where: {
        date:formattedDate, 
        UserId
      },
    });


    if(order) res.status(200).json(false)
    else res.status(200).json(true)
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

const fillOrder = async (Order) => {
  try {
    await Order.bulkCreate([
      { date: "2023-08-05", charged: 126, RestaurantId: 1, DishId: 1, UserId: 1 },
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

module.exports = { getOrders, fillOrder, insertOrder , verifyBudgeOrder};
