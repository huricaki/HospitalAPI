const Sequelize = require('sequelize');
global.Sequelize=Sequelize;
const db={};
const config=require('../config');
const mysql=require('mysql2');

const makeSureDatabaseConnect=()=>new Promise((resolve, reject)=>{
    console.log('Database module start');
    const sequelize=new Sequelize(config.database, config.user,config.password,{
        dialect:'mysql',
        host:config.host,
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

// const makeSureMySqlConnect=()=>new Promise((resolve, reject)=>{
//     mysql.createConnection({
//         host:config.host,
//         user:config.user,
//         password:config.password,
//         database:config.database,
//         port:config.port
//     });
  
// })
module.exports=makeSureDatabaseConnect;