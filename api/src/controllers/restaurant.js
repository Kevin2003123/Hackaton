const { Restaurant } = require('../db');
const axios = require("axios");



const getRestaurants = async (req, res) => {
    try {
        const dishes = await Restaurant.findAll();

        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





const fillRestaurant = async (Restaurant) => {
    try {
       
        await Restaurant.bulkCreate([
            { name: "Restaurant 1" , LocationId: "1"},
            { name: "Restaurant 2" ,  LocationId: "2"},
            { name: "Restaurant 3" , LocationId: "3"},
            { name: "Restaurant 4" , LocationId: "4"},
            { name: "Restaurant 5" , LocationId: "5"},
            { name: "Restaurant 6" , LocationId: "6"},
        ]
        );
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = { getRestaurants, fillRestaurant };