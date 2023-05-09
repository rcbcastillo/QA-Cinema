const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');

// create an instance of MongoClient class
const client = new MongoClient(uri);

const database = "qa-cinema";

const connection = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${database} database`)
  } catch (err) {
    console.error(`Error while connecting to database: ${err}`);
  }
};

const run = async () => {
  try {
    await connection();
  } catch (err) {
    console.error(`Error while connecting to database: ${err}`);
  } finally {
    await client.close();
  }
};

run();