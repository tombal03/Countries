const {getCountriesApi, getCountryByName, getCountryByPk, getCountryByActivityName, getCountryByContinent} = require("../services/countryService")

const getCountries = async (req, res) => {
    const {name} = req.query;
    try {
        if (name) {
            const aux = await getCountryByName(name)
            return res.status(200).json(aux)
        }
    else {
        const getAll = await getCountriesApi()
        return res.status(200).send(getAll)
        }
    } catch (error) {
        return res.status(500).json(error.message)
   }
    
}

const getCountryById = async (req, res) => {
    const {id} = req.params
    try {
        const findId = await getCountryByPk(id)
        return res.status(200).json(findId)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getCountryByAN = async (req, res) => {
    const {name} = req.params
    try {
        const findId = await getCountryByActivityName(name)
        return res.status(200).json(findId)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getCountryByCont = async (req, res) => {
    const {continent} = req.params
    try {
        const findId = await getCountryByContinent(continent)
        return res.status(200).json(findId)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getCountries,
    getCountryById,
    getCountryByAN,
    getCountryByCont
}