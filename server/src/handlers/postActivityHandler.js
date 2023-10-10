const { Country, Activity } = require("../db")
const { createActivity } = require("../controllers/createActivity")


const postActivityHandler = async (req, res) => { 
    try{
        const { name, difficulty, duration, season, countries } = req.body;
        
        const newActivity = await createActivity(name, difficulty, duration, season, countries)
        res.status(201).json(newActivity)
       
    } catch(error){
        return res.status(404).send(error.message)   
    }      
}

module.exports = {
    postActivityHandler,
}