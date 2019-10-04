const carModel = require('../Models/Cars');
//to post new cars

exports.postCars = async(req,res)=>{
    try{
        if(!(req.body.Cars) || !(req.body.Path) || !(req.body.Fare)){
            return res.json({
                message:"fill required fields"
            })
        }else{
            return res.json({
                message:"post was succesfull"
            })
        }
    }catch(error){
        return res.json({
            message:error
        })
    }
}
    