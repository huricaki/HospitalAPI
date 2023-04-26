const {Sequelize, Model, DataType, DataTypes}=require('sequelize');
const sequelize=new Sequelize('database','username','password',{
    dialect:'sqlite',
    storage:'./database.sqlite'
});
const Doctor=sequelize.define('Doctor',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email: {
        type:DataTypes.STRING,
         allowNull:true
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:true
    },
    department:{
        type:DataTypes.STRING,
        allowNull:true
    },
    birthDate:{
        type:DataTypes.STRING,
        allowNull:true
    },
    qualification:{
        type:DataTypes.STRING,
        allowNull:true
    }

},{
    tableName:'Doctor'
});
module.exports=Doctor;