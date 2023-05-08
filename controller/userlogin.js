
const Login=require('../db/userlogin');

const insert=async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
    }
    await Login.insertMany(data)
       res.send("home")
}

const load=async(req,res)=>{
    
    try{
        const check=await Login.findOne({name:req.body.name});
   if(check.name===req.body.name && check.password===req.body.password){
    res.send("home");
   }
   else{
    res.send("signup");
   }
}
   catch{
    res.send("signup")
  }


}

module.exports={load,insert}