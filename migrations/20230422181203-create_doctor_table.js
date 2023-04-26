'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Doctor',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name:{
      type:Sequelize.STRING,
      allowNull:true
  },
  mobile:{
      type:Sequelize.STRING,
      allowNull:true
  },
  email: {
      type:Sequelize.STRING,
       allowNull:true
  },
  gender:{
      type:Sequelize.STRING,
      allowNull:true
  },
  department:{
      type:Sequelize.STRING,
      allowNull:true
  },
  birthDate:{
      type:Sequelize.STRING,
      allowNull:true
  },
  qualification:{
      type:Sequelize.STRING,
      allowNull:true
  },
  createdAt: {
    type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('NOW()')
  }

   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctor');
  }
};
