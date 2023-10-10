const { Country, Activity } = require("../db")


const createActivity = async (name, difficulty, duration, season, countries) => { 
    const regex = /^[A-Za-z\s]+$/;

    if(name.length === 0){
        throw new Error("Porfavor ingrese un nombre");
    }
    if(!regex.test(name)){
        throw new Error("El nombre no debe contener caracteres raros");
    }
    
    if(!name || !difficulty ||  !season){
        throw new Error("La informacion esta incompleta por favor revisa el formulario");
    }

    if(duration < 0){
        throw new Error("Ingrese una hora realista xD");
    }

    if(duration > 23){
        throw new Error("Ingrese una hora realista xD");
    }

    if(countries.length === 0){
        throw new Error("Ingrese un pais porfavor");
    }
    
    const newAct = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
    })

    const country = await Country.findAll({ where: { name: countries } });

    country.forEach(async (country) => {
        await newAct.addCountries(country.dataValues.id);
    });
    
    return newAct;
}

module.exports = {
    createActivity,
}