const server = require("./src/app.js");
const {
  conn,
  User,
  Restaurant,
  Location,
  Dish,
  Order,
} = require("./src/db.js");
const { fillUser } = require("./src/controllers/user.js");
const { fillRestaurant } = require("./src/controllers/restaurant.js");
const { fillLocation } = require("./src/controllers/location.js");
const { fillDish } = require("./src/controllers/dish.js");
const { fillOrder } = require("./src/controllers/order.js");

async function fillData() {
  try {
    await conn.sync({ force: true });

    server.listen(3001, async () => {
      await fillLocation(Location);

      await fillRestaurant(Restaurant);

      await fillDish(Dish, Restaurant);

      

      await fillUser(User);

      await fillOrder(Order);

      console.log("%s listening at 3001");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fillData();


