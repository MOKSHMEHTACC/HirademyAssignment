const router = require("express").Router();
const Assistant = require("../models/Assistant");
//create
router.post("/", async (req, res) => {
    const newAssistant = new Assistant({
        id: req.body.id,
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        salary: req.body.salary,
        city: req.body.city,
        country: req.body.country,
        department: req.body.department,
        role: req.body.role,


    });

    try {
        const savedAssistant = await newAssistant.save();
        res.status(201).json(savedAssistant);
    } catch (err) {
        res.status(500).json(err);
    }

});

//update
router.put("/:id",async(req,res)=>{
    
    try{
        const updatedAssistant=await Assistant.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true});
        res.status(200).json(updatedAssistant);   
    }catch(err){
        res.status(500).json(err);
    }
});

//get
router.get("/:id",async(req,res)=>{
    try{
       const assistant=await Assistant.findById(req.params.id);
       res.status(200).json(assistant);
       
    }catch(err){
       res.status(500).json(err)
    }
});

//delete
router.delete("/:id",async(req,res)=>{
    try{
       await Assistant.findByIdAndDelete(req.params.id)
       res.status(200).json("Assistant has been deleted")
    }catch(err){
       res.status(500).json(err)
    }
   });

module.exports = router;