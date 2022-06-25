
import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken"
import User from "../../models/User"


const handler=async(req, res)=>{
    if(req.method=='POST'){
        let token=req.body.token
        let user=jsonwebtoken.verify(token,process.env.NEXT_PUBLIC_JWT_SECRET)
        //console.log(user)
        let dbuser=await User.findOne({email:user.email})
         //console.log(dbuser)
        const {name,email,address,pincode,phone}=dbuser
        res.status(200).json({name,email,address,pincode,phone})
    }
    else{
        res.status(400).json({error:"error"})
    }
     
        
        
       
        
      
}
export default connectDb(handler)