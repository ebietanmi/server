const carModel = require('../Models/Cars');
//to post new cars

exports.postCars = async(req,res)=>{
    try{
        if(!req.body.Car || !req.body.Path || !req.body.Fare){
            return res.json({
                message:"fill required fields"
            })
        }else{
            //query to create the data
            const details = await carModel.create(req.body)
            return res.json({
                message:"post was succesfull",
                details:details
            })
        }
    }catch(error){
        return res.json({
            message:error
        })
    }
}
    