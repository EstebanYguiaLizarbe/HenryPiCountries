const { Router } = require("express");

const { getActivitiesHandler } = require("../handlers/getActivitiesHandler")
const { postActivityHandler } = require("../handlers/postActivityHandler")

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler)

activitiesRouter.post("/", postActivityHandler)

module.exports = activitiesRouter;