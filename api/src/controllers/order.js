const { Order } = require("../db");
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

const fillOrder = async (Order) => {
  try {
    await Order.bulkCreate([
      { charged: 126, RestaurantId: 1, DishId: 1 },
      { charged: 120, RestaurantId: 1, DishId: 4 },
      { charged: 50, RestaurantId: 3, DishId: 3 },
      { charged: 60, RestaurantId: 3, DishId: 7 },
      { charged: 70, RestaurantId: 4, DishId: 5 },
      { charged: 80, RestaurantId: 4, DishId: 10 },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getOrders, fillOrder };
