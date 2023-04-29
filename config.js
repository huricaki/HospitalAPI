require('dotenv').config();

const config={
    env:process.env.DB_ENV,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    host:process.env.DB_HOST
}

function parseBooler(str){
    return str=== 'true'? true:false
}

function parseServiceUrl(url){
    return url!== undefined?url.replace(/\/$/, ''):url
}
module.exports=config