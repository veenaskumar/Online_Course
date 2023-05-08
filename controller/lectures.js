const Lecture=require('../db/lectures');

const create1=async(req,res)=>{
  const t=await Lecture.create(req.body)
  res.status(201).json(t)    
}

const getlecture=async(req,res)=>{
    const lid=req.params.id;
    const t=await Lecture.findOne({ id:lid});
    if(!t){
        res.send("no data");
    }
    res.status(200).json(t)  

}

const getalllecture=async(req,res)=>{
    const t= await Lecture.find({})
    if(!t)
    res.status(500).json("no data");
 res.status(200).json(t)
}

const update=async(req,res)=>{
    try{
        const lid=Number(req.params.id);
        const t=await Lecture.findOneAndUpdate({id:lid},{...req.body});
        if(!t){
            res.send("no data");
        }
        res.status(200).json(t)  
    } catch(err){
        res.status(500).json({msg:err})
    }
}
const delete1=async(req,res)=>{
    try{
    const lid=Number(req.params.id);
    const t=await Lecture.findOneAndDelete({ id:lid});
    if(!t){
        res.send("no data");
    }
    res.status(200).json(t)  
} catch(err){
    res.status(500).json({msg:err})
}

}

module.exports={create1,getlecture,getalllecture,update,delete1}