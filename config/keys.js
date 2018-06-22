if(process.env.NODE_ENV==='prodcution')
//if(false)
{
    module.exports=require('./prod.js');
}
else{
module.exports=require('./dev');
}