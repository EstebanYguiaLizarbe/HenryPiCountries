const { getAllCountries } = require("./getAllCountries")

const getCountryByName = async (nameLower) => {
    const countries = await getAllCountries()
    let countryFound = countries.filter(country => country.name.toLowerCase().startsWith(nameLower) )
    return countryFound
}

module.exports = {
    getCountryByName,
}