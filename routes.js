const express = require('express');
const router = express.Router();
const docController = require('./controllers/doctor-controller');

// const routes=[
//     // {method:'post',path:'/Doctor',controller:'doctor-controller',action:'AddDoctor'}

//]
console.log("routes.js controoller ");
router.post('/api/doctor', docController.addDoctor);

module.exports=router;