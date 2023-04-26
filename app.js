const express =require('express');
const bodyParser=require('body-parser');
const app=express();
const doctorRoutes=require('./controllers/doctor-controller');
const config=require('./config/config.json');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./Middlewares/database-connect')()
.then(()=>{
  const router =express.Router();
  const routes = require('./routes');

  router(app, routes, { controllerDirectory: `${process.cwd()}/src/controllers/`, controllerFileSuffix: '-controller.js', logRoutesList: false })
  
  if (config.env === 'development' || config.env === 'production') {
    console.log("server listen");
    const http = require('http')
    const httpServer = http.createServer(app)
    httpServer.listen(config.port, () => {
      if (config.env === 'development') {
        console.log(`${config.session.name} service is running at http://localhost:${httpServer.address().port} for public usage`)
      }
    })
  }
  module.exports=app;
})
.catch((err)=>{
  console.error(err);
  console.log("Closing app");
  process.exit(500);
})



//console.log(sequelize);

// async function startServer() {
//     try {
//       await sequelize.authenticate();
//       console.log('Connection has been established successfully.');
//       await sequelize.sync();
//       console.log('All models were synchronized successfully.');
//       app.listen(3000, () => {
//         console.log('Server started on port 3000');
//       });
//     } catch (err) {
//       console.error('Unable to connect to the database:', err);
//     }
//   }
  
//   startServer();