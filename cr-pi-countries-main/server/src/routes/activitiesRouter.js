const { Router } = require("express");
const activitiesRouter = Router();
const {getActivity, createActivity} = require("../handlers/activitiesHandlers")

activitiesRouter.get("/" , getActivity)

activitiesRouter.post("/" , createActivity)


module.exports = activitiesRouter;