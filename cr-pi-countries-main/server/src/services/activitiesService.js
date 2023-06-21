const { all } = require("axios")
const {Activity} = require("../db")

const getactivity = async () => {
   let allActivitys = await Activity.findAll()
   return allActivitys
}

const createactivity = async (name, difficulty, duration, season, countries)=> {
    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });

    if (countries && countries.length > 0) {
        await activity.addCountries(countries);
    }

    return activity
}

module.exports = {getactivity, createactivity}