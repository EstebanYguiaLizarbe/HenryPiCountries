const { Router } = require("express");

const { getCountriesHandler } = require("../handlers/getCountriesHandler")
const { getCountriesByIdHandler } = require("../handlers/getCountryByIdHandler")


// Aqui van todas las rutas que sean de /countries
const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler)

countriesRouter.get("/:id", getCountriesByIdHandler)

module.exports = countriesRouter;