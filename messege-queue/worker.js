const { Worker } = require('bullmq');
const { ConnectionOptions } = require('bullmq');

const connection = {
  host: '127.0.0.1',  // Ensure Redis is running on this host
  port: 6379          // Default Redis port
};

const sendEmail = new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker(
  'email-queue',
  async (job) => {
    console.log(`Message rec id: ${job.id}`);

    console.log('Processing message...');
    console.log(`Sending email to ${job.data.email}`);

    await sendEmail;
  },
  { connection } // Pass the Redis connection here
);
