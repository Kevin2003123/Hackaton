const server = require("./src/app.js");
const { conn, User, Restaurant, Location, Dish, RestaurantDish} = require("./src/db.js");
const {fillUser} = require("./src/controllers/user.js")
const {fillRestaurant} = require("./src/controllers/restaurant.js")
const {fillLocation} = require("./src/controllers/location.js")
const {fillDish} = require("./src/controllers/dish.js")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    //fillUser(User);
    
    fillLocation(Location)
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
   fillRestaurant(Restaurant)

   
   setTimeout(()=>{
    fillDish(Dish, Restaurant, RestaurantDish)
   }, 2000)
  });
});