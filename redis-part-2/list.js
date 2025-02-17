const client = require('./client') ;

async function init() {
   await client.lpush("msg" ,"1") ;
   await client.lpush("msg" ,"2") ;
   await client.lpush("msg" ,"3") ;
   await client.lpush("msg" ,"4") ;

   const result = await client.lpop('msg') ;

   console.log(result) ;
}

init() ;