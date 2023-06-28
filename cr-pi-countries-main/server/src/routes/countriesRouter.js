const { Router } = require("express");
const countryRouter = Router();
const {getCountries, getCountryById, getCountryByAN, getCountryByCont} = require("../handlers/countriesHandler")

countryRouter.get("/", getCountries)

countryRouter.get("/:id", getCountryById)

countryRouter.get("/cbid/:name", getCountryByAN)

countryRouter.get("/cbc/:continent", getCountryByCont)

module.exports = countryRouter;