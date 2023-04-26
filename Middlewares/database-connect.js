const Sequelize = require('sequelize');
global.Sequelize=Sequelize;
const db={};
const config=require('../config/config.json');

const makeSureDatabaseConnect=()=>new Promise((resolve, reject)=>{
    console.log('Database module start');
    const sequelize=new Sequelize(config.development.database, config.development.username,config.development.password,{
        dialect:'postgresql',
        host:config.development.host,
        logging:false
    });

    global.sequelize=sequelize;
    global.db=db;
    console.log("auth fonk");
    sequelize.authenticate()
        .then(()=>{
            const models=require('../models');
            db.sequelize=sequelize;
            db.Sequelize=Sequelize;
            Object.keys(models).forEach(model=>{
                db[model]=models[model]
            });
            //force: true
            sequelize.sync({alter: true}).then(()=>{
                console.log('Database synced succesfully');
                resolve()
            });
        })
        .catch(err=>{
            console.error('Unabled to connect to the database',err);
            reject()
        });
});
module.exports=makeSureDatabaseConnect;