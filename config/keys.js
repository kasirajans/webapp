if(APPSETTING_NODE_ENV==='prodcution')
{
    module.exports=require('./prod.js');
}
else{
module.exports=require('./dev');
}