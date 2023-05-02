const Doctor=require('../models/Doctor');
const express=require('express');
//const postDoctor = require('./postDoctor');
 //const router=express.Router();

console.log("addDoc fonk come");
async function addDoctor(req,res,next){
    console.log('/api/AddDoctor method tetik');
    const trans =await db.sequelize.transaction();
    express.json(req.body);
    console.log(express.json(req.body));
    
    try{
        console.log(req.body);
        Doctor.create(req.body);
        const newDoctor=await db.doctor.create({
            ...req.body,
            name:"",
            mobile:"",                      
            email:"",
            gender:"",
            department:"",
            birthDate:"",
            qualification:"",
        },{transaction:trans});

        await trans.commit()
        res.status(200).json({ 
            success: true,
            message: 'Doctor created successfully',
            data: newDoctor
        });

    }catch(err){
        console.error(err);
        await trans.rollback()
        next(err)
    }
};

module.exports = {
    addDoctor
};


