const { Location } = require('../db');
const axios = require("axios");



const getLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();

        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const fillLocation = async (Location) => {
    try {
      
        await Location.bulkCreate([
            { city: "Santiado" },
            { city: "Santo Domingo" },
            { city: "San Francico" },
            { city: "La vega" },
            { city: "Monte Cristi" },
            { city: "Bonao" },
        ]
        );
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = {  fillLocation, getLocations};