async function postDoctor(req,res,next){
    console.log('/api/AddDoctor method tetik');
    const trans =await db.sequelize.transaction();
    //console.dir(Doctor);
    try{
        console.log(req.body);
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

module.exports = postDoctor;