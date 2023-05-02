const express =require('express');
const bodyParser=require('body-parser');
const app=express();
const config=require('./config');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./Middlewares/database-connect')()
.then(()=>{
  //const router =express.Router();
  const routes=require('./routes');
  console.log("efsdd0 0"+process.cwd());
  // router(app, routes, { controllerDirectory: `${process.cwd()}/controllers/`, controllerFileSuffix: '-controller.js', logRoutesList: false })
  app.use('/', routes);
 // app.use('/api/doctor', routes);

  if (config.env==='development') {
    console.log("server listen");
    const http = require('http')
    const httpServer = http.createServer(app)
    httpServer.listen(3307, () => {
      if (config.env==='development') {
        console.log(`${config.database} service is running at http://localhost:${httpServer.address().port} for public usage`)
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