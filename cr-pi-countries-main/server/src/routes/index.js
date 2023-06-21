const { Router } = require("express");
const activitiesRouter = require("./activitiesRouter")
const countriesRouter = require("./countriesRouter")

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter)
mainRouter.use("/activities", activitiesRouter)

module.exports = mainRouter;
