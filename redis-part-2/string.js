const client = require('./client') ;

async function init() {
    // set a value 
    // await client.set('gandu:8' ,"hello from node js")

    // expiry a key
    // await client.expire("gandu:1" ,10)

    // get a value 
    const result = await client.get('gandu:1') ;
    
    
    console.log(result) ;
}

init() ;