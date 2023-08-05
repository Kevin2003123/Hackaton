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
        const{id}= req.params
      const dishes = await Dish.findAll({where:{
        RestaurantId: id
      }});
  
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const fillDish = async (Dish, Restaurant, RestaurantDish) => {
  console.log("llegue aquis");

  try {
    const data = [
      {
       
        name: "Hamburguesa clásica",
        price: 9.99,
        RestaurantId: 1,
      },
      {
       
        name: "Pizza margarita",
        price: 12.5,
        RestaurantId: 2,
      },
      {
       
        name: "Sushi variado",
        price: 18.75,
        RestaurantId: 3,
      },
      {
       
        name: "Ensalada César",
        price: 7.95,
        RestaurantId: 1,
      },
      {
       
        name: "Pasta Alfredo",
        price: 10.25,
        RestaurantId: 4,
      },
      {
        
        name: "Tacos de carne asada",
        price: 8.5,
        RestaurantId: 2,
      },
      {
        
        name: "Salmón a la parrilla",
        price: 15.99,
        RestaurantId: 3,
      },
      {
        
        name: "Sopa de tortilla",
        price: 6.25,
        RestaurantId: 1,
      },
      {
       
        name: "Pollo al curry",
        price: 11.5,
        RestaurantId: 5,
      },
      {
       
        name: "Ceviche de camarones",
        price: 14.75,
        RestaurantId: 4,
      },
      {
       
        name: "Tiramisú",
        price: 8.95,
        RestaurantId: 6,
      },
      {
       
        name: "Burrito vegano",
        price: 9.5,
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
      
    
    Dish.bulkCreate(data)

    for(const element of data2){
      const restaurant= await Restaurant.findByPk(element.RestaurantId)

      await restaurant.addDishes([element.DishId]);

    }
    

  } catch (error) {
    console.error("Error al crear y asociar los registros:", error);
  }
};

module.exports = { getDishes, fillDish, getDishesByRestaurantId };
