const express = require('express');
const router = express.Router();
const docController = require('./controllers/doctor-controller.js');

// const routes=[
//     // {method:'post',path:'/Doctor',controller:'doctor-controller',action:'AddDoctor'}

//]
console.log(docController);
router.post('/doctor', docController.controllers.postDoctor);

module.exports=router;