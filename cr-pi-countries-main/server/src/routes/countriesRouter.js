const { Router } = require("express");
const countryRouter = Router();
const {getCountries, getCountryById, getCountryByAID, getCountryByCont} = require("../handlers/countriesHandler")

countryRouter.get("/", getCountries)

countryRouter.get("/:id", getCountryById)

countryRouter.get("/cbid/:id", getCountryByAID)

countryRouter.get("/cbc/:continent", getCountryByCont)

module.exports = countryRouter;