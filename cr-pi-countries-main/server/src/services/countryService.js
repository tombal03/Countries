require("dotenv").config();
const {Country, Activity} = require("../db");
const {Sequelize, Op} = require("sequelize")
const {URL_API} = process.env;
const axios = require("axios");

const getCountriesApi = async () => {
    let api = await axios.get(`${URL_API}`);
    api = await api.data?.map((countryData) => {
        return {
            id: countryData.cca3,
            name: countryData.name.common,
            image: countryData.flags.svg,
            continent: countryData.continents[0],
            capital: countryData.capital	? countryData.capital[0] : "Not Found",
            subregion: countryData.subregion	? countryData.subregion : "Not Found",
            area: countryData.area,
            population: countryData.population, 
            activities: countryData.activities?.map((activity) => {
                return {
                    name: activity.name,
                    difficulty: activity.difficulty,
                    duration: activity.duration,
                    season: activity.season,
                };
            }),
        }
    })
    let db = await Country.findAll();
    if (db.length === 0) {
        savedOnDB = await Country.bulkCreate(api);
        return savedOnDB;
    }

    let allCountries = await Country.findAll({
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            },
        },
    });

    allCountries = allCountries.map((countryData) => {
        return {
            id: countryData.id,
            name: countryData.name,
            image: countryData.image,
            continent: countryData.continent,
            capital: countryData.capital,
            subregion: countryData.subregion,
            area: countryData.area,
            population: countryData.population,
            activities: countryData.activities?.map((activity) => {
                return {
                    name: activity.name,
                    difficulty: activity.difficulty,
                    duration: activity.duration,
                    season: activity.season,
                };
            }),
        };
    });
    return allCountries;
}

const getCountryByName = async (name) => {
    const aux = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Activity,
          through: {
            attributes: [],
          },
        },
      });
    
      return aux;
}

const getCountryByPk = async (id) => {
    let aux = await Country.findByPk(id, {
        include: {
            model: Activity,
            through: {
                attributes: [],
            },
        },
    })
    return aux
}

const getCountryByActivityID = async (id) => {
    let paisesFiltrados = Country.findAll({
        include: {
          model: Activity,
          where: { id: id },
          through: { attributes: [] },
        },
      });
    return paisesFiltrados
}

const getCountryByContinent = async (continent) => {
    let paisesFiltrados = Country.findAll({
        where: {
          continent: continent
        },
      });
    return paisesFiltrados
}

module.exports = {
    getCountriesApi, 
    getCountryByName,
    getCountryByPk,
    getCountryByActivityID,
    getCountryByContinent
}