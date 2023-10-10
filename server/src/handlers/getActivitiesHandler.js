const { getActivities } = require("../controllers/getActivities")

const getActivitiesHandler = async (req, res) => { 
    try{
        const activities = await getActivities();

        if(activities.length === 0){
            res.status(201).json({message: "No activities found :("})
        }

        res.status(200).json(activities)
        
       
    } catch(error){
        return res.status(404).json({error: error.message})   
    }      
}

module.exports = {
    getActivitiesHandler,
}