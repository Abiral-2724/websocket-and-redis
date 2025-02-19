const {Queue} = require('bullmq') ;

const notificationQueue = new Queue('email-queue') ;

async function init() {

    const res = await notificationQueue.add('email to abiral' ,{email : 'jain@gmail.com' ,subject:'welcome'}) ;

    console.log('jon added to qeue' ,res.id) ;

}

init() ;