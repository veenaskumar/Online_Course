const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wtproject')
.then(()=>console.log('mongodb conneted........'))
.catch((err)=>console.log(err));

const Loginschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

const Login=mongoose.model('login',Loginschema);
module.exports=Login