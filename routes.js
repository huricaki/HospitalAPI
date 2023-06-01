const express = require('express');
const router = express.Router();
const docController = require('./controllers/doctor-controller');

const routes=[
    {method:'get',path:'/Doctor',controller:'doctor-controller',action:'AddDoctor'}

]
console.log("routes.js controoller ");
router.post('/api/doctor', docController.addDoctor);
router.get('/api/getDoctor', docController.getDoctor);

module.exports=router;