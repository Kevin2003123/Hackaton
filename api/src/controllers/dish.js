const { Dish, Restaurant } = require("../db");
const axios = require("axios");

const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll();

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDishesByRestaurantId = async (req, res) => {
  try {
    const { id } = req.params;
    const dishes = await Dish.findAll({
      where: {
        RestaurantId: id,
      },
    });

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fillDish = async (Dish, Restaurant) => {
  try {
    const data = [
      {
        name: "Hamburguesa clásica",
        price: 300,
        RestaurantId: 1,
      },
      {
        name: "Pizza margarita",
        price: 150,
        RestaurantId: 2,
      },
      {
        name: "Sushi variado",
        price: 250,
        RestaurantId: 3,
      },
      {
        name: "Ensalada César",
        price: 400,
        RestaurantId: 1,
      },
      {
        name: "Pasta Alfredo",
        price: 450,
        RestaurantId: 4,
      },
      {
        name: "Tacos de carne asada",
        price: 250,
        RestaurantId: 2,
      },
      {
        name: "Salmón a la parrilla",
        price: 200,
        RestaurantId: 3,
      },
      {
        name: "Sopa de tortilla",
        price: 150,
        RestaurantId: 1,
      },
      {
        name: "Pollo al curry",
        price: 300,
        RestaurantId: 5,
      },
      {
        name: "Ceviche de camarones",
        price: 400,
        RestaurantId: 4,
      },
      {
        name: "Tiramisú",
        price: 600,
        RestaurantId: 6,
      },
      {
        name: "Burrito vegano",
        price: 180,
        RestaurantId: 5,
      },
    ];
    const data2 = [
      {
        DishId: 1,
        RestaurantId: 1,
      },
      {
        DishId: 2,
        RestaurantId: 2,
      },
      {
        DishId: 3,
        RestaurantId: 3,
      },
      {
        DishId: 4,
        RestaurantId: 1,
      },
      {
        DishId: 5,
        RestaurantId: 4,
      },
      {
        DishId: 6,
        RestaurantId: 2,
      },
      {
        DishId: 7,
        RestaurantId: 3,
      },
      {
        DishId: 8,
        RestaurantId: 1,
      },
      {
        DishId: 9,
        RestaurantId: 5,
      },
      {
        DishId: 10,
        RestaurantId: 4,
      },
      {
        DishId: 11,
        RestaurantId: 6,
      },
      {
        DishId: 12,
        RestaurantId: 5,
      },
    ];

    Dish.bulkCreate(data);

    for (const element of data2) {
      const restaurant = await Restaurant.findByPk(element.RestaurantId);

      await restaurant.addDishes([element.DishId]);
    }
  } catch (error) {
    console.error("Error al crear y asociar los registros:", error);
  }
};

module.exports = { getDishes, fillDish, getDishesByRestaurantId };
