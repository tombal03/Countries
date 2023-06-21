const {getactivity, createactivity} = require("../services/activitiesService")

const getActivity= async (req, res) => {
   let allActivitys = await getactivity(
   );
    try {
        res.status(200).json(allActivitys)
   } catch (error) {
        res.status(500).json(error.message) 
   }
}

const createActivity = async (req, res)=> {
    const {name, difficulty, duration, season, countries} = req.body
    try {
       const activity = await createactivity(name, difficulty, duration, season, countries);
       res.status(201).json(activity);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    getActivity, 
    createActivity,
}